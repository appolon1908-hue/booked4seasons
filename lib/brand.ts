export const brand = {
  name: "Booked4Seasons",
  legalOperator: "Codestra LLC DBA Booked4Seasons",
  operatorLine: "Operated by Codestra LLC DBA Booked4Seasons",
  tagline: "Home Services for Every Season",
  domain: "booked4seasons.com",
  primaryMessage: "Whatever your property needs, get it booked.",
  colors: {
    navy900: "#0D1B2A",
    blue600: "#1565C0",
    green500: "#22C55E",
    amber400: "#FFB703",
    cloud50: "#F5F7FA",
    slate500: "#6B7280",
    white: "#FFFFFF",
  },
  logos: {
    primary: "/images/brand/logo-primary.svg",
    dark: "/images/brand/logo-dark.svg",
    mark: "/images/brand/logo-mark.svg",
    favicon: "/images/brand/favicon.svg",
    socialShare: "/images/brand/social-share.png",
  },
  ctas: {
    primary: { label: "Request Service", href: "/request-service" },
    secondary: { label: "Explore Services", href: "/services" },
  },
} as const;

export const primaryNavigation = [
  { label: "Services", href: "/services", megaMenu: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "For Professionals", href: "/become-a-pro" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Become a Pro", href: "/become-a-pro" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Refunds & Returns", href: "/refund-policy" },
    { label: "Cancellation", href: "/cancellation-policy" },
    { label: "Service Fulfillment", href: "/service-policy" },
  ],
} as const;

export const brandUi = {
  radius: {
    card: "16px",
    button: "10px",
    panel: "20px",
  },
  imageRatios: {
    serviceCard: "3 / 2",
    wideSection: "16 / 9",
    mobileHero: "4 / 5",
  },
  typography: {
    family: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
} as const;
