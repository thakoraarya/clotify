import { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player";
import { useDataLayerContext } from "./DataLayer";

function App() {
  // --------------- V ---------------- here i forgot to add the word ""new"" before SpotifyWebApi and it take my 2hours to find the error
  const clotify = new SpotifyWebApi();

  const [token, setToken] = useState(null);
  const [{},dispatch] = useDataLayerContext();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      clotify.setAccessToken(_token);

      clotify.getMe().then(user => {
        console.log("my data", user);
      })
    }
    // console.log("my token is : ", token);
  });


  return (
    <div>{
      token ? <Player /> : <Login />
    }

    </div>

  );
}

export default App;
