import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Home Finder",
  description: "Find your Dream Home, Start Your Story.",
};

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: ["900", "700", "500", "300"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
