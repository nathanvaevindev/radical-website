"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

type ContactFields = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>();

  async function onSubmit(data: ContactFields) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "company" }),
      });
      setSubmitted(true);
    } catch {
      // Silently handle — form stays visible for retry
    }
  }

  return (
    <section className="flex min-h-[75dvh] items-center py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[540px] px-6 lg:px-8">
        <motion.h1
          className="font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.h1>

        <motion.p
          className="mt-3 text-lg text-body"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We&apos;ll think along with you.
        </motion.p>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <div className="rounded-[12px] border border-smaragd/20 bg-smaragd/5 p-8 text-center">
              <p className="font-heading text-xl font-bold text-heading">
                Thank you
              </p>
              <p className="mt-2 text-body">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-coral">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Company name */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Company name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-coral">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-coral">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Request */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Your request
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full resize-y rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                  {...register("message", {
                    required: "Please describe your request",
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-coral">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Sending…"
                  : "We'll get back to you within 24 hours"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
