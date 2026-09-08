"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { monthlyFeature, site } from "@/lib/content";

const accents = ["bg-teal", "bg-coral", "bg-peach", "bg-mint"];

export default function MonthlyFeature() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // Generate 30 days for September
  const septemberDays = Array.from({ length: 30 }, (_, i) => ({
    dayNumber: i + 1,
    topic: "TBA",
  }));

  const handleMonthClick = (monthName: string) => {
    // Toggle calendar open/close if September is clicked
    if (monthName.toLowerCase().includes("september") || monthName.toLowerCase().includes("sep")) {
      setSelectedMonth((prev) => (prev === monthName ? null : monthName));
    }
  };

  return (
    <section
      id="awareness"
      className="border-y border-ink/10 bg-teal-light/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-12 max-w-xl">
          <span className="eyebrow text-teal">{monthlyFeature.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {monthlyFeature.title}
          </h2>
          <p className="mt-4 font-body text-ink/70">{monthlyFeature.intro}</p>
        </Reveal>

        {/* Main Months Grid */}
        <Reveal
          delay={80}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {monthlyFeature.months.map((m, i) => {
            const filled = Boolean(m.topic);
            const accent = accents[i % accents.length];
            const isSeptember =
              m.month.toLowerCase().includes("september") ||
              m.month.toLowerCase().includes("sep");
            const isSelected = selectedMonth === m.month;

            return (
              <button
                key={m.month}
                type="button"
                onClick={() => handleMonthClick(m.month)}
                className={`group text-left rounded-xl border px-4 py-4 transition hover:-translate-y-0.5 focus-ring ${
                  filled
                    ? `${accent} border-transparent shadow-sm`
                    : "border-ink/10 bg-white/50"
                } ${isSelected ? "ring-2 ring-teal ring-offset-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`font-mono text-[0.65rem] uppercase tracking-wide ${
                      filled ? "text-linen/75" : "text-ink/50"
                    }`}
                  >
                    {m.month}
                  </p>
                  {isSeptember && (
                    <span className="font-mono text-[0.6rem] text-teal underline group-hover:opacity-80">
                      {isSelected ? "Close" : "View Days"}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1.5 font-body text-sm font-semibold leading-snug ${
                    filled ? "text-linen" : "text-ink/40"
                  }`}
                >
                  {m.topic ?? "Topic TBA"}
                </p>
              </button>
            );
          })}
        </Reveal>

        {/* September Interactive Daily View */}
        {selectedMonth && (
          <div className="mt-8 rounded-2xl border border-ink/10 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all">
            <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {selectedMonth} Schedule
                </h3>
                <p className="font-body text-xs text-ink/60">
                  Daily topics and awareness updates
                </p>
              </div>
              <button
                onClick={() => setSelectedMonth(null)}
                className="rounded-full bg-ink/5 px-3 py-1 font-body text-xs text-ink/70 hover:bg-ink/10"
              >
                ✕ Close
              </button>
            </div>

            {/* Daily Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
              {septemberDays.map((day) => (
                <div
                  key={day.dayNumber}
                  className="flex flex-col justify-between rounded-lg border border-ink/10 bg-white p-2.5 shadow-2xs transition hover:border-teal/40"
                >
                  <span className="font-mono text-[0.65rem] font-bold text-teal">
                    Day {day.dayNumber}
                  </span>
                  <span className="mt-2 font-body text-xs font-medium text-ink/40">
                    {day.topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Reveal
          delay={160}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center"
        >
          <p className="font-body text-sm text-ink/70">
            {monthlyFeature.ctaText}
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-teal px-5 py-2 font-body text-sm font-semibold text-linen transition hover:bg-teal-dark"
          >
            @{site.instagramHandle} on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
