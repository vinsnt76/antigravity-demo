export default function FormNavigation({
  currentStep,
  onNext,
  onBack,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex justify-between pt-4">
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-colors"
        >
          Back
        </button>
      ) : (
        <div />
      )}

      {currentStep < 4 ? (
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium transition-colors"
        >
          Submit
        </button>
      )}
    </div>
  );
}
