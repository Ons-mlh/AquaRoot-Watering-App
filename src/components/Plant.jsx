import CountDown from './CountDown'
import setup from '../assets/setup.png'
import { useState } from 'react';

export default function Plant({ plant, index, handleDelete}) {

    const [isComplete, setIsComplete] = useState(false);
    const [nextWatering, setNextWatering] = useState(null);

    const handleComplete = () => {
    
        if (Notification.permission === "granted") {
            new Notification (`Time to water your plant ${plant.name} ! 💧`);        
        }
    
        setIsComplete(true);
        localStorage.setItem('isComplete', JSON.stringify(true));
            
    }

    const handleWatering = () => {

        alert("Plant watered successfully");

        const newTime = new Date();
        newTime.setTime(newTime.getTime() + plant.wateringSchedule * 60 * 60 * 1000);
            
        setNextWatering(newTime);
        localStorage.setItem(`nextWatering-${plant.name}`, newTime.toISOString());

        setIsComplete(false);
        localStorage.setItem('isComplete', JSON.stringify(false));

    }
    

    return (
        <div className='relative h-80 mx-3 md:w-[230px] md:mx-10 mt-4'>

            <div className='relative flex justify-center items-center rounded-lg'>
                <img src={setup} alt="setup" className='size-35' />
                <img src={plant.photo} alt={plant.name} className='absolute top-0 left-0 w-25 h-25 object-cover mx-7 md:mx-17 my-4' />
            </div>

            <div className='absolute bottom-0 left-0 w-fit-content bg-opacity-75 pb-5 md:px-5'>
                <h3 className=' text-lg md:text-xl font-bold text-green-700'>{plant.name[0].toUpperCase() + plant.name.slice(1)}</h3>
                <p className=' text-[12px] md:text-[16px] text-black font-semibold'>
                    Watering every: {plant.wateringSchedule} {plant.wateringSchedule > 1 ? 'hours' : 'hour'}
                </p>
                <CountDown plant={plant} key={index} handleComplete = {handleComplete} isComplete={isComplete} nextWatering = {nextWatering} setNextWatering = {setNextWatering} />
            </div>

            <div className='flex justify-center items-center mt-4'>
                
                {isComplete && (
                    <button
                    className='bg-green-600 hover:bg-green-800 text-white text-[16px] font-bold py-1 px-2 rounded h-8 w-20 border-1 border-black mx-2'
                    onClick={()=> handleWatering()}>
                    Water
                    </button> 
                )}
                
                <button
                    className='bg-green-600 hover:bg-green-800 text-white text-[16px] font-bold py-1 px-2 rounded h-8 w-20 border-1 border-black mx-2'
                    onClick={() => handleDelete(index)}>
                    Delete
                </button>

            </div>
        </div>
    );
}