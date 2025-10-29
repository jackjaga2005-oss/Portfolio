import HeroImg from "../assets/hero.jpeg";
import { FaLinkedin ,FaInstagram} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary">
      <div className="md:w-1/2 flex flex-col pl-8">
      <h1 className=" text-white text justify-center font-hero-font text-4xl">
        Hi, <br /> I'm Jagadeesh
      <p className="text-2xl py-4">I’m a Frontend Developer</p>
      </h1>
      <div className="flex py-5 ">
        <a className=" pr-5  hover:text-white" href="#"><FaLinkedin size={40} /></a>
        <a className=" pr-5 hover:text-white" href="#"><SiGmail size={40} /></a>
      </div>
      </div>
      <img className="md:w-1/3 " src={HeroImg} alt="Hero" />
    </section>
  );
}
