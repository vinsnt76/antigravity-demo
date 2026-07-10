import { useFormContextSafe } from "./FormContext";

export default function StepThree() {
  const form = useFormContextSafe();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 3 — Photos</h2>

      <input
        type="file"
        multiple
        onChange={(e) => form.setValue("photos", e.target.files)}
        className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-gray-600 mt-2 text-sm">
        Upload bathroom/laundry photos (optional).
      </p>
    </div>
  );
}
