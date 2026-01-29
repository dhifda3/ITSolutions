import { motion } from "framer-motion";
import { packagesContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding bg-[#F8F5EE] relative">

      {/* Content */}
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
            <i className="fas fa-box-open" />
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {packagesContent.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {packagesContent.subtitle}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesContent.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-card rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col",
                pkg.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border shadow-sm hover:shadow-lg border-dashed"
              )}
            >
              {/* Badge */}
              <div className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit",
                pkg.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary"
              )}>
                {pkg.tagline === "Perfect for Small/New Agencies" && "STARTER"}
                {pkg.tagline === "For Established Agencies" && "GROWTH"}
                {pkg.tagline === "For Market Leaders" && "PREMIUM"}
                {pkg.tagline === "Tailored to Your Needs" && "CUSTOM"}
              </div>

              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                pkg.highlighted ? "bg-primary/10" : "bg-primary/10"
              )}>
                <i className={`fas ${pkg.icon} text-xl text-primary`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {pkg.name.replace(" Package", "")}
              </h3>
              <h4 className="text-xl font-bold text-foreground mb-2">Package</h4>

              {/* Tagline */}
              <p className="text-sm font-medium text-primary mb-3">
                {pkg.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <i className="fas fa-check text-primary mt-0.5 text-xs" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.highlighted ? "default" : "outline"}
                className="w-full mt-auto"
                asChild
              >
                <a href={pkg.cta.href}>
                  {pkg.cta.text}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
