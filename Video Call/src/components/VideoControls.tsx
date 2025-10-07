import React from 'react';
import { Video, VideoOff, Mic, MicOff } from 'lucide-react';
import { ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-react';

interface VideoControlsProps {
  videoTrack: ICameraVideoTrack | null;
  audioTrack: IMicrophoneAudioTrack | null;
  videoEnabled: boolean;
  audioEnabled: boolean;
  onToggleVideo: () => void;
  onToggleAudio: () => void;
}

export const VideoControls: React.FC<VideoControlsProps> = ({
  videoEnabled,
  audioEnabled,
  onToggleVideo,
  onToggleAudio
}) => {
  return (
    <div className="absolute bottom-4 left-4 space-x-2">
      <button
        onClick={onToggleVideo}
        className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700"
      >
        {videoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
      </button>
      <button
        onClick={onToggleAudio}
        className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700"
      >
        {audioEnabled ? <Mic size={20} /> : <MicOff size={20} />}
      </button>
    </div>
  );
};