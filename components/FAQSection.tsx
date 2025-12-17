"use client";

import { useState } from "react";
import { GraduationCap, Building2, Heart, Plus, X, Calendar, MapPin, Users } from "lucide-react";

const faqCategories = [
  {
    id: "work-experience",
    label: "Work Experience & Activities",
    icon: Building2,
  },
  {
    id: "programme-structure",
    label: "Programme Structure",
    icon: Calendar,
  },
  {
    id: "location-accommodation",
    label: "Location & Accommodation",
    icon: MapPin,
  },
  {
    id: "support-safety",
    label: "Support & Safety",
    icon: Heart,
  },
  {
    id: "career-benefits",
    label: "Career & Academic Benefits",
    icon: GraduationCap,
  },
  {
    id: "social-cultural",
    label: "Social & Cultural",
    icon: Users,
  },
];

const allFaqs = [
  // Work Experience & Activities
  {
    question: "What does students' work experience actually involve?",
    answer: "Students take part in a blend of practical classroom workshops and off-site industry visits. Each programme is designed to show what working in a chosen field really looks like, combining applied tasks, professional insight and real environments.",
    category: "work-experience",
  },
  {
    question: "What kind of companies and organisations do students visit?",
    answer: "Visits vary by career area but include leading firms and institutions across London. Examples include global organisations such as EY and Lloyds, specialist training centres like the London Academy of Trading, well-known legal institutions, healthcare settings, engineering labs and industrial sites.",
    category: "work-experience",
  },
  {
    question: "What types of workshops do students take part in?",
    answer: "Workshops are highly interactive and career-focused. Depending on the programme, students may practise clinical skills such as suturing, run business simulations like a Dragon's Den start-up challenge, code elements of a driverless car, build engineering structures, or carry out supervised laboratory experiments.",
    category: "work-experience",
  },
  {
    question: "Is the experience mainly classroom-based or hands-on?",
    answer: "The camps are very hands-on. Classroom learning is practical rather than lecture-led, and off-site visits allow students to see how theory is applied in real professional settings.",
    category: "work-experience",
  },
  {
    question: "Will students interact with real professionals?",
    answer: "Yes. Students regularly engage with professionals during company visits, guest workshops and simulations. This might include industry specialists, healthcare professionals, legal practitioners or public-sector experts such as police officers.",
    category: "work-experience",
  },
  // Programme Structure
  {
    question: "How long can students attend for?",
    answer: "Students can choose to attend for one, two or three weeks, depending on how much exposure and depth they want. The 2-3 week programmes are highly recommended.",
    category: "programme-structure",
  },
  {
    question: "When does accommodation check-in and check-out take place?",
    answer: "Arrival is on the Sunday before the programme begins, where students will be welcomed by the team. Check-out is on the Friday after the programme finishes. Additional nights can be arranged on request, subject to availability.",
    category: "programme-structure",
  },
  {
    question: "What happens over the weekend if a student books multiple weeks?",
    answer: "Students staying for two or three weeks on the residential programme will take part in organised weekend activities. Past weekends have included trips to Cambridge, London shopping and sightseeing experiences. Final details are shared closer to the programme start date. Students who are not staying in accommodation will finish their programme on Friday.",
    category: "programme-structure",
  },
  {
    question: "Can students attend non-consecutive weeks?",
    answer: "Yes. Students are welcome to book weeks that are not back-to-back, allowing flexibility around other commitments. Our team is happy to help with planning if needed.",
    category: "programme-structure",
  },
  // Location & Accommodation
  {
    question: "Where does the programme take place?",
    answer: "The programme is based in Central London, with sessions delivered in teaching spaces, university facilities and professional workplaces across the city.",
    category: "location-accommodation",
  },
  {
    question: "Do students stay in university accommodation?",
    answer: "Residential students stay in single rooms at UCL accommodation, with meals provided and staff available around the clock. The location is in Ramsay Hall, a University College London residence. Accommodation is in single rooms with shared bathroom facilities, with male and female students accommodated on separate floors.",
    category: "location-accommodation",
  },
  // Support & Safety
  {
    question: "Who leads and supports the students during the programme?",
    answer: "Students are supported by experienced tutors and mentors, including current students from top UK universities such as Oxford, Cambridge, UCL and LSE, alongside on-site staff.",
    category: "support-safety",
  },
  {
    question: "How is student safety managed?",
    answer: "Safeguarding is a priority. All staff are DBS-checked, students are supervised at all times, and 24/7 pastoral support is in place for residential students.",
    category: "support-safety",
  },
  {
    question: "Does ImproveMe x Study Mind offer support after the programme finishes?",
    answer: "Yes. Students can access continued academic support, personal statement guidance and university admissions mentoring beyond the programme.",
    category: "support-safety",
  },
  // Career & Academic Benefits
  {
    question: "How does this help students decide on future study or careers?",
    answer: "By experiencing both the academic and practical sides of a career, students gain clarity about what suits them. This reduces uncertainty when choosing A-levels, degree courses or long-term career paths.",
    category: "career-benefits",
  },
  {
    question: "Will students receive anything they can use for applications?",
    answer: "Students receive a completion certificate and a professional recommendation, which can be referenced in UCAS applications, CVs and interviews.",
    category: "career-benefits",
  },
  // Social & Cultural
  {
    question: "Is there a social and cultural element?",
    answer: "Yes. Alongside academic sessions, students take part in organised evening activities and cultural experiences in London, helping them build independence and confidence. Activities include park sports days, theatre visits, boat tours on River Thames, bowling, visit to China town and more.",
    category: "social-cultural",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("work-experience");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = allFaqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-text-gray uppercase tracking-wide mb-2">
            FAQS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-text-dark">
            Frequently asked questions
          </h2>
          <div className="space-y-1 text-sm sm:text-base text-text-gray px-4">
            <p>Work experience programmes for ages 15-18 in 15 industries.</p>
            <p>Pick your career path, then choose a Weekend Programme or Summer Experience.</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-primary-blue-light text-white border-2 border-primary-blue"
                    : "bg-white text-text-dark border-2 border-gray-200 hover:border-primary-blue-light"
                }`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary-blue-light transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-base sm:text-lg pr-3 sm:pr-4 text-text-dark">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-text-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

