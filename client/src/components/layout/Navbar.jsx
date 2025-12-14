import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-indigo-600">
          Sahyog 
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-indigo-600">
            Feed
          </Link>
          <Link to="/roadmaps" className="hover:text-indigo-600">
            Roadmaps
          </Link>
          <Link to="/ask" className="hover:text-indigo-600">
            Ask Doubt
          </Link>
          <Link to="/profile" className="hover:text-indigo-600">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
