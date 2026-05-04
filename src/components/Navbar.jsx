import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/home2">Home2</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/service-static">Service Static</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;