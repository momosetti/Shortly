export default function ShortenLink({ links }) {
  return (
    <>
      {links.map((link) => {
        return (
          <div className="shorten-result__elm" key={link.code}>
            <p className="original-link">{link.original_link}</p>
            <div className="link-result">
              <a href={link.full_short_link}>{link.full_short_link}</a>
              <button className="primary-btn copy-btn">copy</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
