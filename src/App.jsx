import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NotFound404 from "./pages/NotFound404";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceStatic from "./pages/ServiceStatic";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-static" element={<ServiceStatic />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;