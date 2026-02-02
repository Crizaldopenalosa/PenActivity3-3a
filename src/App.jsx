import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our React Router demo! This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>
        This page explains the purpose of our application: demonstrating client-side routing
        using React Router components like <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>, and <code>Link</code>.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>
        You can reach us at <strong>contact@example.com</strong>. 
        We’d love to hear your feedback about this demo project!
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
