import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookiePreferences } from "@/components/CookiePreferences";
import { legal } from "@/lib/legal";
import { SiteTelemetry } from "@/components/SiteTelemetry";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://booked4seasons.com"),
  title: { default: "Booked4Seasons | Home services for every season", template: "%s | Booked4Seasons" },
  description: "Request trusted local services for your home, property, or vehicle through Booked4Seasons.",
  openGraph: { title: "Booked4Seasons", description: "Home services for every season.", type: "website", images: [{url:"/images/brand/social-share.png",width:1200,height:630,alt:"Booked4Seasons — Home Services for Every Season"}] },
  icons: { icon: "/images/brand/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://booked4seasons.com/#organization",name:"Booked4Seasons",legalName:legal.operator,url:"https://booked4seasons.com",logo:"https://booked4seasons.com/images/brand/logo-primary.svg",description:legal.platformDescription},{"@type":"WebSite","@id":"https://booked4seasons.com/#website",url:"https://booked4seasons.com",name:"Booked4Seasons",publisher:{"@id":"https://booked4seasons.com/#organization"}}]};
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><SiteTelemetry/><CookiePreferences/><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
