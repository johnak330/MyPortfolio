import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-background">
      <div className="nav-list">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
