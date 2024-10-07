import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const gitHub = <FaGithub />;
const linkedIn = <CiLinkedin />;

const gitHubLink = "https://github.com/johnak330";

const linkedInLink =
  "https://www.linkedin.com/in/oluwatosin-akinyemi-20306b289/";

function Contact() {
  return (
    <div className="contact-background">
      <div className="container">
        <div className="aboutbox">
          <div>
            <h1 className="contact-heading">GET IN TOUCH</h1>
            <ul>
              <li>
                <CiMail /> johnakinyemi330@gmail.com
              </li>
              <li>
                <CiPhone /> +44 7340 866542
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                {gitHub}
                <a className="link" href={gitHubLink}>
                  {" "}
                  GitHub
                </a>
              </li>
              <li>
                {linkedIn}
                <a className="link" href={linkedInLink}>
                  {" "}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
