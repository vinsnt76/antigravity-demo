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
          className="px-6 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-[#F4C430] font-semibold shadow-sm transition-all duration-200"
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
          className="px-6 py-2.5 rounded-lg bg-[#F4C430] hover:bg-[#e0b220] text-gray-800 font-semibold shadow-sm transition-all duration-200"
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
