"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, Phone, User, Calendar } from "lucide-react";

const programmes = [
  "Technology Work Experience",
  "Economics Work Experience",
  "Careers and Life Skills Work Experience",
  "Psychology Work Experience",
  "International Relations Work Experience",
  "Maths Work Experience",
  "Media and Journalism Work Experience",
  "Criminology Work Experience",
  "Creative Writing Work Experience",
  "Chemical Engineering Work Experience",
  "Chemistry Work Experience",
  "Business and Entrepreneurship Work Experience",
  "Law Work Experience",
  "Physics Work Experience",
  "Engineering Work Experience",
];

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    studentName: "",
    parentContact: "",
    email: "",
    phone: "",
    age: "",
    preferredProgramme: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        studentName: "",
        parentContact: "",
        email: "",
        phone: "",
        age: "",
        preferredProgramme: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="booking" ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wide mb-2">
            BOOK YOUR PLACE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-text-dark">
            Reserve Your Spot for 2026
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto px-4">
            Get in touch with us to book your work experience programme. Our team will respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-card shadow-card p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-semibold text-text-dark mb-2">
                Student Name <span className="text-primary-blue">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors"
                  placeholder="Enter student's full name"
                />
              </div>
            </div>

            {/* Parent/Guardian Contact */}
            <div>
              <label htmlFor="parentContact" className="block text-sm font-semibold text-text-dark mb-2">
                Parent/Guardian Name <span className="text-primary-blue">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
                <input
                  type="text"
                  id="parentContact"
                  name="parentContact"
                  required
                  value={formData.parentContact}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors"
                  placeholder="Enter parent/guardian name"
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                  Email Address <span className="text-primary-blue">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-text-dark mb-2">
                  Phone Number <span className="text-primary-blue">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors"
                    placeholder="+44 (0) 123 456 7890"
                  />
                </div>
              </div>
            </div>

            {/* Age and Programme Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-text-dark mb-2">
                  Age/Grade <span className="text-primary-blue">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="text"
                    id="age"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors"
                    placeholder="e.g., 16 or Year 12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferredProgramme" className="block text-sm font-semibold text-text-dark mb-2">
                  Preferred Programme <span className="text-primary-blue">*</span>
                </label>
                <select
                  id="preferredProgramme"
                  name="preferredProgramme"
                  required
                  value={formData.preferredProgramme}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark bg-white transition-colors"
                >
                  <option value="">Select a programme</option>
                  {programmes.map((programme) => (
                    <option key={programme} value={programme}>
                      {programme}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
                Questions or Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue text-text-dark placeholder:text-text-gray transition-colors resize-none"
                placeholder="Tell us about any specific questions, requirements, or additional information..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-primary-blue text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg hover:bg-primary-blue-light transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg text-center"
              >
                <p className="font-semibold">Thank you for your inquiry!</p>
                <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-lg text-center"
              >
                <p className="font-semibold">Something went wrong.</p>
                <p className="text-sm mt-1">Please try again or contact us directly.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

