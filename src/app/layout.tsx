import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avexra AI",
icons: {
    icon: "/icons/favicon.ico",
  },
  description: "Intelligent Systems That Work For You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-background-light text-text-main font-sans antialiased selection:bg-primary selection:text-white overflow-x-visible">
        {children}
      </body>
    </html>
  );
}
