// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Profit Pioneer',
  description: 'Your App Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
