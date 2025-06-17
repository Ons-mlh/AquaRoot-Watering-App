import CountDown from './CountDown'
import setup from '../assets/setup.png'

export default function Plant({ plant, index, handleDelete, handleWatering }) {
    return (
        <div className='relative h-75 mx-3 md:mx-10 mt-4'>
            <div className='relative flex justify-center items-center rounded-lg'>
                <img src={setup} alt="setup" className='size-35' />
                <img src={plant.photo} alt={plant.name} className='absolute top-0 left-0 w-25 h-25 object-cover mx-12 md:mx-13 my-4' />
            </div>
            <div className='absolute bottom-0 left-0 w-fit-content bg-opacity-75 pb-5 pt-2 md:px-5'>
                <h3 className='text-xl font-bold text-green-700'>{plant.name}</h3>
                <p className=' text-[14px] md:text-[16px] text-black font-semibold'>
                    Watering every: {plant.wateringSchedule} {plant.wateringSchedule > 1 ? 'hours' : 'hour'}
                </p>
                <CountDown plant={plant} key={index}/>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button
                    className='bg-green-600 hover:bg-green-800 text-white text-[16px] font-bold py-1 px-2 rounded h-8 w-20 border-1 border-black mx-2'
                    onClick={handleWatering}>
                    Water
                </button>
                <button
                    className='bg-green-600 hover:bg-green-800 text-white text-[16px] font-bold py-1 px-2 rounded h-8 w-20 border-1 border-black mx-2'
                    onClick={() => handleDelete(index)}>
                    Delete
                </button>
            </div>
        </div>
    );
}