import * as tmImage from '@teachablemachine/image';

export interface Prediction {
  className: string;
  probability: number;
}

export type TeachableMachineModel = tmImage.CustomMobileNet;
export type TeachableMachineWebcam = tmImage.Webcam;