import Link from "next/link";
import Image from "next/image";
import logo from "../public/im;ages/logo.png";
import { useState } from "react";

function Navbar ()
{
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const NavbarToggleHnadler =()=>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className="flex lg:justify-evenly justify-between py-2 sm:px-14 px-6 items-center shadow-sm cursor-pointer">
        <div className={`${isMenuOpen ? "translate-y-0" : "translate-y-[100%]"} bg-white h-full text-center w-[265px] fixed z-50 top-0 left-0 py-4 px-2 shadow-lg transition-all duration-700`}>
            <div className="absolute top-[12%] left-[10%]">
                <Image src={logo}
                className="w-[165px]" alt="Ddsgnr Logo"/>
            </div>
            <div className="absolute top-5 right-5" onClick={NavbarToggleHnadler}>x</div>
            <ul className="absolute top-[28%] left-[15%] flex flex-col gap-9 text-start">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Cources</Link></li>
                <li><Link href="/">Services</Link></li>
                <li><Link href="/">Achievment</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Testinominals</Link></li>
            </ul>
            <div className="flex flex-col gap-7 absolute top-[65%] left-[15%]"></div>
        </div>
    </nav>
    
  )
}

