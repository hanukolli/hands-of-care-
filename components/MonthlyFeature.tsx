"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { monthlyFeature, site } from "@/lib/content";

// Cute Medical Icons for each month
const MedicalIcons: Record<number, React.ReactNode> = {
  0: (
    <svg className="w-5 h-5 text-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49 0 2.87-.47 4-1.26V15c0 3.31-2.69 6-6 6h-1a6 6 0 0 1-6-6v-1a2 2 0 0 0-2-2H6.83A6.002 6.002 0 0 1 1 6.5C1 3.46 3.46 1 6.5 1S12 3.46 12 6.5V9" />
      <circle cx="19" cy="11" r="2" />
    </svg>
  ),
  1: (
    <svg className="w-5 h-5 text-coral shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  ),
  2: (
    <svg className="w-5 h-5 text-peach shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 15 6-6" />
      <path d="m15 15-6-6" />
    </svg>
  ),
  3: (
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
  displayName: string;
  daysCount: number;
  startDayOfWeek: number;
  badge?: string;
}

const months2026: MonthData[] = [
  { name: "January", displayName: "January", daysCount: 31, startDayOfWeek: 4 },
  { name: "February", displayName: "February", daysCount: 28, startDayOfWeek: 0 },
  { name: "March", displayName: "March", daysCount: 31, startDayOfWeek: 0 },
  { name: "April", displayName: "April", daysCount: 30, startDayOfWeek: 3 },
  { name: "May", displayName: "May", daysCount: 31, startDayOfWeek: 5 },
  { name: "June", displayName: "June", daysCount: 30, startDayOfWeek: 1 },
  { name: "July", displayName: "July", daysCount: 31, startDayOfWeek: 3 },
  { name: "August", displayName: "August", daysCount: 31, startDayOfWeek: 6 },
  { 
    name: "September", 
    displayName: "September: Mental Health Awareness", 
    daysCount: 30, 
    startDayOfWeek: 2, 
    badge: "Mental Health Awareness" 
  },
  { name: "October", displayName: "October", daysCount: 31, startDayOfWeek: 4 },
  { name: "November", displayName: "November", daysCount: 30, startDayOfWeek: 0 },
  { name: "December", displayName: "December", daysCount: 31, startDayOfWeek: 2 },
];

const months2027: MonthData[] = [
  { name: "January", displayName: "January", daysCount: 31, startDayOfWeek: 5 },
  { name: "February", displayName: "February", daysCount: 28, startDayOfWeek: 1 },
  { name: "March", displayName: "March", daysCount: 31, startDayOfWeek: 1 },
  { name: "April", displayName: "April", daysCount: 30, startDayOfWeek: 4 },
  { name: "May", displayName: "May", daysCount: 31, startDayOfWeek: 6 },
  { name: "June", displayName: "June", daysCount: 30, startDayOfWeek: 2 },
  { name: "July", displayName: "July", daysCount: 31, startDayOfWeek: 4 },
  { name: "August", displayName: "August", daysCount: 31, startDayOfWeek: 0 },
  { 
    name: "September", 
    displayName: "September: Mental Health Awareness", 
    daysCount: 30, 
    startDayOfWeek: 3, 
    badge: "Mental Health Awareness" 
  },
  { name: "October", displayName: "October", daysCount: 31, startDayOfWeek: 5 },
  { name: "November", displayName: "November", daysCount: 30, startDayOfWeek: 1 },
  { name: "December", displayName: "December", daysCount: 31, startDayOfWeek: 3 },
];

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const accents = ["bg-teal", "bg-coral", "bg-peach", "bg-mint"];

export default function MonthlyFeature() {
  const [year, setYear] = useState<2026 | 2027>(2026);
  const [openMonth, setOpenMonth] = useState<string | null>("September");

  const currentMonths = year === 2026 ? months2026 : months2027;

  const toggleDropdown = (monthName: string) => {
    setOpenMonth((prev) => (prev === monthName ? null : monthName));
  };

  return (
    <section id="awareness" className="border-y border-ink/10 bg-teal-light/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-8 max-w-xl">
          <span className="eyebrow text-teal">{monthlyFeature.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {monthlyFeature.title}
          </h2>
          <p className="mt-4 font-body text-ink/70">{monthlyFeature.intro}</p>
        </Reveal>

        {/* Year Switcher Header */}
        <div className="mb-8 flex items-center justify-between border-b border-ink/10 pb-4">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-4xl font-bold tracking-tight text-ink">{year}</h3>
            <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal">
              Interactive Calendar
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setYear(2026)}
              className={`rounded-lg px-4 py-2 font-body text-sm font-medium transition ${
                year === 2026
                  ? "bg-teal text-linen shadow-xs"
                  : "bg-white/80 text-ink/70 hover:bg-white"
              }`}
            >
              2026
            </button>
            <button
              onClick={() => setYear(2027)}
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

        {/* 4x3 Grid Layout */}
        <Reveal delay={80} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentMonths.map((m, i) => {
            const isOpen = openMonth === m.name;
            const isSeptember = m.name === "September";

            return (
              <div
                key={m.name}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-teal/40 bg-white shadow-md ring-1 ring-teal/20"
                    : "border-ink/10 bg-white/70 hover:bg-white hover:border-ink/20"
                }`}
              >
                {/* Month Card Header */}
                <button
                  type="button"
                  onClick={() => toggleDropdown(m.name)}
                  className="flex w-full items-center justify-between p-4 text-left transition focus:outline-none"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-xl bg-teal-light/60 p-2">
                      {MedicalIcons[i % 4]}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-ink leading-tight">
                        {m.displayName}
                      </h4>
                      <p className="font-body text-[0.7rem] text-ink/50 mt-0.5">
                        {isOpen ? "Click to collapse" : "Click to view days"}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-teal text-linen" : ""
                    }`}
                  >
                    ↓
                  </div>
                </button>

                {/* Expanded Month Calendar */}
                {isOpen && (
                  <div className="border-t border-ink/10 bg-teal-light/10 p-3">
                    {/* Days Header */}
                    <div className="mb-1 grid grid-cols-7 text-center font-mono text-[0.65rem] font-bold text-ink/50">
                      {weekDays.map((day, idx) => (
                        <span key={idx}>{day}</span>
                      ))}
                    </div>

                    {/* Day Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs text-ink">
                      {/* Empty padding cells */}
                      {Array.from({ length: m.startDayOfWeek }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="h-10 rounded-md bg-transparent" />
                      ))}

                      {/* Day cells (Clicking opens Instagram) */}
                      {Array.from({ length: m.daysCount }).map((_, idx) => {
                        const dayNum = idx + 1;
                        const accentColor = accents[idx % accents.length];

                        return (
                          <a
                            key={dayNum}
                            href={site.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex h-10 flex-col justify-between rounded-lg border p-1 transition hover:-translate-y-0.5 hover:shadow-xs ${
                              isSeptember
                                ? "border-teal/30 bg-white hover:border-teal"
                                : "border-ink/5 bg-white/80 hover:border-teal/50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[0.7rem] text-teal">{dayNum}</span>
                              <span className={`h-1 w-1 rounded-full ${accentColor}`} />
                            </div>
                            <span className="truncate text-left font-body text-[0.55rem] font-medium text-ink/60">
                              {isSeptember ? "TBA" : "TBA"}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>

        {/* Call To Action */}
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
