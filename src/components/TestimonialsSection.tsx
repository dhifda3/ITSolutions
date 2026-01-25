import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { testimonials } = testimonialsContent;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-4">
            <i className="fas fa-star" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {testimonialsContent.title}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {testimonialsContent.subtitle}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-primary-foreground/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-primary-foreground/20"
            >
              {testimonials[activeIndex].featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                  <i className="fas fa-crown" />
                  Featured Review
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={cn(
                      "fas fa-star",
                      i < testimonials[activeIndex].rating
                        ? "text-accent"
                        : "text-primary-foreground/30"
                    )}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xl font-bold">
                  {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-primary-foreground/70">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].agency}
                  </div>
                  <div className="text-sm text-primary-foreground/50 flex items-center gap-1 mt-1">
                    <i className="fas fa-map-marker-alt" />
                    {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-primary-foreground/10"
        >
          <p className="text-center text-primary-foreground/50 text-sm mb-8">
            Trusted by leading agencies across Africa
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {["Nigeria", "Senegal", "Kenya", "Ghana", "South Africa"].map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors"
              >
                <i className="fas fa-map-marker-alt" />
                <span className="font-medium">{country}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
