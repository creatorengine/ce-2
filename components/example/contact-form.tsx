"use client";
import React, { useRef, useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "../ui/use-toast";
import emailjs from "@emailjs/browser";
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),

  message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([field, messages]) => [
            field,
            messages?.[0] || "",
          ])
        )
      );
      return;
    }

    setErrors({});

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY!
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default",
      });

      // Optionally reset the form
      form.current.reset();
      
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-lg w-full mt-8 py-4  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-black">
      <h2 className="font-bold text-xl  text-neutral-200">Let's Partner Up!</h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        Reach out at{" "}
        <a className="hover:underline" href="mailto:info@creatorengine.studio">
          info@creatorengine.studio
        </a>{" "}
        <br /> or fill out the form below.
      </p>

      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" type="text" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email ID</Label>
            <Input
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </LabelInputContainer>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Type your message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            rows={3}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
