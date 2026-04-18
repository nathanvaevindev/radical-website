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

export default function AboutHero() {
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
      // Silently handle, form stays visible for retry
    }
  }

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column — H1 + body */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl font-bold leading-tight text-heading md:text-6xl lg:text-7xl">
              We are here for doers, thinkers, and builders. Where technology
              meets its human on the loop.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body md:text-xl">
              Technology only creates positive impact when the people around it
              are right. We exist to make that happen, by placing the humans who
              make it work, not just run.
            </p>
          </motion.div>

          {/* Right column — Contact form (copy of For Companies hire form) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.15 }}
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
                className="flex flex-col gap-5 rounded-[12px] border border-smaragd p-6"
                noValidate
              >
                <h2 className="font-heading text-4xl font-bold text-heading md:text-5xl">
                  Start your search here
                </h2>

                {/* Name */}
                <div>
                  <label
                    htmlFor="about-hire-name"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Name
                  </label>
                  <input
                    id="about-hire-name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-smaragd focus:outline-none"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-coral">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="about-hire-email"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="about-hire-email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-smaragd focus:outline-none"
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
                    htmlFor="about-hire-company"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Company name
                  </label>
                  <input
                    id="about-hire-company"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-smaragd focus:outline-none"
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
                    htmlFor="about-hire-message"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Request
                  </label>
                  <textarea
                    id="about-hire-message"
                    rows={4}
                    className="w-full resize-y rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-smaragd focus:outline-none"
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

                <div className="self-start">
                  <Button type="submit" variant="coral" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "we respond within 24 hours"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
