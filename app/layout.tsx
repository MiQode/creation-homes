export const dynamic = 'force-dynamic';
export const revalidate = 0;

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
// import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import Navbar from './components/navbar/Navbar';
// import Navbar from './components/navbar/Navbar';
import Logo from './../public/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import '../styles/font-awesome.min.css';
import '../styles/themify-icons.css';
import '../styles/sass/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Creation Homes',
  description: 'A home away from home',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const currentUser = await getCurrentUser();
  let currentUser = null;
  try {
    currentUser = await getCurrentUser();
  } catch (error) {
    console.error('Error fetching current user:', error);
  }

  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        {/* <Navbar /> */}
        <Navbar currentUser={currentUser} />
        {/* <Navbar topbarBlock={'wpo-header-style-2'} Logo={Logo} /> */}

        {/* </ClientOnly> */}
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
