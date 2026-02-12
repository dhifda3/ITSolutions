import { motion } from "framer-motion";
import { wakilContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import wakilBackground from "@/assets/wakil-background.jpg";

const WakilSection = () => {
  return (
    <section
      id="wakil"
      className="relative overflow-hidden section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wakilBackground})` }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-primary mb-4">
            <i className="fas fa-kaaba" />
            Wakeel Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
            {wakilContent.title}
          </h2>
          <p className="text-lg text-white/90">
            {wakilContent.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-6">
              {wakilContent.heading}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {wakilContent.description}
            </p>
            <Button variant="ctaPrimary" size="lg" asChild>
              <a href={wakilContent.cta.href}>
                <i className="fas fa-arrow-right" />
                {wakilContent.cta.text}
              </a>
            </Button>
          </motion.div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-4">
            {wakilContent.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F5F7EA] rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fas ${benefit.icon} text-xl text-primary`} />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-primary" />
              <span className="text-sm text-muted-foreground">
                Official Saudi Partnerships
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-halved text-primary" />
              <span className="text-sm text-muted-foreground">
                Fully Compliant
              </span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-primary" />
              <span className="text-sm text-muted-foreground">
                Fast Processing
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WakilSection;
