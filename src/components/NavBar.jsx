import logo from '../assets/plant logo.png';
import {Menu , X} from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="shadow-md px-6 py-4">

                <div className="flex justify-between items-center md:px-10">
                    <button
                        className="md:hidden text-green-700 focus:outline-none" 
                        onClick={() => setMenuOpen(true)}>
                        <Menu size={28}></Menu>
                    </button>
                    <h1 className='text-2xl font-it italic font-bold text-green-700'>AquaRoot</h1>
                    <ul className="hidden lg:flex space-x-20 text-green-600 font-medium">
                        <li><a href="/" className="hover:text-green-800 text-[18px]">Home</a></li>
                        <li><a href="/about" className="hover:text-green-800 text-[18px]">About</a></li>
                        <li><a href="/plants" className="hover:text-green-800 text-[18px]">My plants</a></li>
                    </ul>
                    <img src= {logo} alt="logo" className='w-10'/>
                </div>
                
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white/30 backdrop-blur-lg shadow-lg p-5 transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300`} >
                    <button className="text-green-700 mb-4" onClick={() => setMenuOpen(false)}>
                        <X size={28} />
                    </button>

                    <ul className="space-y-8 text-green-600 font-medium mt-5">
                        <li><a href="/" className="block hover:text-green-800">Home</a></li>
                        <li><a href="/about" className="block hover:text-green-800">About</a></li>
                        <li><a href="/plants" className="block hover:text-green-800">My Plants</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}