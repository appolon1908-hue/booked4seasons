import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://booked4seasons.com"),
  title: { default: "Booked4Seasons | Home services for every season", template: "%s | Booked4Seasons" },
  description: "Request trusted local services for your home, property, or vehicle through Booked4Seasons.",
  openGraph: { title: "Booked4Seasons", description: "Home services for every season.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
