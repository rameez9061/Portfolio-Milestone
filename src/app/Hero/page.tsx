import Image from 'next/image';

export default function page(){
    return(

        <>
        <div className="hero-page w-full min-h-[100vh] bg-white">
            <div className="inner-hero w-full h-[100vh] bg-black flex justify-center items-center">
            <div className="hero-content flex flex-col items-center">
                <h1 className="hero-title text-white font-black text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] ">Rameez Aziz</h1>
                <p className="hero-subtitle text-white font-thin text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]">Web Developer</p>
            </div>
            </div>
            <div className="content-down w-full bg-white py-10 ">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
  {/* Introduction Section */}
  <h1 className="text-4xl font-bold text-gray-800 mb-4  sm:text-3xl md:text-4xl lg:text-5xl">
    Introduction
  </h1>
  <p className="text-lg text-gray-600">
    Hi Im Rameez a passionate web developer who loves building interactive and user-friendly web applications.
    My focus is on creating solutions that are both efficient and intuitive. Im always learning and improving my
    skills to stay ahead in the ever-changing tech world.
  </p>
</div>

{/* Skills Section */}
<div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6  sm:text-3xl md:text-4xl lg:text-5xl text-center">
    My Skills
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">JavaScript</h3>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">Next.js</h3>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">React.js</h3>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">TypeScript</h3>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">TailwindCSS</h3>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="font-semibold text-xl text-black">HTML</h3>
    </div>
  </div>
</div>

            </div>
            <div className="heading  w-full text-center bg-white font-bold text-black mb-20 mt-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"><h1>Projects</h1></div>
            <div className="projects-section relative w-full min-h-[100vh] grid mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 bg-white">
                <div className="proBox relative h-[300px] drop-shadow-2xl " >
                    <Image src="/images/pro1.jpg" alt="project1"  layout='fill' />
                </div>
                <div className="proBox relative h-[300px] drop-shadow-2xl" >
                    <Image src="/images/pro2.jpg" alt="project1"  layout='fill' />
                </div>
                <div className="proBox relative h-[300px] drop-shadow-2xl" >
                    <Image src="/images/pro3.jpg" alt="project1"  layout='fill' />
                </div>
                <div className="proBox relative h-[300px] drop-shadow-2xl" >
                    <Image src="/images/pro4.jpg" alt="project1"  layout='fill' />
                </div>
                <div className="proBox relative h-[300px] drop-shadow-2xl" >
                    <Image src="/images/pro5.jpg" alt="project1"  layout='fill' />
                </div>
                <div className="proBox relative h-[300px] drop-shadow-2xl" >
                    <Image src="/images/pro6.jpg" alt="project1"  layout='fill' />
                </div>
                
            </div>
        </div>
        </>
    );
}