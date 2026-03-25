import "./globals.css";

export const metadata = {
  title: "Trenquix - Premium Web Development Studio",
  description:
    "Trenquix builds custom websites and web apps that grow your business.",
  icons: {
    icon: [{ url: "/Trenquix_bgr.svg?v=6", type: "image/svg+xml" }],
    shortcut: ["/Trenquix_bgr.svg?v=6"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Trenquix_bgr.svg?v=6" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/Trenquix_bgr.svg?v=6"
          type="image/svg+xml"
        />
        {/* Required by project spec: Google Fonts loaded via head link tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
