export default function Shorten() {
  return (
    <section id="shorten-link">
      <div className="container">
        <div className="shorten-form">
          <input
            placeholder="Shorten a link here..."
            type="text"
            className="shorten-input"
          />
          <button className="primary-btn shorten-btn">shorten it!</button>
        </div>
        <div className="shorten-result">
          <div className="shorten-result__elm">
            <p className="original-link">www.frontendmentro.io</p>
            <div className="link-result">
              <a href="#">https://rel.fc/cf5fc</a>
              <button className="primary-btn copy-btn">copy</button>
            </div>
          </div>
          <div className="shorten-result__elm">
            <p className="original-link">www.frontendmentro.io</p>
            <div className="link-result">
              <a href="#">https://rel.fc/cf5fcdededeses</a>
              <button className="primary-btn copy-btn">copy</button>
            </div>
          </div>
          <div className="shorten-result__elm">
            <p className="original-link">www.frontedesesndmentro.io</p>
            <div className="link-result">
              <a href="#">https://rel.fc/cf5fc</a>
              <button className="primary-btn copy-btn">copy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
