import "./globals.scss";

export const metadata = {
  title: "Team",
  description: "Knowi club members academic year 2024-2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
