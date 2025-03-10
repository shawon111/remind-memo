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
  publisher: 'Shawon Ahmmed'
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
        <body className={`${tajawal.className} ${spaceGrotesk.className}`} >
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
