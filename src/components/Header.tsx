import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                isScrolled ? "bg-primary" : "bg-primary"
              )}>
                <i className="fas fa-kaaba text-primary-foreground text-lg" />
              </div>
              <span className={cn(
                "text-xl font-bold transition-colors",
                isScrolled ? "text-foreground" : "text-foreground"
              )}>
                HajjConnect
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-foreground" : "text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <i className="fas fa-phone mr-2" />
                +234 800 123 4567
              </Button>
              <Button variant="default" size="sm" asChild>
                <a href="#contact">
                  Get Started
                  <i className="fas fa-arrow-right ml-2" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+2348001234567"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                  >
                    <i className="fas fa-phone" />
                    +234 800 123 4567
                  </a>
                  <Button variant="ctaPrimary" size="lg" className="w-full" asChild>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                      <i className="fas fa-arrow-right ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
