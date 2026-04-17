"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/atoms/button";

type HeroContactFields = {
  name: string;
  email: string;
  message: string;
};

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
  } = useForm<HeroContactFields>();

  async function onSubmit(data: HeroContactFields) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "company" }),
      });
      setSubmitted(true);
    } catch {
      // Silently handle, form stays visible for retry
    }
  }

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column — H2 + body */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold leading-snug text-heading md:text-4xl lg:text-5xl">
              We are here for doers, thinkers, and builders. Where technology
              meets its human on the loop.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body md:text-xl">
              Technology only creates positive impact when the people around it
              are right. We exist to make that happen, by placing the humans who
              make it work, not just run.
            </p>
          </motion.div>

          {/* Right column — Contact form */}
          <motion.div
            className="rounded-[12px] border border-surface-border bg-surface p-6 lg:p-8"
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
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
                noValidate
              >
                <div>
                  <label
                    htmlFor="about-hero-name"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Name
                  </label>
                  <input
                    id="about-hero-name"
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

                <div>
                  <label
                    htmlFor="about-hero-email"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="about-hero-email"
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

                <div>
                  <label
                    htmlFor="about-hero-message"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Message
                  </label>
                  <textarea
                    id="about-hero-message"
                    rows={4}
                    className="w-full resize-y rounded-lg border border-surface-border bg-surface-light px-3 py-2.5 text-sm text-body placeholder:text-muted focus:border-smaragd focus:outline-none"
                    {...register("message", {
                      required: "Please add a short message",
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-coral">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="coral"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
