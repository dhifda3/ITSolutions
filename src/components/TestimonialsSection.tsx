import { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const { testimonials } = testimonialsContent;
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
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

        {/* Testimonial Cards Grid - 3 at once */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {getCurrentTestimonials().map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-lg rounded-2xl p-6 border border-primary-foreground/20 flex flex-col items-center text-center md:items-start md:text-left h-full"
            >


              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={cn(
                      "fas fa-star text-sm",
                      i < testimonial.rating
                        ? "text-accent"
                        : "text-primary-foreground/30"
                    )}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center md:flex-row md:items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-primary-foreground/70">
                    {testimonial.position}, {testimonial.agency}
                  </div>
                  <div className="text-xs text-primary-foreground/50 flex items-center gap-1 mt-0.5">
                    <i className="fas fa-map-marker-alt" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonials"
            >
              <i className="fas fa-chevron-left" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentPage
                      ? "w-8 bg-accent"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonials"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        )}

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
