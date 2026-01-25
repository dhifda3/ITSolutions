// Dynamic content data for HajjConnect platform
// All content is loaded from here for easy updates

export const heroContent = {
  heading: "Ready To Transform Your Agency?",
  subheading: "Join 50+ agencies already growing with our platform. Get started today with a free consultation and custom proposal.",
  features: [
    "No credit card required",
    "Free consultation & proposal",
    "Setup in 2-4 weeks"
  ],
  cta: {
    primary: {
      text: "Schedule Free Consultation",
      href: "#contact",
      icon: "fa-calendar-check"
    },
    secondary: {
      text: "Call Us Now",
      href: "tel:+1234567890",
      icon: "fa-phone"
    }
  }
};

export const solutionsContent = {
  title: "Comprehensive Solutions for Modern Agencies",
  subtitle: "Everything you need to manage compliance, grow your network, and streamline bookings",
  tabs: [
    {
      id: "compliance",
      label: "Compliance",
      icon: "fa-shield-halved",
      title: "Stay Compliant, Stay Confident",
      description: "Automated compliance tracking and document management to ensure your agency meets all regulatory requirements across multiple jurisdictions.",
      features: [
        "Document Management",
        "License Tracking",
        "Regulatory Updates",
        "Audit Trails"
      ],
      image: "compliance"
    },
    {
      id: "network",
      label: "Network",
      icon: "fa-globe-africa",
      title: "Connect Across Africa",
      description: "Join the largest network of Hajj & Umrah agencies across the African continent for collaboration and growth.",
      features: [
        "Agency Directory",
        "Resource Sharing",
        "Group Bookings",
        "Knowledge Base"
      ],
      image: "network"
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: "fa-ticket",
      title: "Streamlined Booking Management",
      description: "Efficient internal booking system with B2B collaboration features for seamless pilgrim management.",
      features: [
        "Package Builder",
        "Inventory Management",
        "Payment Tracking",
        "Booking Analytics"
      ],
      image: "bookings"
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "fa-chart-line",
      title: "Data-Driven Decisions",
      description: "Comprehensive dashboards and reports to understand your business performance and identify growth opportunities.",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Trend Analysis",
        "Performance Metrics"
      ],
      image: "analytics"
    }
  ]
};

export const processContent = {
  title: "Simple, Seamless Onboarding In Just 4 Steps",
  subtitle: "From first call to full launch, we guide you every step of the way",
  steps: [
    {
      number: 1,
      title: "Free Consultation",
      description: "60-min strategy session with needs assessment and custom proposal tailored to your agency.",
      icon: "fa-comments",
      features: ["60-min strategy session", "Needs assessment", "Custom proposal"]
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "We customize the platform to match your brand and configure features to your workflow.",
      icon: "fa-palette",
      features: ["Brand customization", "UX/UI design", "Technical architecture"]
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "Agile development with continuous testing to ensure a robust, reliable platform.",
      icon: "fa-code",
      features: ["Agile development", "QA testing", "Performance optimization"]
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "Comprehensive training and ongoing support to ensure your success.",
      icon: "fa-rocket",
      features: ["Team training", "Go-live support", "24/7 assistance"]
    }
  ]
};

export const testimonialsContent = {
  title: "Trusted By Leading Agencies Across Africa",
  subtitle: "See what our partners say about transforming their operations",
  testimonials: [
    {
      id: 1,
      quote: "HajjConnect transformed how we manage our pilgrim bookings. The compliance tracking alone saved us countless hours and helped us avoid regulatory issues.",
      author: "Ibrahim Musa",
      position: "Operations Director",
      agency: "Al-Baraka Travel & Tours",
      location: "Lagos, Nigeria",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      quote: "The agency network feature opened doors to partnerships we never knew existed. Our group booking capacity has tripled since joining.",
      author: "Fatima Diallo",
      position: "CEO",
      agency: "Barakah Voyages",
      location: "Dakar, Senegal",
      rating: 5,
      featured: false
    },
    {
      id: 3,
      quote: "Implementation was smooth and the support team was exceptional. We were fully operational within 3 weeks.",
      author: "Ahmed Hassan",
      position: "Managing Partner",
      agency: "Noor Travel Services",
      location: "Nairobi, Kenya",
      rating: 5,
      featured: false
    },
    {
      id: 4,
      quote: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that have improved our margins significantly.",
      author: "Amina Okonkwo",
      position: "Business Development Manager",
      agency: "Hidaya Travel Group",
      location: "Accra, Ghana",
      rating: 5,
      featured: false
    }
  ]
};

export const faqContent = {
  title: "Got Questions? We've Got Answers",
  subtitle: "Everything you need to know about getting started",
  faqs: [
    {
      question: "How long does implementation take?",
      answer: "Typical implementation takes 2-4 weeks depending on your agency's size and customization requirements. We work closely with your team to ensure minimal disruption to your operations."
    },
    {
      question: "Is my data secure with HajjConnect?",
      answer: "Absolutely. We use enterprise-grade security including SSL encryption, secure cloud hosting, and regular security audits. Your data is protected 24/7 and we're fully compliant with international data protection standards."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! HajjConnect is built with integration in mind. We support connections to major payment gateways, email services, and can work with your existing booking systems through our API."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support via email, WhatsApp, and phone. Every client gets a dedicated account manager, and we offer comprehensive training for your team during onboarding."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing based on agency size and features needed. Contact us for a custom proposal - the consultation is free and there's no obligation."
    },
    {
      question: "Can multiple team members access the platform?",
      answer: "Yes, you can add unlimited team members with role-based access controls. Assign different permissions for managers, booking agents, and administrators."
    }
  ]
};

export const contactContent = {
  title: "Start Your Transformation Today",
  subtitle: "Fill out the form and our team will reach out within 24 hours",
  countries: [
    "Nigeria", "Senegal", "Kenya", "Ghana", "South Africa", "Egypt", 
    "Morocco", "Tanzania", "Ethiopia", "Uganda", "Cameroon", "Ivory Coast",
    "Mali", "Niger", "Sudan", "Other"
  ],
  agencySizes: [
    "1-5 employees",
    "6-15 employees", 
    "16-50 employees",
    "51-100 employees",
    "100+ employees"
  ],
  services: [
    { id: "compliance", label: "Compliance Management" },
    { id: "network", label: "Agency Network" },
    { id: "bookings", label: "Booking Management" },
    { id: "analytics", label: "Analytics & Reporting" },
    { id: "custom", label: "Custom Development" }
  ]
};

export const footerContent = {
  brand: {
    name: "HajjConnect",
    tagline: "Empowering agencies across Africa with modern technology for Hajj & Umrah operations.",
    badges: [
      { icon: "fa-check-circle", text: "Saudi Approved" },
      { icon: "fa-certificate", text: "ISO Certified" },
      { icon: "fa-shield-halved", text: "Secure Platform" }
    ]
  },
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  services: [
    { label: "Compliance Management", href: "#solutions" },
    { label: "Agency Network", href: "#solutions" },
    { label: "Booking System", href: "#solutions" },
    { label: "Analytics", href: "#solutions" },
    { label: "Custom Development", href: "#contact" }
  ],
  contact: {
    email: "hello@hajjconnect.com",
    phone: "+234 800 123 4567",
    whatsapp: "+234 800 123 4567",
    address: "123 Business District, Lagos, Nigeria"
  },
  social: [
    { icon: "fa-linkedin", href: "#", label: "LinkedIn" },
    { icon: "fa-twitter", href: "#", label: "Twitter" },
    { icon: "fa-facebook", href: "#", label: "Facebook" },
    { icon: "fa-instagram", href: "#", label: "Instagram" },
    { icon: "fa-whatsapp", href: "#", label: "WhatsApp" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" }
  ],
  paymentMethods: ["Visa", "MasterCard", "PayPal"]
};

export const statsContent = [
  { value: "50+", label: "Partner Agencies" },
  { value: "15", label: "African Countries" },
  { value: "25K+", label: "Pilgrims Managed" },
  { value: "99.9%", label: "Uptime" }
];
