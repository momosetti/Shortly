export default function Stat() {
  return (
    <section id="statistic">
      <div className="container">
        <h2 className="stat-title">advanced statstic</h2>
        <p className="stat-heading">
          Track how your links are performing across the web with our advanced
          statistic dahsboard.
        </p>
        <div className="stat-cards">
          <div className="stat-card">
            <div className="stat-card__icon">
              <img src="/images/icon-brand-recognition.svg" alt="" />
            </div>
            <h3 className="stat-card__title">brand recognition</h3>
            <p className="stat-card__description">
              Boost your brand recognition with each click. Genric links don't
              mean a thing. Branded help instil confidence in your content.
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">
              <img src="/images/icon-detailed-records.svg" alt="" />
            </div>
            <h3 className="stat-card__title">detailed records</h3>
            <p className="stat-card__description">
              Gaint insight into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisons.
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">
              <img src="/images/icon-fully-customizable.svg" alt="" />
            </div>
            <h3 className="stat-card__title">fully customizable</h3>
            <p className="stat-card__description">
              Improve brand awareness and content dicoverbility throught
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
