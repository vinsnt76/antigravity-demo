import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepFour() {
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
          <h2 className="text-xl font-bold text-gray-800 leading-tight">Let’s Finalise Your Quote</h2>
          <p className="font-caveat text-lg text-gray-700 leading-tight mt-0.5">
            Share your name and suburb — we’ll take it from here.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...form.register("name")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.name?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Suburb</label>
          <input
            {...form.register("suburb")}
            className="w-full border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Subiaco"
          />
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.suburb?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
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
          <label className="block mb-1 font-medium">Phone</label>
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
