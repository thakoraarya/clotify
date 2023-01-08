import React from 'react'
import login_vector from "./assets/login_vector.png";

const Station = () => {
  return (
    <aside className='flex flex-col p-4 w-fit h-full bg-clotify-secondry rounded-2xl'>

      <div className=' h-[200px] bg-clotify-three my-[16px] rounded-2xl py-5 px-9 flex flex-col justify-evenly'>

        {/* here are current song and photo with name of artist also progress bar with time */}
        <section className=' bg-clotify-primary  h-fit flex flex-col gap-y-2 rounded-2xl px-2.5 py-3  justify-center'>

          <div className=' flex flex-row justify-evenly'>

            <img src={login_vector} alt="current playing song" className=' w-16 rounded-2xl' />

            <div className=' flex flex-col justify-around '>
              <h1 className=' font-bold text-white'> Thunderclouds</h1>
              <span className=' font-light text-slate-300'>  Sia,Diplo,Labrinth</span>
            </div>

          </div>
          {/* change this when making it dynamic */}
          <progress value="0" max="100" className='w-full text-clotify-three bg-clotify-three h-1 rounded-full pr-'></progress>


        </section>
        {/* here are the icons of controller yes */}
        <section className=' text-clotify-primary flex flex-row justify-evenly'>
          <span className="material-symbols-outlined">
            favorite
          </span>
          <span className="material-symbols-outlined">
          shuffle
          </span>
          <span className="material-symbols-outlined">
            skip_previous
          </span>
          <span className="material-symbols-outlined">
            play_circle
          </span>
          <span className="material-symbols-outlined">
            skip_next
          </span>
          <span className="material-symbols-outlined">
            repeat
          </span>
        </section>

      </div>

      <section className=' w-[353px] h-[546px] bg-transparent  border-2 my-[16px] rounded-2xl'>
      </section>
    </aside>
  )
}

export default Station