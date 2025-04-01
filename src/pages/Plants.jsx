import { useEffect, useState } from 'react';
import {Upload} from 'lucide-react';
import setup from '../assets/setup.png';
import CountDown from '../components/CountDown';

export default function Plants() {
    const [formOpen, setFormOpen] = useState(false);
    const [fileName, setFileName] = useState("No file chosen");
    const [plantName, setPlantName] = useState("");
    const [wateringSchedule, setWateringSchedule] = useState(1);
    const [photo, setPhoto] = useState(null);
    const [plants, setPlants] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : "No file chosen");
        setPhoto(file);
    }

    const handlePlantName = (event) => {
        setPlantName(event.target.value);
    }

    const handleWateringSchedule = (event) => {
        setWateringSchedule(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!wateringSchedule || !plantName || !photo) {
            alert("Please fill in all the fields");
        }
    
        if (wateringSchedule < 1 && wateringSchedule) {
            alert("Please enter a valid watering schedule");
        }


        while (plants.some(plant => plant.name.toLowerCase() === plantName.toLowerCase())) {
            alert("A plant with this name already exists. Please choose a unique name.");
            return;
        }

        if (plantName && photo && wateringSchedule > 0 ) {
            alert("Plant added successfully");
            setFormOpen(false);
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newPlant = {
                name: plantName,
                photo: reader.result,
                wateringSchedule: wateringSchedule
            };

            const newPlants = [...plants, newPlant];
            setPlants(newPlants);
            localStorage.setItem("plants", JSON.stringify(newPlants));
        };
        reader.readAsDataURL(photo);
    };

    useEffect(() => {
        const savedPlants = JSON.parse(localStorage.getItem("plants"));
        if (savedPlants) {
            setPlants(savedPlants);
        }
    },[]);

    return (
        <>
            <h1 className='text-center text-[#0c2d19] text-[40px] font-bold my-8'>Keep your plants thriving !</h1>
            <div className='flex flex-col items-center mb-10 h-fit-content'>
                <div className='w-full h-150 grid grid-rows-2 grid-cols-5 mx-5'>
                    {plants.map((plant, index) => (
                        <div key={index} className='relative mx-10'>
                            <div className='relative flex justify-center items-center rounded-lg'>
                                <img src={setup} alt="setup" className='size-35' />
                                <img src={plant.photo} alt={plant.name} className='absolute top-0 left-0 w-25 h-25 object-cover mx-16 my-4' />
                            </div>
                            <div className='absolute bottom-0 left-0 w-fit-content bg-opacity-75 p-5'>
                                <h3 className='text-xl font-bold text-green-700'>{plant.name}</h3>
                                <p className='text-[16px] text-black font-semibold'>Watering every: {plant.wateringSchedule} {plant.wateringSchedule > 1 ? 'hours' : 'hour'}</p>
                                <CountDown plant={plant} key={index}/>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <button className='bg-green-600 hover:bg-green-800 text-white text-[20px] font-bold py-2 px-4 rounded h-10 w-25 border-1 border-black mx-2'>Water</button>
                                <button className='bg-green-600 hover:bg-green-800 text-white text-[20px] font-bold py-2 px-4 rounded h-10 w-25 border-1 border-black mx-2'>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center h-fit-content'>
                    <button className='bg-green-600 hover:bg-green-800 text-white text-[20px] font-bold py-2 px-4 rounded h-10 w-40 border-1 border-black mx-10' onClick={() => setFormOpen(true)}>
                        Add a plant
                    </button>
                    <button className='bg-green-600 hover:bg-green-800 text-white text-[20px] font-bold py-2 px-4 rounded h-10 w-40 border-1 border-black' onClick={() => setPlants([])}>
                        Reset Plants
                    </button>
                </div>
            </div>

            {formOpen && (

                <div className="fixed inset-0 bg-black/10 flex items-center justify-center p-4">
                    <div className="bg-white/80 p-6 rounded-lg w-full max-w-md flex flex-col justify-center items-center">
                        <h2 className='text-green-700 font-bold text-xl mb-4'>Add New Plant</h2>
                        
                        <form className='flex flex-col items-center w-full text-[#0c2d19]'>
                            
                            <label htmlFor="name" className='text-left w-full mb-2 font-bold'>Name*</label>
                            <input type="text" placeholder='Enter the plant name' className='mb-4 p-2 border border-gray-300 rounded w-full' value={plantName} onChange={handlePlantName}/>
                            
                            <label htmlFor="photo" className='text-left w-full mb-2 font-bold'>Photo*</label>
                            <div className="relative flex items-center border border-gray-300 rounded-lg w-full p-2 bg-gray-100">
                                <input type="file" id="photo" className="hidden" onChange={handleFileChange} />
                                <label htmlFor="photo" className="cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold flex items-center gap-2">
                                    <Upload size={18} />Upload
                                </label>
                                <span className="ml-4 text-gray-700 truncate">{fileName}</span>
                            </div>

                            <label htmlFor="water" className='text-left w-full mb-2 font-bold'>Watering schedule*</label>
                            <input type="number" placeholder='Enter the watering schedule (hours)' min={1} className='mb-4 p-2 border border-gray-300 rounded w-full' value={wateringSchedule} onChange={handleWateringSchedule}/>
                        
                        </form>
                        <div className='flex justify-center w-full space-x-20'>
                            <button className='bg-red-600 hover:bg-red-800 text-white text-[18px] font-bold py-2 px-4 rounded mt-1 border-black border-1 shadow-2xl' onClick={handleSubmit}>Save Plant</button>
                            <button className='bg-red-600 hover:bg-red-800 text-white text-[18px] font-bold py-2 px-4 rounded mt-1 border-black border-1 shadow-2xl' onClick={() => setFormOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}