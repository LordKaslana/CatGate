import { ReactNode } from 'react';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider'; // создай этот файл ниже

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}