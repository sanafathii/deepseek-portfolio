import "./globals.css";

export const metadata = {
  title: "deepseek - Portfolio",
  description: "Welcome to my online portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 scroll-smooth">{children}</body>
    </html>
  );
}
