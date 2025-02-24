import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Aseps Medical</h1>
    <div>
      <Link className="px-3" to="/">Home</Link>
      <Link className="px-3" to="/brands">Brands</Link>
      <Link className="px-3" to="/gallery">Gallery</Link>
      <Link className="px-3" to="/about">About</Link>
      <Link className="px-3" to="/contact">Contact</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-10">
    <p>&copy; 2025 Aseps Medical. All rights reserved.</p>
    <p>Follow us on Social Media</p>
  </footer>
);

const Home = () => <div className="p-6 text-center"><h2 className="text-2xl">Welcome to Aseps Medical</h2></div>;
const Brands = () => <div className="p-6 text-center"><h2 className="text-2xl">Our Brands</h2></div>;
const Gallery = () => <div className="p-6 text-center"><h2 className="text-2xl">Gallery</h2></div>;
const About = () => <div className="p-6 text-center"><h2 className="text-2xl">About Us</h2></div>;
const Contact = () => (
  <div className="p-6 text-center">
    <h2 className="text-2xl">Contact Us</h2>
    <p>Email: info@asepsmedical.com</p>
    <p>Phone: +123 456 7890</p>
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
