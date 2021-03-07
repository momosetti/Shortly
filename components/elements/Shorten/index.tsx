import { FormEvent } from "react";
import { useRef, useState, useEffect } from "react";
import ShortenLink from "./ShortenLink";
import { RE_WEBURL, API_ENDPOINT } from "../../utils";

export default function Shorten() {
  const [shortenUrls, setShortenUrl] = useState([]);
  const [isValidURL, setIsValidURL] = useState(true);
  const urlValue = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /*
  Check whether we've a saved object in the local storage or no.
  if yes, it will be our intial shortenUrls state before the app fully loaded
  */
  useEffect(() => {
    localStorage.getItem("shortenUrlData") &&
      setShortenUrl(JSON.parse(localStorage.getItem("shortenUrlData") || "[]"));
  }, []);

  /*
  Run the side effect where the state changed and set the ShortenUrls
  state to our shortenUrlData local storage object
  */
  useEffect(() => {
    localStorage.setItem("shortenUrlData", JSON.stringify(shortenUrls));
  }, [shortenUrls]);

  const handleRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check whether the url given is a valid url
    if (urlValue.current !== null && formRef.current !== null) {
      if (RE_WEBURL.test(urlValue.current.value)) {
        // Set the url shorten-form into loading state
        urlValue.current.className = "shorten-input";
        formRef.current.className = "isLoading";

        // Fetch data asynchronously
        const data = await fetch(
          API_ENDPOINT + `shorten?url=${urlValue.current.value}`,
          { method: "GET" }
        );
        const response = await data.json();
        formRef.current.className = "";
        // Handle response
        response.ok
          ? setShortenUrl(shortenUrls.concat(response.result))
          : console.error(response.error);
      } else {
        // The case the url inserted is invalid show error message
        // toggle the state
        setIsValidURL(!isValidURL);
      }
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
              className={`shorten-input ${
                !isValidURL && "shorten-input__error"
              }`}
              name="url-input"
            />
            <label htmlFor="url-input">Please add a link</label>
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
