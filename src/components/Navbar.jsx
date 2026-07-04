import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        🌊 OceanMind AI
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>

        <Link to="/dashboard" className="hover:text-cyan-400">
          Dashboard
        </Link>

        <Link to="/ocean-data" className="hover:text-cyan-400">
          Ocean Data
        </Link>

        <Link to="/chat" className="hover:text-cyan-400">
          Chat
        </Link>

        <Link to="/about" className="hover:text-cyan-400">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;