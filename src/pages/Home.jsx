import { useState } from 'react';
import plant from '../assets/plant.png';
import cactusIcon from '../assets/icons/cactus.png';
import flowerIcon from '../assets/icons/flower.png';

export default function Home() {
    return (
        <> 
                <div className='relative w-fit-content'>
                    <img src={cactusIcon} alt="cactus icon" className=" size-10 md:size-15 absolute animate-bounce top-110 left-90 md:left-350 md:top-90 opacity-40 "/>
                    <img src={flowerIcon} alt="flower icon" className="size-15 md:size-20 absolute animate-bounce left-10 md:left-50 md:top-15 opacity-40 "/>
                    <div className='flex flex-col items-center mt-20'>
                        <div className='bg-[#BECDAB] w-60 md:w-80 h-60 md:h-80 rounded-[50%] shadow-emerald-200'>
                            <img src={plant} alt="plant" />
                        </div>
                        <p className='text-center text-green-700 text-2xl md:text-3xl font-bold mt-13'>
                            Plants give us life, Let’s return the favor! <br></br>Welcome to AquaRoot, your partner in mindful plant care
                        </p>
                    </div>
            </div>
        </>
    )
}