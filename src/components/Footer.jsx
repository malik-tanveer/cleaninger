import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10 text-center">
      <p>© 2026 My Website</p>
      <Link to="/privacy-policy" className="underline">
        Privacy Policy
      </Link>
    </footer>
  );
}

export default Footer;