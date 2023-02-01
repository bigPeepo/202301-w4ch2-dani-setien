import { useState } from "react";
import Display from "./Display/Display";
import gifStream from "./types";

function App() {
  const UrlApiEndPoint = "https://api.giphy.com/v1/gifs/random";
  const UrlApiKey = "?api_key=ruzHj3DmWM9ufO6sZv4EGnSIkNMqYsy8";
  const UrlTagString = "&tag=";
  const UrlSearchedTerm = "random";

  const [searchUrl] = useState(
    `${UrlApiEndPoint}${UrlApiKey}${UrlTagString}${UrlSearchedTerm}`
  );

  const getGif = async (url: string) => {
    const gifStream = await fetch(`${url}`);

    const gif = (await gifStream.json()) as gifStream;

    const gifUrl = gif.data.url;

    return gifUrl;
  };

  getGif(searchUrl);

  return (
    <>
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <Display url={searchUrl} />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
      <form className="search-form">
        <div className="row">
          <label htmlFor="search" className="col-1 col-form-label">
            Search:{" "}
          </label>
          <div className="col-4">
            <input type="text" id="search" className="search form-control" />
          </div>
          <button type="submit" className="btn btn-info btn-sm col-1">
            Go
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
