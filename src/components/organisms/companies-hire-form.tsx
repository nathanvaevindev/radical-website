"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import type { HireFormData } from "@/types";
import Button from "@/components/atoms/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompaniesHireForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HireFormData>();

  async function onSubmit(data: HireFormData) {
    try {
      await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // Silently handle — form stays visible for retry
    }
  }

  return (
    <section id="hire" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[600px] px-6 lg:px-8">
        <motion.h2
          className="text-center font-heading text-4xl font-bold text-heading md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          Start your search here
        </motion.h2>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <div className="rounded-[12px] border border-smaragd/20 bg-smaragd/5 p-8 text-center">
              <p className="font-heading text-xl font-bold text-heading">
                Thank you
              </p>
              <p className="mt-2 text-body">
                We will contact you within 24 hours.
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
                  htmlFor="hire-name"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Name
                </label>
                <input
                  id="hire-name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-coral">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="hire-email"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Email
                </label>
                <input
                  id="hire-email"
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

              {/* Company name */}
              <div>
                <label
                  htmlFor="hire-company"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Company name
                </label>
                <input
                  id="hire-company"
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

              {/* Request */}
              <div>
                <label
                  htmlFor="hire-message"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Request
                </label>
                <textarea
                  id="hire-message"
                  rows={4}
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
                {isSubmitting ? "Sending…" : "we respond within 24 hours"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
