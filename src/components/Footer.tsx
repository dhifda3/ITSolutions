import { useState } from "react";
import { motion } from "framer-motion";
import { footerContent } from "@/data/content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-background/10">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="ITSolutions Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-background/60 mb-6">
              {footerContent.brand.tagline}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {footerContent.brand.badges.map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 text-xs"
                >
                  <i className={`fas ${badge.icon} text-accent`} />
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerContent.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-background/60 mb-4">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
              />
              <Button type="submit" size="icon" className="flex-shrink-0 bg-primary hover:bg-primary/90">
                <i className="fas fa-paper-plane" />
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              {footerContent.social.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <i className={`fab ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} {footerContent.brand.name}. All rights reserved.
          </p>


          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-background/40 mr-2">We accept:</span>
            {footerContent.paymentMethods.map((method, i) => (
              <div
                key={i}
                className="px-2 py-1 rounded bg-background/10 text-xs"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
