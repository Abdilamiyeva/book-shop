/* eslint-disable react/prop-types */
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const Layout = ({ children }) => (
  <main>
    <Navbar />
    <div className="min-h-[800px]">{children}</div>
    <Footer />
  </main>
);
