import AboutImg from "../assets/about.jpeg";


export default function About(){
    return <section className="flex flex-col md:flex-row bg-secondary px5">
        <div className="md:w-1/2 p-5"><img src={AboutImg} alt="About image" />
</div>
        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white mx-12">
                <h1  className="text-4xl  border-b-4 mb-5 w-[210px] border-primary">About Me</h1>
            <p className="pb-5">I’m a dedicated and creative UI/UX Developer with 3+ years of experience in building modern, responsive,
                 and user-friendly web applications. I have a strong eye for design and a passion for crafting seamless digital 
                 experiences that combine visual appeal with usability.</p>
             <p className="pb-5">I am Proficient in Frontend Skills like React.js,TailwindCss,Sass,Css3 and Figma many more</p>
            </div>
        </div>
    </section>
}