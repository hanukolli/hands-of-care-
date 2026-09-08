"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { monthlyFeature, site } from "@/lib/content";

// Cute Medical Icons
const MedicalIcons: Record<number, React.ReactNode> = {
  0: ( // Heartbeat / Stethoscope
    <svg className="w-5 h-5 text-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49 0 2.87-.47 4-1.26V15c0 3.31-2.69 6-6 6h-1a6 6 0 0 1-6-6v-1a2 2 0 0 0-2-2H6.83A6.002 6.002 0 0 1 1 6.5C1 3.46 3.46 1 6.5 1S12 3.46 12 6.5V9" />
      <circle cx="19" cy="11" r="2" />
    </svg>
  ),
  1: ( // Pill / Medicine
    <svg className="w-5 h-5 text-coral shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  ),
  2: ( // Bandage / Care
    <svg className="w-5 h-5 text-peach shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 15 6-6" />
      <path d="m15 15-6-6" />
    </svg>
  ),
  3: ( // Syringe / Health
    <svg className="w-5 h-5 text-mint shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4" />
      <path d="m17 7 3 3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  ),
};

interface MonthData {
  name: string;
  daysCount: number;
  startDayOfWeek: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  topic?: string;
}

const months2026: MonthData[] = [
  { name: "January", daysCount: 31, startDayOfWeek: 4 },
  { name: "February", daysCount: 28, startDayOfWeek: 0 },
  { name: "March", daysCount: 31, startDayOfWeek: 0 },
  { name: "April", daysCount: 30, startDayOfWeek: 3 },
  { name: "May", daysCount: 31, startDayOfWeek: 5 },
  { name: "June", daysCount: 30, startDayOfWeek: 1 },
  { name: "July", daysCount: 31, startDayOfWeek: 3 },
  { name: "August", daysCount: 31, startDayOfWeek: 6 },
  { name: "September", daysCount: 30, startDayOfWeek: 2, topic: "Mental Health Awareness" },
  { name: "October", daysCount: 31, startDayOfWeek: 4 },
  { name: "November", daysCount: 30, startDayOfWeek: 0 },
  { name: "December", daysCount: 31, startDayOfWeek: 2 },
];

const months2027: MonthData[] = [
  { name: "January", daysCount: 31, startDayOfWeek: 5 },
  { name: "February", daysCount: 28, startDayOfWeek: 1 },
  { name: "March", daysCount: 31, startDayOfWeek: 1 },
  { name: "April", daysCount: 30, startDayOfWeek: 4 },
  { name: "May", daysCount: 31, startDayOfWeek: 6 },
  { name: "June", daysCount: 30, startDayOfWeek: 2 },
  { name: "July", daysCount: 31, startDayOfWeek: 4 },
  { name: "August", daysCount: 31, startDayOfWeek: 0 },
  { name: "September", daysCount: 30, startDayOfWeek: 3, topic: "Mental Health Awareness" },
  { name: "October", daysCount: 31, startDayOfWeek: 5 },
  { name: "November", daysCount: 30, startDayOfWeek: 1 },
  { name: "December", daysCount: 31, startDayOfWeek: 3 },
];

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const accents = ["bg-teal", "bg-coral", "bg-peach", "bg-mint"];

export default function MonthlyFeature() {
  const [year, setYear] = useState<2026 | 2027>(2026);
  const [selectedMonth, setSelectedMonth] = useState<MonthData | null>(null);

  const currentMonths = year === 2026 ? months2026 : months2027;

  const handleMonthClick = (m: MonthData) => {
    setSelectedMonth((prev) => (prev?.name === m.name ? null : m));
  };

  return (
    <section id="awareness" className="border-y border-ink/10 bg-teal-light/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 max-w-xl">
          <span className="eyebrow text-teal">{monthlyFeature.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {monthlyFeature.title}
          </h2>
          <p className="mt-4 font-body text-ink/70">{monthlyFeature.intro}</p>
        </Reveal>

        {/* Year Navigation Bar */}
        <div className="mb-10 flex items-center justify-between border-b border-ink/10 pb-4">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-4xl font-bold tracking-tight text-ink">{year}</h3>
            <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal">
              Calendar
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setYear(2026);
                setSelectedMonth(null);
              }}
              className={`rounded-lg px-4 py-2 font-body text-sm font-medium transition ${
                year === 2026
                  ? "bg-teal text-linen shadow-xs"
                  : "bg-white/80 text-ink/70 hover:bg-white"
              }`}
            >
              2026
            </button>
            <button
              onClick={() => {
                setYear(2027);
                setSelectedMonth(null);
              }}
              className={`rounded-lg px-4 py-2 font-body text-sm font-medium transition ${
                year === 2027
                  ? "bg-teal text-linen shadow-xs"
                  : "bg-white/80 text-ink/70 hover:bg-white"
              }`}
            >
              2027 Next →
            </button>
          </div>
        </div>

        {/* 12-Month Calendar Grid */}
        <Reveal delay={80} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentMonths.map((m, i) => {
            const isSelected = selectedMonth?.name === m.name;
            const isSep = m.name === "September";

            return (
              <div
                key={m.name}
                onClick={() => handleMonthClick(m)}
                className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isSelected
                    ? "border-teal bg-white ring-2 ring-teal ring-offset-2"
                    : "border-ink/10 bg-white/70 hover:bg-white"
                }`}
              >
                {/* Month Header with Cute Medical Icon */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {MedicalIcons[i % 4]}
                    <h4 className="font-display text-lg font-bold text-ink">{m.name}</h4>
                  </div>
                  {isSep && (
                    <span className="rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-teal">
                      Mental Health
                    </span>
                  )}
                </div>

                {/* Day of Week Headers */}
                <div className="mb-1 grid grid-cols-7 text-center font-mono text-[0.65rem] font-semibold text-ink/40">
                  {weekDays.map((d, idx) => (
                    <span key={idx}>{d}</span>
                  ))}
                </div>

                {/* Month Date Numbers */}
                <div className="grid grid-cols-7 text-center font-mono text-xs text-ink/80">
                  {/* Empty cells for padding before day 1 */}
                  {Array.from({ length: m.startDayOfWeek }).map((_, idx) => (
                    <span key={`empty-${idx}`} />
                  ))}

                  {/* Days */}
                  {Array.from({ length: m.daysCount }).map((_, idx) => {
                    const dayNum = idx + 1;
                    return (
                      <span
                        key={dayNum}
                        className={`py-1 ${
                          isSep ? "font-semibold text-teal hover:underline" : "hover:text-teal"
                        }`}
                      >
                        {dayNum}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-3 border-t border-ink/5 pt-2 text-right">
                  <span className="font-mono text-[0.65rem] text-teal underline group-hover:opacity-80">
                    {isSelected ? "Close Schedule" : "Click to Expand →"}
                  </span>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* Interactive Detailed Schedule View for Selected Month */}
        {selectedMonth && (
          <div className="mt-10 rounded-2xl border border-teal/20 bg-white p-6 shadow-lg transition-all">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-ink">
                    {selectedMonth.name} {year} Schedule
                  </span>
                  {selectedMonth.name === "September" && (
                    <span className="rounded-full bg-teal text-linen px-3 py-1 text-xs font-semibold">
                      💚 Mental Health Awareness Month
                    </span>
                  )}
                </div>
                <p className="mt-1 font-body text-xs text-ink/60">
                  Daily topics and awareness activities for {selectedMonth.name}
                </p>
              </div>

              <button
                onClick={() => setSelectedMonth(null)}
                className="rounded-full bg-ink/5 px-4 py-1.5 font-body text-xs font-medium text-ink/70 hover:bg-ink/10"
              >
                ✕ Close Schedule
              </button>
            </div>

            {/* Daily Detailed Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
              {Array.from({ length: selectedMonth.daysCount }).map((_, i) => {
                const dayNum = i + 1;
                const accentClass = accents[i % accents.length];
                return (
                  <div
                    key={dayNum}
                    className="flex flex-col justify-between rounded-xl border border-ink/10 bg-teal-light/20 p-3 transition hover:border-teal/50 hover:bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-teal">
                        {selectedMonth.name.slice(0, 3)} {dayNum}
                      </span>
                      <span className={`h-2 w-2 rounded-full ${accentClass}`} />
                    </div>
                    <p className="mt-3 font-body text-xs font-medium text-ink/70">
                      {selectedMonth.name === "September"
                        ? "Mental Health Topic TBA"
                        : selectedMonth.topic ?? "Topic TBA"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Reveal
          delay={160}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center"
        >
          <p className="font-body text-sm text-ink/70">{monthlyFeature.ctaText}</p>
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
