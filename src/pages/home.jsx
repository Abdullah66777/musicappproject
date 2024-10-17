import React, { useEffect, useState } from "react";

const Home = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const [artistname, setArtistName] = useState("");
  const [songname, setSongName] = useState("");
  const API_URL = "https://api.lyrics.ovh/v1/";

  const fetchLyrics = async (artist, title) => {
    setShowLyrics(false);
    const response = await fetch(`${API_URL}${artist}/${title}`);
    const result = await response.json();
    setLyrics(result.lyrics);
    console.log(result.lyrics);
    setTimeout(() => {
      setShowLyrics(true);
    }, 100);
  };

  useEffect(() => {
    console.log("Effect ran");
    fetchLyrics("ed sheeran", "perfect");
  }, []);

  const formatLyrics = (lyrics) => {
    return lyrics.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };
  return (
    <div className="App">
      <h1>Find me lyrics</h1>
      <h2>
        an open source web application to search lyrics for any song by
        providing the artist name and song title
      </h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            if (artistname && songname) {
              fetchLyrics(artistname, songname); // Call your function to fetch lyrics
            }
          }}
        >
          <input
            className="search"
            type="text"
            value={artistname}
            placeholder="provide artist name"
            onChange={(e) => setArtistName(e.target.value)}
            required
          />

          <div>
            <input
              className="search"
              type="text"
              value={songname}
              placeholder="provide song name"
              onChange={(i) => setSongName(i.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-17">
            Search Lyrics
          </button>
          <div className={`lyrics ${showLyrics ? "visible" : ""}`}>
            {formatLyrics(lyrics)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
