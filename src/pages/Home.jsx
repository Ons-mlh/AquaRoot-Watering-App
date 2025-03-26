import { useState } from 'react';
import plant from '../assets/plant.png';

export default function Home() {
    return (
        <>
            <div className='flex flex-col items-center mt-20'>
                <div className='bg-[#BECDAB] w-80 h-80 rounded-[50%] shadow-emerald-200'>
                    <img src={plant} alt="" />
                </div>
                <p className='text-center text-green-700 text-3xl font-bold mt-10'>
                    Plants give us life, Let’s return the favor! <br></br>Welcome to AquaRoot, your partner in mindful plant care
                </p>
            </div>
        </>
    )
}