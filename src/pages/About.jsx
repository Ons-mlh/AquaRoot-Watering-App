import plant from '../assets/plant image.png';
import cactusIcon from '../assets/icons/cactus.png';
import flowerIcon from '../assets/icons/flower.png';


export default function About() {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <img src={cactusIcon} alt="cactus icon" className=" size-8 md:size-15 absolute animate-bounce top-168 left-80 md:left-300 md:top-110 opacity-40 "/>
            <img src={flowerIcon} alt="flower icon" className="size-12 md:size-20 absolute animate-bounce left-10 md:left-50 top-55 md:top-40 opacity-40 "/>
            <h1 className='text-3xl md:text-4xl font-bold text-green-700 mb-5'>Welcome to AquaRoot</h1>
            <img src={plant} alt="plant" className=' size-60 md:size-80 ' />
            <p className='text-center text-[15px] md:text-xl text-gray-800 max-w-3xl px-4 mt-5'>
                AquaRoot is a plant care application designed to help you keep track of your plants' watering schedules. 
                With AquaRoot, you can easily add your plants, set their watering frequency, and receive reminders when it's time to water them.
                Our goal is to make plant care simple and enjoyable for everyone, whether you're a seasoned plant parent or just starting out.
            </p>
        </div>
    )
}