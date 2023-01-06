import { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const clotify = new SpotifyWebApi();
function App() {
  // --------------- V ---------------- here i forgot to add the word ""new"" before SpotifyWebApi and it take my 2hours to find the error

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      clotify.setAccessToken(_token);

      clotify.getMe().then((user) => {
        console.log("my data", user);

        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

    }
    console.log("my token is : ", token);
  });

  console.log(user);
  return (
    <div>{
      token ? <Player /> : <Login />
    }

    </div>

  );
}

export default App;
