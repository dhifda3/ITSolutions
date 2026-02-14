import { motion } from "framer-motion";
import { packagesContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PackageSelectionModal from "./PackageSelectionModal";

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

const PackagesSection = ({ onSelectPackage }: PackagesSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState("");

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackageName(packageName);
    onSelectPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <section id="packages" className="section-padding bg-[#F8F5EE] relative">
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
                "group relative bg-card rounded-2xl p-6 border border-border", // Default neutral border
                "shadow-sm transition-all duration-300",
                "hover:shadow-xl hover:shadow-primary/10 hover:border-primary hover:-translate-y-1",
                "h-full flex flex-col",
                "items-center text-center lg:items-start lg:text-left"
              )}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {pkg.tagline === "Perfect for Small/New Agencies" && "STARTER"}
                {pkg.tagline === "For Established Agencies" && "GROWTH"}
                {pkg.tagline === "For Market Leaders" && "PREMIUM"}
                {pkg.tagline === "Tailored to Your Needs" && "CUSTOM"}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                <i className={`fas ${pkg.icon} text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {pkg.name.replace(" Package", "")}
              </h3>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Package
              </h4>

              {/* Tagline */}
              <p className="text-sm font-medium text-muted-foreground group-hover:text-primary mb-3 transition-colors duration-300">
                {pkg.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow flex flex-col items-center lg:items-start">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <i className="fas fa-check text-muted-foreground group-hover:text-primary mt-0.5 text-xs transition-colors duration-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className="w-full mt-auto bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground border-none group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSelectPackage(pkg.name);
                  }}
                >
                  {pkg.cta.text}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <PackageSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackageName}
      />
    </section>
  );
};

export default PackagesSection;
