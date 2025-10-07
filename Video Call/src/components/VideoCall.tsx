import { useState, useEffect } from 'react';
import { IAgoraRTCRemoteUser } from 'agora-rtc-react';
import { agoraConfig, isValidAgoraConfig } from '../config/agora.config';
import { useAgoraClient } from '../hooks/useAgoraClient';
import { useAgoraTracks } from '../hooks/useAgoraTracks';
import { VideoPlayer } from './VideoPlayer';
import { ErrorMessage } from './ErrorMessage';

export const VideoCall = () => {
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [start, setStart] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  
  const client = useAgoraClient();
  const { ready, tracks } = useAgoraTracks();

  useEffect(() => {
    if (!isValidAgoraConfig()) {
      setError('Invalid Agora configuration. Please set a valid App ID in the configuration.');
      return;
    }

    if (!client) return;

    const handleUserPublished = async (user: IAgoraRTCRemoteUser, mediaType: 'audio' | 'video') => {
      try {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
          setUsers(prevUsers => {
            if (prevUsers.find(u => u.uid === user.uid)) {
              return prevUsers;
            }
            return [...prevUsers, user];
          });
        }
      } catch (error) {
        console.error('Error subscribing to user:', error);
        setError('Failed to connect to remote user');
      }
    };

    const handleUserUnpublished = (user: IAgoraRTCRemoteUser) => {
      setUsers(prevUsers => prevUsers.filter(User => User.uid !== user.uid));
    };

    const handleUserLeft = (user: IAgoraRTCRemoteUser) => {
      setUsers(prevUsers => prevUsers.filter(User => User.uid !== user.uid));
    };

    client.on('user-published', handleUserPublished);
    client.on('user-unpublished', handleUserUnpublished);
    client.on('user-left', handleUserLeft);

    return () => {
      client.off('user-published', handleUserPublished);
      client.off('user-unpublished', handleUserUnpublished);
      client.off('user-left', handleUserLeft);
    };
  }, [client]);

  const joinChannel = async () => {
    if (!client || !ready || !tracks) return;
    setError('');

    try {
      await client.join(agoraConfig.appId, agoraConfig.channelName, agoraConfig.token, agoraConfig.uid);
      await client.publish(tracks);
      setStart(true);
    } catch (error: any) {
      console.error('Error joining channel:', error);
      setError(error?.message || 'Failed to join the video call');
    }
  };

  const toggleVideo = async () => {
    if (tracks?.[1]) {
      await tracks[1].setEnabled(!videoEnabled);
      setVideoEnabled(!videoEnabled);
    }
  };

  const toggleAudio = async () => {
    if (tracks?.[0]) {
      await tracks[0].setEnabled(!audioEnabled);
      setAudioEnabled(!audioEnabled);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <ErrorMessage 
            message="Video Call Error" 
            details={error}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Video Call</h1>
          <p className="text-gray-600">Channel: {agoraConfig.channelName}</p>
        </div>

        {!start && (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <button
              onClick={joinChannel}
              disabled={!ready}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {ready ? 'Join Video Call' : 'Loading...'}
            </button>
          </div>
        )}

        {start && tracks && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <VideoPlayer
                videoTrack={tracks[1]}
                audioTrack={tracks[0]}
                showControls={true}
                videoEnabled={videoEnabled}
                audioEnabled={audioEnabled}
                onToggleVideo={toggleVideo}
                onToggleAudio={toggleAudio}
              />

              {users.map((user) => (
                <VideoPlayer
                  key={user.uid}
                  videoTrack={user.videoTrack!}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};