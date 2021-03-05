export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-warper">
          <img
            src="/images/illustration-working.svg"
            alt=""
            className="hero-ullustration"
          />
          <div className="hero-heading">
            <h1>
              More Than just <br /> shorter links
            </h1>
            <p>
              Build your brand's recognition and detailed insights on how your
              links are performing
            </p>
            <button className="primary-btn get-started">get started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
