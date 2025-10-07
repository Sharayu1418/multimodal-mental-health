import React from 'react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
import { ICameraVideoTrack } from 'agora-rtc-react';
import { VideoControls } from './VideoControls';

interface VideoPlayerProps {
  videoTrack: ICameraVideoTrack;
  audioTrack?: any;
  showControls?: boolean;
  videoEnabled?: boolean;
  audioEnabled?: boolean;
  onToggleVideo?: () => void;
  onToggleAudio?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoTrack,
  audioTrack,
  showControls = false,
  videoEnabled = true,
  audioEnabled = true,
  onToggleVideo = () => {},
  onToggleAudio = () => {}
}) => {
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <AgoraVideoPlayer
        videoTrack={videoTrack}
        className="h-full w-full object-cover"
      />
      {showControls && (
        <VideoControls
          videoTrack={videoTrack}
          audioTrack={audioTrack}
          videoEnabled={videoEnabled}
          audioEnabled={audioEnabled}
          onToggleVideo={onToggleVideo}
          onToggleAudio={onToggleAudio}
        />
      )}
    </div>
  );
};