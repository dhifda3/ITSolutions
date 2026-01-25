import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqContent } from "@/data/content";
import { cn } from "@/lib/utils";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqContent.faqs.length / 2);
  const leftColumn = faqContent.faqs.slice(0, midPoint);
  const rightColumn = faqContent.faqs.slice(midPoint);

  const FAQItem = ({ faq, index }: { faq: typeof faqContent.faqs[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <span className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          openIndex === index 
            ? "bg-primary text-primary-foreground rotate-45" 
            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        )}>
          <i className="fas fa-plus text-sm" />
        </span>
      </button>
      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">
            <i className="fas fa-question-circle" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {faqContent.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {faqContent.subtitle}
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl mx-auto">
          {/* Left Column */}
          <div>
            {leftColumn.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} />
            ))}
          </div>
          
          {/* Right Column */}
          <div>
            {rightColumn.map((faq, idx) => (
              <FAQItem key={idx + midPoint} faq={faq} index={idx + midPoint} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <i className="fas fa-envelope" />
            Contact our team
            <i className="fas fa-arrow-right text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
