import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import { getTokenFromResponse } from "./data";
import SpotifyWebApi from "spotify-web-api-js";
import Home from './pages/Home'
import { useDataLayerValue } from './DataLayer';
// import Sidebar from 'components/Sidebar';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  //run code based on a given condition/
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, []);

  return (
    <div className="App">{token ? <Home spotify={spotify} /> : <Login />}
    </div>
  );


}

export default App;
