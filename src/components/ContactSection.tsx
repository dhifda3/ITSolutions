import { useState } from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";


interface FormData {
  agencyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  agencySize: string;
  services: string[];
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    agencyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    agencySize: "",
    services: [],
    message: ""
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (
      !formData.agencyName ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.phone 
    ) {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to complete all required fields and accept the terms.",
        variant: "destructive",
      });
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      await emailjs.send(
        "service_9tsfqda",
        "template_z32ir0v",
        {
          agency_name: formData.agencyName,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          agency_size: formData.agencySize,
          services: formData.services.join(", "),
          message: formData.message,
        },
        "3JoEdq7oWNDikmV7E"
      );
  
      setIsSubmitted(true);
      toast({
        title: "Inquiry submitted!",
        description: "Our team will contact you shortly.",
      });
  
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Could not send email. Please try again later.",
        variant: "destructive",
      });
    }
  
    setIsSubmitting(false);
  };
  

  const resetForm = () => {
    setFormData({
      agencyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      agencySize: "",
      services: [],
      message: ""
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check-circle text-4xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We've received your inquiry and our team will contact you within 24 hours.
              In the meantime, feel free to explore our solutions.
            </p>
            <Button onClick={resetForm} variant="ctaPrimary" size="lg">
              <i className="fas fa-paper-plane" />
              Send Another Inquiry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-primary mb-4">
              <i className="fas fa-envelope" />
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {contactContent.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {contactContent.subtitle}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-headset text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">30-min strategy session included</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-halved text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">No Obligation</h4>
                  <p className="text-sm text-muted-foreground">No credit card required</p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <h4 className="font-semibold mb-4">Prefer to talk directly?</h4>
              <div className="space-y-3">
                <a href="tel:+2348001234567" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <i className="fas fa-phone" />
                  <span>+966 565809269</span>
                </a>
                <a href="https://wa.me/966565809269" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <i className="fab fa-whatsapp" />
                  <span>WhatsApp Chat</span>
                </a>
                <a href="mailto:tempemail.a50@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <i className="fas fa-envelope" />
                  <span>itsolutions@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Agency Name *
                  </label>
                  <Input
                    placeholder="Your agency name"
                    value={formData.agencyName}
                    onChange={(e) => handleInputChange("agencyName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Person *
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="email@agency.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country *
                  </label>
                  <Select value={formData.country} onValueChange={(v) => handleInputChange("country", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {contactContent.countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Agency Size
                  </label>
                  <Select value={formData.agencySize} onValueChange={(v) => handleInputChange("agencySize", v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {contactContent.agencySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Interested Services
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {contactContent.services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => toggleService(service.id)}
                      />
                      <span className="text-sm">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your agency and what you're looking for..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              <Button 
                type="submit" 
                variant="ctaPrimary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
