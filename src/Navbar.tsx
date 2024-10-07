import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-background">
      <div className="nav-list">
        <a href="/">LinkedIn</a>
        <a href="/about">GitHub</a>

        <button id="contact-btn">
          <a href="/contact">Contact</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
