import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepThree() {
  const form = useFormContextSafe<FormData>();

  return (
    <div className="space-y-6 text-gray-800 font-sans">
      <div className="bg-[#F4C430] px-4 py-3 rounded-lg flex items-center gap-3 mb-4">
        <img
          src="/bains-logo.webp"
          alt="Bains Renovations"
          className="h-10 w-auto"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">Show Us Your Space</h2>
          <p className="font-caveat text-lg text-gray-700 leading-tight mt-0.5">
            Photos help us prepare a more accurate quote.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Photos</label>
          <input
            type="file"
            multiple
            onChange={(e) => form.setValue("photos", e.target.files)}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-gray-500 mt-2 text-sm">
            Upload bathroom/laundry photos (optional).
          </p>
        </div>
      </div>
    </div>
  );
}
