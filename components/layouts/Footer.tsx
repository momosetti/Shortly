import Container from "./Container";
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-warper">
          <div className="logo">
            <img src="/logo-white.svg" alt="Logo" />
          </div>
          <div className="navs">
            <div className="nav">
              <h5 className="nav_title">Features</h5>
              <ul>
                <li>
                  <a href="#">Link Shortening</a>
                </li>

                <li>
                  <a href="#">Branded Links</a>
                </li>

                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </div>

            <div className="nav">
              <h5 className="nav_title">Resources</h5>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>

                <li>
                  <a href="#">Developers</a>
                </li>

                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div className="nav">
              <h5 className="nav_title">Company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Our Team</a>
                </li>

                <li>
                  <a href="#">Careers</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="socials">
              <img
                src="images/icon-facebook.svg"
                className="social "
                alt="Facebook Icon "
              />
              <img
                src="images/icon-twitter.svg "
                className="social "
                alt="Twitter Icon "
              />
              <img
                src="images/icon-pinterest.svg"
                className="social "
                alt="Pintreast Icon "
              />
              <img
                src="images/icon-instagram.svg "
                className="social "
                alt="Instagram Icon "
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
