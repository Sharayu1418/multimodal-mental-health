import type { Prediction } from '../types/teachable-machine';

interface PredictionLabelsProps {
  predictions: Prediction[];
}

export function PredictionLabels({ predictions }: PredictionLabelsProps) {
  return (
    <div className="space-y-2">
      {predictions.map((prediction, index) => (
        <div key={index} className="text-gray-700">
          {prediction.className}: {prediction.probability.toFixed(2)}
        </div>
      ))}
    </div>
  );
}