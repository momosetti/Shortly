import { LinksProps } from "../../interfaces";
import CopyBtn from "./CopyBtn";

export default function ShortenLink({ links }: LinksProps) {
  const copyToClipboard = async (e: React.ChangeEvent<HTMLButtonElement>) => {
    /*
    Use event delegation and data-* jsx attribute to get url data
    for every shorten url with one event listener
    I used borwser Clipboard API to copy data to user clipboard
    */
    if (!navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(
        e.target.dataset.url || "Failed to copy!"
      );
      e.target.textContent = "Copied!";
      e.target.className += " copied";
      setTimeout(() => {
        // after 800ms the copy button will get "Copy" as text content and orginal class name
        e.target.textContent = "Copy";
        e.target.className = "primary-btn copy-btn";
      }, 800);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <>
      {links.map((link) => {
        return (
          <div
            data-testid="result"
            className="shorten-result__elm"
            key={link.code}
          >
            <p className="original-link">{link.original_link}</p>
            <div className="link-result">
              <a href={link.full_short_link}>{link.full_short_link}</a>
              <CopyBtn
                copyFun={copyToClipboard}
                shortenLink={link.full_short_link}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
