import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ycb-website",
  description: "ycb-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${epilogue.variable} font-sans antialiased`}>
        <Providers>
          <Header />
            {children}
        </Providers>
      </body>
    </html>
  );
}
