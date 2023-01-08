
import React from 'react'
import SideBar from './SideBar';
import Station from './Station';



const Player = ({ clotify }) => {
    return (
        <div className='grid grid-flow-col justify-between justify-items-center  py-5 mr-5'>
            <SideBar />
            hey its me player
            <Station />
        </div>
    )
}





export default Player