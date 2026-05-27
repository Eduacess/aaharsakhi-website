import type { Metadata } from 'next';

import './globals.css';

import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'AaharSakhi',

  description:
    'Mindful nourishment, emotional wellness, and supportive healing journeys through AaharSakhi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingWhatsApp />

        {children}
      </body>
    </html>
  );
}