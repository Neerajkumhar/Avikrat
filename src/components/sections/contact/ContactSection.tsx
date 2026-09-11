"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { site } from "@/lib/site";

const INTERESTS = [
  "Benchmark collaboration",
  "Pilot opportunity",
  "Strategic support",
  "Research inquiry",
  "Other",
];

const FIELD =
  "w-full rounded-sm border border-line bg-base px-4 py-3 font-mono text-sm text-charcoal placeholder:text-faint focus:border-charcoal focus:outline-none transition-colors duration-200";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-form-title" className="container-content py-16 md:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-6 lg:grid-cols-[1fr_1.4fr]"
      >
        {/* Contact details panel */}
        <motion.aside
          variants={fadeUp}
          className="instrument-panel flex flex-col justify-between gap-10 border border-line bg-surface bg-grid-pattern p-8"
        >
          <div>
            <p className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-charcoal" />
              DIRECT CHANNELS
            </p>
            <dl className="mt-8 space-y-8">
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-mono text-charcoal underline-offset-4 hover:underline transition-colors"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-base font-mono text-charcoal underline-offset-4 hover:underline transition-colors"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                  Focus
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-soft font-normal">
                  Constant-memory long-context LLM inference · compact persistent hidden state
                  architecture.
                </dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-widest text-faint">
            RESPONSE WINDOW · 48 HRS
          </div>
        </motion.aside>

        {/* Contact form panel */}
        <motion.form
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
              `[AVIKRAT] ${data.get("interest") ?? "Inquiry"} — ${data.get("name") ?? ""}`
            )}&body=${encodeURIComponent(
              [
                `Name: ${data.get("name") ?? ""}`,
                `Org: ${data.get("org") ?? ""}`,
                `Email: ${data.get("email") ?? ""}`,
                "",
                (data.get("message") ?? "").toString(),
              ].join("\n")
            )}`;
          }}
          className="instrument-panel border border-line bg-surface p-8"
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p id="contact-form-title" className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
              TRANSMIT INQUIRY FORM
            </p>
            <span aria-hidden="true" className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
              R-INFERENCE
            </span>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-soft"
              >
                Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={FIELD}
              />
            </div>
            <div>
              <label
                htmlFor="contact-org"
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-soft"
              >
                Organization
              </label>
              <input
                id="contact-org"
                name="org"
                type="text"
                placeholder="Company / lab"
                className={FIELD}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-email"
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-soft"
              >
                Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.org"
                className={FIELD}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-interest"
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-soft"
              >
                Interest
              </label>
              <select id="contact-interest" name="interest" className={FIELD}>
                {INTERESTS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-message"
                className="mb-2 block font-mono text-[0.7rem] uppercase tracking-widest text-soft"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about the workload you want to run."
                className={`${FIELD} resize-y`}
              />
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2.5 rounded-sm border border-charcoal bg-charcoal px-6 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-base transition-all duration-200 hover:bg-black active:translate-y-px focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Send Inquiry
            </button>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
              Opens your mail client · no data stored
            </p>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}