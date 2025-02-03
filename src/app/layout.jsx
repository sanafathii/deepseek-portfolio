import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Your Portfolio",
  description: "Your professional portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
