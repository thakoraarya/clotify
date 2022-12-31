import { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
function App() {
// --------------- V ---------------- here i forgot to add the word ""new"" before SpotifyWebApi and it take my 2hours to find the error
  const spotify = new SpotifyWebApi();

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }
    console.log("my token is : ", token);
  }, []);


  return (
    <div>{
      token ? console.log("logged in") : <Login />
    }

    </div>

  );
}

export default App;
