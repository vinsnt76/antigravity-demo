"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import FormNavigation from "./FormNavigation";
import { FormProvider } from "./FormContext";

// Full schema across all steps
export const FormSchema = z.object({
  renovationType: z.string().min(1, "Required"),
  suburb: z.string().min(1, "Required"),
  budget: z.string().min(1, "Required"),
  timeline: z.string().min(1, "Required"),
  photos: z.any().optional(),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Invalid phone"),
});

export type FormData = z.infer<typeof FormSchema>;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      renovationType: "",
      suburb: "",
      budget: "",
      timeline: "",
      photos: null,
      email: "",
      phone: "",
    },
  });

  const next = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const onSubmit = (data: FormData) => {
    console.log("Submitting lead:", data);
    fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <FormProvider form={form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}

        <FormNavigation
          currentStep={currentStep}
          onNext={next}
          onBack={back}
        />
      </form>
    </FormProvider>
  );
}
