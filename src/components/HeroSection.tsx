import { motion } from "framer-motion";
import { heroContent, statsContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import meccaBackground from "@/assets/mecca-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative section-padding min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${meccaBackground})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE – MAIN HERO CONTENT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F7EA] leading-tight mb-6"
            >
              {heroContent.heading.split("Transform").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="text-accent">Transform</span>
                    {part}
                  </span>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/80 max-w-xl mt-10 mb-8"
            >
              {heroContent.subheading}
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {heroContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <i className="fas fa-check-circle text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            <Button variant="ctaPrimary" size="xl" asChild>
              <a href={heroContent.cta.primary.href}>
                <i className={`fas ${heroContent.cta.primary.icon}`} />
                {heroContent.cta.primary.text}
              </a>
            </Button>
          </div>

          {/* RIGHT SIDE – STATS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl bg-white/10 backdrop-blur-l border border-white/20 p-8 lg:p-10 text-white shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-accent">
                  50+
                </div>
                <div className="text-sm text-white/80 mt-1">
                  Partner Agencies
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-accent">
                  15
                </div>
                <div className="text-sm text-white/80 mt-1">
                  African Countries
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-accent">
                  25K+
                </div>
                <div className="text-sm text-white/80 mt-1">
                  Pilgrims Managed
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-accent">
                  99.9%
                </div>
                <div className="text-sm text-white/80 mt-1">
                  Uptime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
