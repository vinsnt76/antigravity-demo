import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepFour() {
  const form = useFormContextSafe<FormData>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 4 — Contact Details</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            {...form.register("email")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.email?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
          <input
            {...form.register("phone")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0400 000 000"
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.phone?.message}
          </p>
        </div>
      </div>
    </div>
  );
}
