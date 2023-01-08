import React from 'react'
import clotify_logo from './assets/clotify_logo.png'
const SideBar = () => {
  return (
    <div className=' w-[140px] h-auto bg-clotify-secondry  rounded-tr-xl rounded-br-xl'>

      <section className=' flex flex-col justify-center items-center'>
        <img className=' w-2/3 m-5' src={clotify_logo} alt="clotify icon" />
        <p className=' text-white font-[roboto] font-black text-xl'>CLOTIFY</p>
      </section>

      <section className=' gap-y-3 grid my-10 h-[515px] grid-flow-row mx-8 justify-center items-center'>

        <div className="group w-20 h-20 transition duration-1000 ease-in-out rounded-2xl hover:bg-clotify-three flex justify-center flex-col item-center">
          <span className="  text-4xl delay-200 flex justify-center text-white material-symbols-outlined">
            home
          </span>
          <p className=' trasition group-hover:visible absolute group-hover:relative invisible text-sm text-white font-bold justify-center flex'>home</p>
        </div>

        <div className="group w-20 h-20 transition duration-1000  rounded-2xl hover:bg-clotify-three  flex justify-center flex-col item-center">
          <span className="  text-4xl flex justify-center text-white material-symbols-outlined">
            search
          </span>
          <p className=' group-hover:visible absolute group-hover:relative invisible text-sm text-white font-bold justify-center flex'>search</p>
        </div>

        <div className="group w-20 h-20 transition duration-1000  rounded-2xl hover:bg-clotify-three flex justify-center flex-col item-center">
          <span className="  text-4xl flex justify-center text-white material-symbols-outlined">
            library_music
          </span>
          <p className=' group-hover:visible absolute group-hover:relative invisible text-sm text-white font-bold justify-center flex'>playlists</p>
        </div>

        <div className="group w-20 h-20 transition duration-1000  rounded-2xl hover:bg-clotify-three flex justify-center flex-col item-center">
          <span className="  text-4xl flex justify-center text-white material-symbols-outlined">
            favorite
          </span>
          <p className=' group-hover:visible absolute group-hover:relative invisible text-sm text-white font-bold justify-center flex'>likes</p>
        </div>

        <div className="group w-20 h-20 transition duration-1000  rounded-2xl hover:bg-clotify-three flex justify-center flex-col item-center">
          <span className="  text-4xl flex justify-center text-white material-symbols-outlined">
            account_circle
          </span>
          <p className=' group-hover:visible  absolute group-hover:relative invisible text-sm text-white font-bold justify-center flex'>profile</p>
        </div>

      </section>
    </div>
  )
}

export default SideBar