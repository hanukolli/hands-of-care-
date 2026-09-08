import React from 'react';

export default function MonthlyFeature() {
  return (
    <section
      id="awareness"
      className="border-y border-ink/10 bg-teal-light/40 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Monthly Feature
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover this month's highlighted topic, awareness campaign, and community focus.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Awareness & Education</h3>
            <p className="mt-2 text-gray-600">
              Learn more about our monthly initiatives and how you can get involved to make an impact.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Community Spotlight</h3>
            <p className="mt-2 text-gray-600">
              Highlighting stories and achievements from members of our community this month.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
            <p className="mt-2 text-gray-600">
              Check out scheduled workshops, webinars, and meetups happening throughout the month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
