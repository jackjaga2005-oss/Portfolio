import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
  const [toffleMenu,setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 bg-primary py-2" >
      <a href="#" className="font-bold text-black">Portfolio</a>
      <nav className="hidden md:block">
<ul className="flex text-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </nav>
       { toffleMenu && <nav className="blcok md:hidden ">
      <ul className=" flex flex-col text-white mobile-nav ">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </nav>}
      <button onClick={() => setToggleMenu(!toffleMenu)} className='blcok md:hidden'><Bars3Icon className='text-white h-5'/></button>
     
    </header>
  );
}
