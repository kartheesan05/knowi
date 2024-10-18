import './resources.css';
export const metadata = {
  title: "Know-I",
  description: "Know-I Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
