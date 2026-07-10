import { useFormContextSafe } from "./FormContext";
import { FormData } from "./MultiStepForm";

export default function StepOne() {
  const form = useFormContextSafe<FormData>();

  return (
    <div className="space-y-6 text-gray-800 font-sans">
      <div>
        <div className="bg-[#F4C430] px-4 py-3 rounded-lg flex items-center gap-3 mb-2">
          <img
            src="/bains-logo.webp"
            alt="Bains Renovations"
            className="h-8 w-auto"
          />
          <h2 className="text-xl font-semibold text-gray-800">Tell us about your renovation</h2>
        </div>
        <p className="font-caveat text-xl text-gray-600 pl-1">
          Follow the steps for your complimentary quote.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Renovation Type</label>
          <select
            {...form.register("renovationType")}
            multiple
            className="w-full border rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="bathroom">Bathroom</option>
            <option value="laundry">Laundry</option>
            <option value="kitchen">Kitchen</option>
            <option value="ensuite">Ensuite</option>
            <option value="toilet">Toilet</option>
            <option value="full-home">Full Home</option>
          </select>

          <p className="text-gray-500 text-sm mt-1">
            Hold CTRL on your keyboard to select multiple.
          </p>

          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.renovationType?.message}
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <select
            {...form.register("suburb")}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select location</option>
            <option value="north">North of River</option>
            <option value="south">South of River</option>
            <option value="eastern">Eastern Suburbs</option>
            <option value="peel">Peel Region</option>
            <option value="joondalup">Joondalup</option>
            <option value="regional">Regional</option>
          </select>
          <p className="text-red-600 text-sm mt-1">
            {form.formState.errors.suburb?.message}
          </p>
        </div>
      </div>
    </div>
  );
}
