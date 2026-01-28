import { useState } from "react";
import { motion } from "framer-motion";
import { solutionsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(solutionsContent.tabs[0].id);
  const activeTabData = solutionsContent.tabs.find(tab => tab.id === activeTab)!;

  return (
    <section id="solutions" className="section-padding bg-accent-ivory">
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
            <i className="fas fa-cubes" />
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {solutionsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {solutionsContent.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {solutionsContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <i className={`fas ${tab.icon}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content - Text Only */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <i className={`fas ${activeTabData.icon} text-2xl text-primary`} />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {activeTabData.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {activeTabData.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {activeTabData.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
              >
                <i className="fas fa-check-circle text-primary" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
