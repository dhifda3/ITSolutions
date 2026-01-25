import { useState } from "react";
import { motion } from "framer-motion";
import { solutionsContent } from "@/data/content";
import { cn } from "@/lib/utils";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(solutionsContent.tabs[0].id);
  const activeTabData = solutionsContent.tabs.find(tab => tab.id === activeTab)!;

  return (
    <section id="solutions" className="section-padding bg-background">
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <i className={`fas ${activeTabData.icon} text-xl text-primary`} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {activeTabData.title}
              </h3>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8">
              {activeTabData.description}
            </p>

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
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden relative">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 bg-white rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className={`fas ${activeTabData.icon} text-primary`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{activeTabData.label}</div>
                      <div className="text-xs text-muted-foreground">Active</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 bg-white rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <i className="fas fa-chart-line text-accent text-sm" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">+47%</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <i className={`fas ${activeTabData.icon} text-4xl text-primary`} />
                  </div>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
