import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">SRD Education</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/courses" className="hover:text-gray-200">Courses</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-3">
          <Link to="/" onClick={closeMenu} className="block hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-gray-300">About</Link>
          <Link to="/courses" onClick={closeMenu} className="block hover:text-gray-300">Courses</Link>
          <Link to="/services" onClick={closeMenu} className="block hover:text-gray-300">Services</Link>
        </div>
      )}
    </header>
  );
}
