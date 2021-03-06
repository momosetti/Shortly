import { useRef, useState } from "react";
import ShortenLink from "./ShortenLink";

export default function Shorten() {
  const [shortenUrls, setShortenUrl] = useState([]);
  const urlValue = useRef(null);
  const API_ENDPOINT = "https://api.shrtco.de/v2/";
  const handleRequest = async (e) => {
    e.preventDefault();
    const data = await fetch(
      API_ENDPOINT + `shorten?url=${urlValue.current.value}`,
      { method: "GET" }
    );
    const response = await data.json();
    setShortenUrl(shortenUrls.concat(response.result));
  };
  return (
    <section id="shorten-link">
      <div className="container">
        <form onSubmit={handleRequest}>
          <div className="shorten-form">
            <input
              ref={urlValue}
              placeholder="Shorten a link here..."
              type="text"
              className="shorten-input"
            />
            <button className="primary-btn shorten-btn">shorten it!</button>
          </div>
        </form>
        <div className="shorten-result">
          <ShortenLink links={shortenUrls} />
        </div>
      </div>
    </section>
  );
}
