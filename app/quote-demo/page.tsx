import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";

export default function QuoteDemoPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/bains-screenshot.webp"
        alt="Background"
        fill
        className="object-cover brightness-[0.85]"
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-lg">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}
