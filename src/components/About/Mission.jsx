import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Compass, Eye, CheckCircle2, Quote } from 'lucide-react';

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      disable: 'mobile'
    });
  }, []);

  const missionPoints = [
    "Creating unparalleled guest experiences with bespoke care",
    "Offering meticulously curated, premium luxury accommodations",
    "Setting new benchmarks in hospitality and authentic local living"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-xs sm:text-sm font-semibold text-[#B58E3E] tracking-widest uppercase mb-2 block">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Mission & Vision
          </h2>
          <div className="flex items-center justify-center gap-3 mx-auto w-48">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C4A454] to-transparent flex-1" />
            <div className="w-2.5 h-2.5 bg-[#C4A454] rotate-45" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#C4A454] to-transparent flex-1" />
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Mission Card */}
          <div
            className="rounded-2xl sm:rounded-3xl border border-[#C4A454]/30 bg-gradient-to-b from-[#FCFAF6] to-white p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-[#C4A454]/60"
            data-aos="fade-right"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#B58E3E] text-white flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B58E3E] block">
                    What Drives Us
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
                To elevate the standard of luxury accommodations by offering meticulously curated villas
                that combine opulent comfort with authentic local experiences. We strive to create
                unforgettable memories for our guests through impeccable service, attention to detail,
                and a deep commitment to exceeding expectations.
              </p>

              <div className="space-y-3.5 sm:space-y-4 pt-4 border-t border-gray-100">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B58E3E] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="rounded-2xl sm:rounded-3xl border border-[#C4A454]/30 bg-gradient-to-b from-[#FCFAF6] to-white p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-[#C4A454]/60"
            data-aos="fade-left"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#B58E3E] text-white flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B58E3E] block">
                    Where We're Headed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
                To be the premier provider of luxury villa experiences in Chennai and Pondicherry,
                recognized internationally for our distinctive properties, exceptional service,
                and dedication to creating meaningful connections between travelers and destinations.
              </p>

              <div className="bg-white border-l-3 border-[#C4A454] rounded-r-2xl p-5 sm:p-6 border border-gray-100">
                <Quote className="w-6 h-6 text-[#C4A454]/40 mb-2" />
                <p className="italic text-gray-700 text-sm sm:text-base leading-relaxed">
                  "We envision a world where luxury travel is not just about lavish amenities,
                  but about transformative experiences that enrich lives and create lasting memories."
                </p>
                <div className="text-right text-xs sm:text-sm font-semibold text-[#A3884D] mt-3">
                  — Gunaseelan Neelakandan, <span className="font-normal text-gray-500">Founder & Managing Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
