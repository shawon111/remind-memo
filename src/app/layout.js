import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Tajawal, Space_Grotesk } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";

// meta data
export const metadata = {
  title: "Memory Mate - Your Reminder App for Birthdays, Anniversaries & More!",
  description: "Your ultimate reminder app for birthdays, anniversaries, and special events. Stay organized and never miss a moment that matters!",
  keywords: ['Memory Mate', 'Reminder app', 'Birthday reminders', "Anniversary reminders", "Event reminders", "Never forget important dates", "Personal reminder app", "Timely notifications"],
  creator: 'Shawon Ahmmed',
  publisher: 'Shawon Ahmmed',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  openGraph: {
    title: "Memory Mate - Your Reminder App for Birthdays, Anniversaries & More!",
    description: "Your ultimate reminder app for birthdays, anniversaries, and special events. Stay organized and never miss a moment that matters!",
    url: 'https://mate.fabbythemes.com',
    siteName: 'Memory Mate',
    images: [
      {
        url: 'https://mate.fabbythemes.com/memory-mate-og-img.png',
        width: 1200,
        height: 630,
        alt: 'Memory Mate - Your Reminder App for Birthdays, Anniversaries & More!',
      },
    ],
    locale: 'en_US',
    type: 'website',
    twitter:{
      card: 'summary_large_image',
      title: "Memory Mate - Your Reminder App for Birthdays, Anniversaries & More!",
      description: "Your ultimate reminder app for birthdays, anniversaries, and special events. Stay organized and never miss a moment that matters!",
      images: ['https://mate.fabbythemes.com/memory-mate-og-img.png']
    }
  },
};

// fonts
const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-tajawal'
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "Memory Mate",
                "description": "Your ultimate reminder app for birthdays, anniversaries, and special events. Stay organized and never miss a moment that matters!",
                "url": "https://mate.fabbythemes.com",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "author": {
                  "@type": "Person",
                  "name": "Shawon Ahmmed"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Memory Mate"
                }
              })
            }}
          />
        </head>
        <body className={`${tajawal.className} ${spaceGrotesk.className}`} >
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
