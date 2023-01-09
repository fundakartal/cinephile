import { Inter } from '@next/font/google';
import 'styles/globals.css';
import { Footer, Header } from 'components';

const interFontFamily = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => (
  <html lang="en" className={interFontFamily.className}>
    <body className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
