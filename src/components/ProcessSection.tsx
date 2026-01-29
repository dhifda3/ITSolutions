import { motion } from "framer-motion";
import { processContent } from "@/data/content";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-gold mb-4">
            <i className="fas fa-route" />
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {processContent.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {processContent.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processContent.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <i className={`fas ${step.icon} text-xl text-accent`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <i className="fas fa-check text-primary text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < processContent.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <i className="fas fa-arrow-down text-primary/40 text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
