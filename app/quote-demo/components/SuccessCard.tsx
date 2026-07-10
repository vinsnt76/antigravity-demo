export default function SuccessCard({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="space-y-6 text-gray-800 font-sans">
      <div className="bg-[#F4C430] px-4 py-3 rounded-lg flex items-center gap-3 mb-4">
        <img
          src="/bains-logo.webp"
          alt="Bains Renovations"
          className="h-10 w-auto"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">Thank You!</h2>
          <p className="font-caveat text-lg text-gray-700 leading-tight mt-0.5">
            Quote request successfully sent.
          </p>
        </div>
      </div>

      <div className="text-center py-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">We’ve Received Your Details</h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          Thanks for sharing your details. We’ll review your project scope and be in touch soon.
        </p>
        <div className="pt-6">
          <button
            type="button"
            onClick={onRestart}
            className="px-6 py-2.5 rounded-lg bg-[#F4C430] hover:bg-[#e0b220] text-gray-800 font-semibold shadow-sm transition-all duration-200"
          >
            Restart Form
          </button>
        </div>
      </div>
    </div>
  );
}
