import "./About.css";

function About() {
  return (
    <div className="background">
      <div className="container">
        <h1 className="about-heading">About Me</h1>
        <div>
          <p className="about-text">
            Hello! I'm John, an enthusiastic Frontend Web Developer with broad
            experience in HTML, CSS, Javascript and React. In addtion, I have a
            strong passion for creating and designing things that live on the
            web.
          </p>
          <button className="about-button">
            <a href="https://drive.google.com/file/d/1yP7HRFezMAZGOtjDX5jd-RYviXHLZ0nk/view">
              Download Resume
            </a>
          </button>
          <div>
            <img id="me" src="../images/me.jpg" alt="about-me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
