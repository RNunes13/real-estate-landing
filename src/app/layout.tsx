import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header/Header";
import "./global.scss";

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
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
