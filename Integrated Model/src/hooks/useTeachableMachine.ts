import { useState, useEffect, useCallback } from 'react';
import * as tmImage from '@teachablemachine/image';
import { MODEL_CONFIG } from '../config/model';
import type { Prediction, TeachableMachineModel, TeachableMachineWebcam } from '../types/teachable-machine';

export function useTeachableMachine() {
  const [model, setModel] = useState<TeachableMachineModel | null>(null);
  const [webcam, setWebcam] = useState<TeachableMachineWebcam | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const loadModel = useCallback(async () => {
    try {
      const modelURL = MODEL_CONFIG.baseUrl + "model.json";
      const metadataURL = MODEL_CONFIG.baseUrl + "metadata.json";
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    } catch (error) {
      console.error('Failed to load model:', error);
    }
  }, []);

  useEffect(() => {
    loadModel();
  }, [loadModel]);

  const predict = useCallback(async () => {
    if (!model || !webcam || !isRunning) return;

    try {
      const prediction = await model.predict(webcam.canvas);
      setPredictions(prediction);
      requestAnimationFrame(predict);
    } catch (error) {
      console.error('Prediction failed:', error);
      setIsRunning(false);
    }
  }, [model, webcam, isRunning]);

  useEffect(() => {
    if (isRunning) {
      predict();
    }
  }, [isRunning, predict]);

  const handleWebcamInit = useCallback((initializedWebcam: TeachableMachineWebcam) => {
    setWebcam(initializedWebcam);
  }, []);

  const startPrediction = useCallback(() => {
    setIsRunning(true);
    setCapturedImage(null);
  }, []);

  const stopPrediction = useCallback(async () => {
    setIsRunning(false);
    if (webcam) {
      const imageData = webcam.canvas.toDataURL();
      setCapturedImage(imageData);
      webcam.stop();
    }
  }, [webcam]);

  return {
    model,
    predictions,
    capturedImage,
    isRunning,
    handleWebcamInit,
    startPrediction,
    stopPrediction
  };
}