import React from "react";
import login_vector from "./assets/login_vector.png";
// import loginBg from './assets/loginBg.svg';

const Login = () => {
    return (
        <div className="flex justify-center bg-cover bg-cetner bg-no-repeat h-[100vh] items-center" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),url(${login_vector})`, }}>
            <div className=" App h-[728px]  rounded-xl w-[510px] flex flex-col flex-nowrap items-center justify-between bg-white space-y-4 p-4 ">
                <img className=" rounded-lg h-[674px] w-[472px] object-cover bg-white" src={login_vector} alt="login vector" />
                <div>
                    <p className=" my-auto text-xl bg-clotify text-spotify-white w-[472px] p-5 rounded-full font-sens font-bold">
                        LOGIN WITH SPOTIFY
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
