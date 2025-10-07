import { WebcamCapture } from './WebcamCapture';
import { PredictionLabels } from './PredictionLabels';
import { Button } from './Button';
import { CapturedImage } from './CapturedImage';
import { useTeachableMachine } from '../hooks/useTeachableMachine';

export function ImageModel() {
  const {
    model,
    predictions,
    capturedImage,
    isRunning,
    handleWebcamInit,
    startPrediction,
    stopPrediction
  } = useTeachableMachine();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Image Recognition Model</h1>
      
      <div className="flex justify-center gap-4 mb-6">
        <Button
          onClick={startPrediction}
          disabled={!model || isRunning}
          variant="primary"
        >
          Start
        </Button>
        <Button
          onClick={stopPrediction}
          disabled={!isRunning}
          variant="danger"
        >
          Stop
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-3">Live Camera</h2>
          <WebcamCapture onWebcamInit={handleWebcamInit} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Predictions</h2>
          <div className="border border-gray-200 p-4 rounded-lg">
            <PredictionLabels predictions={predictions} />
          </div>
        </div>

        {capturedImage && <CapturedImage imageUrl={capturedImage} />}
      </div>
    </div>
  );
}