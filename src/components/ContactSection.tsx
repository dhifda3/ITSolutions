import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
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
  selectedPackage: string;
}

interface FormErrors {
  agencyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  country?: string;
  agencySize?: string;
  terms?: string;
}

interface ContactSectionProps {
  selectedPackage?: string;
}

const ContactSection = ({ selectedPackage = "" }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    agencyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    agencySize: "",
    services: [],
    message: "",
    selectedPackage: selectedPackage
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, selectedPackage }));
    }
  }, [selectedPackage]);

  const validateField = (field: keyof FormData, value: any): string | undefined => {
    switch (field) {
      case "agencyName":
        if (!value) return "Agency name is required";
        if (value.length < 2) return "Agency name is too short";
        return undefined;
      case "contactPerson":
        if (!value) return "Contact person is required";
        if (value.length < 3) return "Please enter your full name";
        return undefined;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return undefined;
      case "phone":
        const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
        if (!value) return "Phone number is required";
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        return undefined;
      case "country":
        if (!value) return "Please select your country";
        return undefined;
      case "agencySize":
        if (!value) return "Please select your agency size";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field as user types
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        errors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Registration incomplete",
        description: "Please check the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          agency_name: formData.agencyName,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          agency_size: formData.agencySize,
          services: formData.services.join(", "),
          message: formData.message,
          selected_package: formData.selectedPackage || "Direct Inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      message: "",
      selectedPackage: ""
    });
    setFormErrors({});
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
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
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
            <div className="space-y-4 mb-8 w-full max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-card rounded-xl border border-border text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-card rounded-xl border border-border text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-headset text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">30-min strategy session included</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-card rounded-xl border border-border text-center sm:text-left">
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
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground w-full max-w-md mx-auto lg:mx-0">
              <h4 className="font-semibold mb-4 text-center lg:text-left">Prefer to talk directly?</h4>
              <div className="space-y-3 flex flex-col items-center lg:items-start">
                <a href="tel:+2348001234567" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <i className="fas fa-phone" />
                  <span>+966 565809269</span>
                </a>
                <a href="https://wa.me/966565809269" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <i className="fab fa-whatsapp" />
                  <span>WhatsApp Chat</span>
                </a>
                <a className="flex items-center gap-3">
                  <i className="fas fa-envelope" />
                  <span className="text-center sm:text-left">itsolutionglobal59@gmail.com</span>
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
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg" noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Agency Name *
                  </label>
                  <Input
                    placeholder="Your agency name"
                    value={formData.agencyName}
                    onChange={(e) => handleInputChange("agencyName", e.target.value)}
                    className={formErrors.agencyName ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {formErrors.agencyName && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.agencyName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Person *
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                    className={formErrors.contactPerson ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {formErrors.contactPerson && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.contactPerson}</p>}
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
                    className={formErrors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {formErrors.email && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.email}</p>}
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
                    className={formErrors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {formErrors.phone && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country *
                  </label>
                  <Select value={formData.country} onValueChange={(v) => handleInputChange("country", v)}>
                    <SelectTrigger className={cn("bg-background", formErrors.country ? "border-destructive focus:ring-destructive" : "")}>
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
                  {formErrors.country && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.country}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Agency Size *
                  </label>
                  <Select value={formData.agencySize} onValueChange={(v) => handleInputChange("agencySize", v)}>
                    <SelectTrigger className={cn("bg-background", formErrors.agencySize ? "border-destructive focus:ring-destructive" : "")}>
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
                  {formErrors.agencySize && <p className="text-destructive text-xs mt-1 font-medium">{formErrors.agencySize}</p>}
                </div>
              </div>

              {/* Selected Package Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Selected Package
                </label>
                <Input
                  value={formData.selectedPackage}
                  placeholder="Direct Inquiry (No package selected)"
                  readOnly
                  className="bg-muted text-muted-foreground cursor-not-allowed opacity-80"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Interested Services
                </label>
                <div className="grid grid-cols-2 gap-3 p-4 bg-muted/20 rounded-xl border border-border/50">
                  {contactContent.services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center gap-3 cursor-pointer group hover:bg-white/50 p-1.5 rounded-lg transition-colors"
                    >
                      <Checkbox
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => toggleService(service.id)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your agency and what you're looking for..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="resize-none focus-visible:ring-primary"
                />
              </div>

              <Button
                type="submit"
                variant="ctaPrimary"
                size="lg"
                className="w-full shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2" />
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
