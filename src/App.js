import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./data";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //run code based on a given condition/
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('person', user);
      });
    }

    console.log("i have token>>>", token);
  }, []);

  return (
    <div className="App">{token ? <h1>Sudah Log in</h1> : <Login />}
    </div>
  );
}

export default App;
