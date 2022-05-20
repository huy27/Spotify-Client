import React from 'react'

const Navbar = ({ albumName }) => {
    return (
        <div className='h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl'>
            {albumName}
        </div>
    )
}

export default Navbar