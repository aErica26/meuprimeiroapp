// layout/RootLayout.js
import { Inter } from "next/font/google";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu site",
  description: "Meu primeiro app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
