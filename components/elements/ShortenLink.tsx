export default function ShortenLink({ links }) {
  const copyToClipboard = async (e) => {
    /*
    Use event delegation and data-* jsx attribute to get url data
    for every shorten url with one event listener
    I used borwser Clipboard API to copy data to user clipboard
    */
    if (!navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(e.target.dataset.url);
      e.target.textContent = "Copied!";
      setTimeout(() => {
        e.target.textContent = "Copy";
      }, 800);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <>
      {links.map((link) => {
        return (
          <div className="shorten-result__elm" key={link.code}>
            <p className="original-link">{link.original_link}</p>
            <div className="link-result">
              <a href={link.full_short_link}>{link.full_short_link}</a>
              <button
                data-url={link.full_short_link}
                onClick={copyToClipboard}
                className="primary-btn copy-btn"
              >
                copy
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
