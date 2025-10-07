interface CapturedImageProps {
  imageUrl: string;
}

export function CapturedImage({ imageUrl }: CapturedImageProps) {
  return (
    <div className="col-span-2">
      <h2 className="text-lg font-semibold mb-3">Captured Image</h2>
      <div className="border border-gray-200 p-4 rounded-lg">
        <img
          src={imageUrl}
          alt="Captured"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}