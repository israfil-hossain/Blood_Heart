import { Providers } from './providers';
import './globals.css';
import 'aos/dist/aos.css';
import Navbar from '@/sharedComponents/Navbar/Navbar';
import Footer from '@/sharedComponents/Footer/Footer';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';

export const metadata = {
  title: 'Blood Donate - Save Lives',
  description: 'A platform to connect blood donors with those in need',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Providers>
          <ScrollProgress />
          <div className="absolute top-0 w-full py-2 text-white z-50">
            <Navbar />
          </div>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
