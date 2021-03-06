import { useRef, useState } from "react";
import ShortenLink from "./ShortenLink";
import { RE_WEBURL, API_ENDPOINT } from "../utils";
export default function Shorten() {
  const [shortenUrls, setShortenUrl] = useState([]);
  const urlValue = useRef(null);
  const formRef = useRef(null);

  const handleRequest = async (e) => {
    e.preventDefault();
    if (RE_WEBURL.test(urlValue.current.value)) {
      urlValue.current.className = "shorten-input";
      formRef.current.className = "isLoading";
      const data = await fetch(
        API_ENDPOINT + `shorten?url=${urlValue.current.value}`,
        { method: "GET" }
      );
      const response = await data.json();
      formRef.current.className = "";
      response.ok
        ? setShortenUrl(shortenUrls.concat(response.result))
        : console.error(response.error);
    } else {
      urlValue.current.className += " shorten-input__error";
    }
  };
  return (
    <section id="shorten-link">
      <div className="container">
        <form ref={formRef} onSubmit={handleRequest}>
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
