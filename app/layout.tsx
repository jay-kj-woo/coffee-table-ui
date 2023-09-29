import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const campton = localFont({
  src: [
    {
      path: '../public/assets/fonts/Campton/Campton-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-campton',
});

const larsseit = localFont({
  src: [
    {
      path: '../public/assets/fonts/Larsseit/Larsseit.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Larsseit/Larsseit-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-larsseit',
});

const quincy = localFont({
  src: [
    {
      path: '../public/assets/fonts/Quincy/quincycf-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-quincy',
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${campton.variable} ${larsseit.variable} ${quincy.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
