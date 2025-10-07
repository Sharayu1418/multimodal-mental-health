import { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';
import { MODEL_CONFIG } from '../config/model';
import type { TeachableMachineWebcam } from '../types/teachable-machine';

interface WebcamCaptureProps {
  onWebcamInit: (webcam: TeachableMachineWebcam) => void;
}

export function WebcamCapture({ onWebcamInit }: WebcamCaptureProps) {
  const webcamContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWebcam = async () => {
      try {
        const { width, height, flip } = MODEL_CONFIG.webcam;
        const webcam = new tmImage.Webcam(width, height, flip);
        await webcam.setup();
        await webcam.play();
        
        if (webcamContainerRef.current) {
          webcamContainerRef.current.appendChild(webcam.canvas);
        }
        
        onWebcamInit(webcam);
      } catch (error) {
        console.error('Failed to initialize webcam:', error);
      }
    };

    initWebcam();
  }, [onWebcamInit]);

  return <div ref={webcamContainerRef} className="border border-gray-200 p-4 rounded-lg" />;
}