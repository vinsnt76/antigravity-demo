import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepTwo() {
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
          <h2 className="text-xl font-bold text-gray-800 leading-tight">Plan Your Renovation Window</h2>
          <p className="font-caveat text-lg text-gray-700 leading-tight mt-0.5">
            Tell us your ideal budget and timeframe — we’ll do the rest.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Budget</label>
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
          <label className="block mb-1 font-medium">Timeline</label>
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
