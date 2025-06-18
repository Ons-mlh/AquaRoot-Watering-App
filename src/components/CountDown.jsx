import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';

export default function CountDown({plant , handleComplete , isComplete , nextWatering, setNextWatering}) {

    useEffect(() => {

        if ("Notification" in window) {
            Notification.requestPermission();
        }

        const storedTime = localStorage.getItem(`nextWatering-${plant.name}`);

        if (storedTime) {
            setNextWatering(new Date(storedTime));
        } else if (plant.wateringSchedule) {
            const time = new Date();
            time.setTime(time.getTime() + plant.wateringSchedule * 60 * 60 * 1000);
            setNextWatering(time);
            localStorage.setItem(`nextWatering-${plant.name}`, time.toISOString()); 
        }
    }, [plant.name, plant.wateringSchedule]);

    
    return (
        <>
            {nextWatering && (
                !isComplete ? (
                    <Countdown 
                        date={nextWatering}
                        onComplete={handleComplete}
                        renderer={({ hours, minutes, seconds }) => (
                            <p className=" text-[12px] md:text-[14px] font-semibold text-black w-[180px] mt-1 md:w-[190px]">
                                Next watering in: <span className=' text-[12px] md:text-[14px] font-semibold text-green-600'>{hours}h {minutes}m {seconds}s</span>
                            </p>
                        )}
                    />
                ) : (
                    <p className='text-[17px] font-bold text-red-700 w-[180px] mt-1.5'>💧Time to water me!</p>
                )
            )}
        </>
    )
}