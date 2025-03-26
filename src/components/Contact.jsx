import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'

export default function Contact() {
    return (
        <>
            <div className="flex bottom-0 w-full fixed justify-center items-end my-2 h-fit-content">
                <h3 className="text-s font-bold text-[#114C82]">Made by Ons El Maleh</h3>
                <ul className='flex space-x-4 space-y-1 items-center justify-around ml-2'>
                    <li><a href="https://www.linkedin.com/in/ons-el-maleh-648531300/"><img src={linkedin} alt="linkedin" className='size-5 mt-1'/></a></li>
                    <li><a href="https://github.com/Ons-mlh"><img src={github} alt="github" className='size-5'/></a></li>
                </ul>
            </div>
        </>
    )
}