import "./Navbar.css";

function Navbar() {
  const gitHub = "https://github.com/johnak330";

  const linkedIn = "https://www.linkedin.com/in/oluwatosin-akinyemi-20306b289/";

  return (
    <div className="nav-background">
      <div className="nav-list">
        <a href={gitHub}>LinkedIn</a>
        <a href={linkedIn}>GitHub</a>

        <button id="contact-btn">
          <a href="mailto:johnakinyemi330@gmail.com">Contact</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
