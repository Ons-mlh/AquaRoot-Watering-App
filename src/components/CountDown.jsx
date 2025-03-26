import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';

export default function CountDown({plant}) {
    const [nextWatering, setNextWatering] = useState(null);

    useEffect(() => {
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

    const handleComplete = () => {
        alert(`Time to water ${plant.name}!`);
        
        const newTime = new Date();
        newTime.setTime(newTime.getTime() + plant.wateringSchedule * 60 * 60 * 1000);
        
        setNextWatering(newTime);
        localStorage.setItem(`nextWatering-${plant.name}`, newTime.toISOString());
    }
    
    return (
        <>
            {nextWatering && (
                <Countdown 
                    date={nextWatering}
                    onComplete={handleComplete}
                    renderer={({ hours, minutes, seconds }) => (
                        <p className="text-s font-semibold text-black w-[230px]">
                            Next watering in: <span className='text-s font-semibold text-green-600'>{hours}h {minutes}m {seconds}s</span>
                        </p>
                    )}
                />
            )}
        </>
    )
}