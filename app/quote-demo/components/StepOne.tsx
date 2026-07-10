import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepOne() {
  const form = useFormContextSafe<FormData>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 1 — Project Details</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Renovation Type</label>
          <input
            {...form.register("renovationType")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Bathroom, Laundry, Kitchen..."
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.renovationType?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Suburb</label>
          <input
            {...form.register("suburb")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Joondalup"
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.suburb?.message}
          </p>
        </div>
      </div>
    </div>
  );
}
