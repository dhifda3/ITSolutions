import { motion } from "framer-motion";
import { heroContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import meccaBackground from "@/assets/mecca-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-44 py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${meccaBackground})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* WIDE CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT – TEXT (leans left) */}
          <div className="lg:pr-16 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4"
            >
              <span className="block">
                Ready To{" "}
                <span className="text-accent">Transform</span>
              </span>
              <span className="block">Your Agency?</span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl text-white max-w-2xl mb-6 leading-relaxed mx-auto lg:mx-0"
            >
              {heroContent.subheading}
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {heroContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-base text-white"
                >
                  <span className="text-accent">✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="xl">
              <a href={heroContent.cta.primary.href}>
                {heroContent.cta.primary.text}
              </a>
            </Button>
          </div>

          {/* RIGHT – STATS (leans right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto lg:ml-auto max-w-md w-full rounded-2xl bg-white/10 border border-white/20 p-8 text-white backdrop-blur"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/80">Partner Agencies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">15</div>
                <div className="text-sm text-white/80">African Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">25K+</div>
                <div className="text-sm text-white/80">Pilgrims Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
