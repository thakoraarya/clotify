import { useEffect } from "react";
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

// ------------- V ---------------- here i forgot to add the word ""new"" before SpotifyWebApi and it take my 2hours to find the error
const clotify = new SpotifyWebApi();
function App() {

  // const [token] = useState(null);
  // user error solved
  const [{ user,token }, dispatch] = useDataLayerValue();
  // const [{ user,token,setToken }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token,
      });
      console.log("i have a token", token);
      clotify.setAccessToken(_token);
      clotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  },
   [dispatch,token]);

  console.log("token is", token);
  console.log("user is", user);
  return (
    <div className=" bg-clotify-white h-screen overflow-hidden">
      {

        user ? <Player  clotify={clotify}/> : <Login />
      }
    </div>

  );
}

export default App;
