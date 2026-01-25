import { useState } from "react";
import { motion } from "framer-motion";
import { footerContent } from "@/data/content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <i className="fas fa-kaaba text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">{footerContent.brand.name}</span>
            </div>
            <p className="text-sm text-background/60 mb-6">
              {footerContent.brand.tagline}
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
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
          <div>
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
          <div>
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
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-background/60 mb-4">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
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
            <div className="flex gap-3 mt-6">
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

        {/* Contact Info Bar */}
        <div className="py-8 border-b border-background/10">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href={`mailto:${footerContent.contact.email}`} className="flex items-center gap-2 text-background/60 hover:text-background transition-colors">
              <i className="fas fa-envelope" />
              {footerContent.contact.email}
            </a>
            <a href={`tel:${footerContent.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-background/60 hover:text-background transition-colors">
              <i className="fas fa-phone" />
              {footerContent.contact.phone}
            </a>
            <div className="flex items-center gap-2 text-background/60">
              <i className="fas fa-map-marker-alt" />
              {footerContent.contact.address}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} {footerContent.brand.name}. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {footerContent.legal.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-background/40 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

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
