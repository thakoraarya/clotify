import { useEffect } from "react";
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from "./Spotify";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {

useEffect(()=>{
const token = getTokenFromUrl();
console.log("my token is : ", token);
},[]);


  return (
   <div>
    {/* <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/login" element={<Login/>} />
           </Routes>
        </Router> */}
<Login/>


   </div>

  );
}

export default App;
