import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    const mobileNav = document.querySelector("#m_nav");
    const nav = document.querySelector("#nav");
    mobileNav.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <nav className="nav hidden" id="nav">
          <ul>
            <li className="nav_link">Features</li>
            <li className="nav_link">Pricing</li>
            <li className="nav_link">Resources</li>

            <div className="members">
              <span className="login_link">Login</span>
              <button className="signup_btn">Sign Up</button>
            </div>
          </ul>
        </nav>
        <div className="m_menu" id="m_nav">
          <img src="/mobile-navigation.svg" alt="Mobile Nav" />
        </div>
      </div>
    </header>
  );
}
