import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [lyrics, setLyrics] = useState("");

  const API_URL = "https://api.lyrics.ovh/v1/";

  const fetchLyrics = async (artist, title) => {
    const response = await fetch(
      `${API_URL}${encodeURIComponent(artist)}/${encodeURIComponent(title)}`
    );
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    console.log("Effect ran");
    fetchLyrics("Coldplay", "Adventure of a Lifetime");
  }, []);
};

export default App;
