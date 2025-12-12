"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProgrammeCard from "./ProgrammeCard";

const programmes = [
  {
    id: 1,
    title: "Technology Work Experience",
    description: "Hands-on workshops on Python, AI, website development, and more.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Economics Work Experience",
    description: "Workshops and industry visits to understand financial markets, trading, private equity, and more.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Careers and Life Skills Work Experience",
    description: "Learn life skills in areas like personal branding, public speaking, and personal finance.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Psychology Work Experience",
    description: "Learn key psychological skills from industry experts and immersive workshops.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "International Relations Work Experience",
    description: "Immersive workshops to teach you international relations skills, including industry visits.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Maths Work Experience",
    description: "Explores higher-level maths through hands-on workshops and industry visits.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 7,
    title: "Media and Journalism Work Experience",
    description: "Hands-on, practical workshops to teach you media and journalism skills.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "Criminology Work Experience",
    description: "Hands-on, practical experience in the field of criminology",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 9,
    title: "Creative Writing Work Experience",
    description: "Practical workshops to refine your writing abilities, providing insights into various genres and the publishing world.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 10,
    title: "Chemical Engineering Work Experience",
    description: "Practical workshops and industry visits designed to teach you key chemical engineering concepts.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 11,
    title: "Chemistry Work Experience",
    description: "Delve into the world of chemistry and experience labs and university life.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 12,
    title: "Business and Entrepreneurship Work Experience",
    description: "Hands-on, practical workshops to teach you essential business skills.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 13,
    title: "Law Work Experience",
    description: "Hands-on, industry visits to top solicitor firms, chambers and court rooms.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 14,
    title: "Physics Work Experience",
    description: "Practical workshops with industry visits in various physics fields.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 15,
    title: "Engineering Work Experience",
    description: "Hands-on workshops and industry days including electrical fields, autonomous systems, and automotive engineering.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format",
  },
];

export default function OurCoursesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProgrammes = programmes.filter((programme) =>
    programme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    programme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProgrammes = filteredProgrammes.slice(0, visibleCount);
  const hasMore = filteredProgrammes.length > visibleCount;

  return (
    <section id="our-courses" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-text-dark uppercase tracking-wide mb-2">
            OUR COURSES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-text-dark">
            Our work experience programmes
          </h2>
          <p className="text-sm sm:text-base text-text-gray max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Work experience programmes across 10+ industries, designed to give you a competitive edge.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12); // Reset visible count when searching
              }}
              className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 pr-10 sm:pr-12 bg-white border border-gray-200 rounded-card focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-dark placeholder:text-text-gray shadow-sm text-sm sm:text-base"
            />
            <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-text-gray" />
          </div>
        </div>

        {/* Programme Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8">
          {displayedProgrammes.map((programme, index) => (
            <motion.div
              key={programme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-full"
            >
              <ProgrammeCard {...programme} />
            </motion.div>
          ))}
        </div>

        {/* Show All Programmes Button */}
        {hasMore && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(filteredProgrammes.length)}
              className="px-8 py-3 bg-primary-blue text-white rounded-button font-semibold hover:bg-primary-blue-light transition-colors shadow-md hover:shadow-lg"
            >
              Show All Programmes
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

