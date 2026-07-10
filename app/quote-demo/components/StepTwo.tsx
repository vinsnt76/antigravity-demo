import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepTwo() {
  const form = useFormContextSafe<FormData>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 2 — Budget & Timeline</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Budget</label>
          <select
            {...form.register("budget")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select budget</option>
            <option value="under20">Under $20k</option>
            <option value="20to50">$20k–$50k</option>
            <option value="50to80">$50k–$80k</option>
            <option value="80plus">$80k+</option>
          </select>
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.budget?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Timeline</label>
          <select
            {...form.register("timeline")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1to3">1–3 months</option>
            <option value="3to6">3–6 months</option>
            <option value="6plus">6+ months</option>
          </select>
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.timeline?.message}
          </p>
        </div>
      </div>
    </div>
  );
}
