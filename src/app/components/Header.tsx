import Image from "next/image"
import facebookimg from "../../public/images/facebook.svg"

const Header = () => {
  return (
    <div>
     <div className='hidden md:flex justify-around py-2 px-4 shadow-sm items-center'>
      <div className='flex gap-9'>
       <p className='tracking-wider text-[0.85em] font-[400] font-poppin'>Phone number : <span className='text-[#838383] text-[0.75em]'>03463925060</span></p>
       <p className='tracking-wider text-[0.85em] font-[400] font-poppin'>E-mail : <span className='text-[#838383] text-[0.75em]'>aslamnomann123@gmail.com</span></p>
      </div>
      <div className='flex gap-7'>
        <Image className="lg:w-[35px] w-[30px]" src="facebook.svg" alt="social media icons"/>
        <Image className="lg:w-[35px] w-[30px]" src="facebook.svg" alt="social media icons"/>
        <Image className="lg:w-[35px] w-[30px]" src="facebook.svg" alt="social media icons"/>
        <Image className="lg:w-[35px] w-[30px]" src="facebook.svg" alt="social media icons"/>
        
      </div>
     </div>
    </div>
  )
}

export default Header