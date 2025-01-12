import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  




export default function page(){

     return(
<>
    <div className="all-divs-outer w-full min-h-[100vh] bg-black">
           
           <div className="about-hero w-full h-[100vh] bg-black flex justify-center items-center">
                <div className="about-hero-content flex flex-col items-center justify-center">
                <h1 className="hero-title text-white font-black text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] ">About Me</h1>
                <p className="hero-subtitle text-white font-thin text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]">It's me Rameez!</p>
       </div>
       </div>
       <div className="about-content w-full bg-white py-44">
       <Accordion type="single" className="w-[70%] mx-auto"  collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="font-bold" >My BackGround</AccordionTrigger>
    <AccordionContent>
    "My Journey as a Web Developer" I have always been passionate about technology and problem-solving, which led me to pursue a career in web development. Over the years, I've honed my skills through hands-on experience, countless tutorials, and real-world projects. Starting from HTML, CSS, and JavaScript, I progressively moved on to more advanced technologies like React, Node.js, and various backend frameworks. My journey has taught me the importance of continuous learning, adaptability, and creativity in solving complex problems. As a web developer, I’m driven by the desire to build functional, user-friendly, and aesthetically pleasing websites that make a real difference in people's lives.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger  className="font-bold">Hobbies and Interests</AccordionTrigger>
    <AccordionContent>
    "Beyond Code: My Hobbies & Interests" When I'm not coding, I enjoy exploring a variety of hobbies that help me unwind and stay inspired. Whether it's reading the latest tech blogs, experimenting with new frameworks, or diving into design projects, I constantly look for ways to combine my professional skills with my personal interests. Outside of tech, I enjoy outdoor activities like hiking and photography, which allow me to explore the world from different perspectives. These hobbies help me maintain a healthy work-life balance and keep my creativity flowing, both in and out of the coding world.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger  className="font-bold">Experience</AccordionTrigger>
    <AccordionContent>
    "Beyond Code: My Hobbies & Interests" When I'm not coding, I enjoy exploring a variety of hobbies that help me unwind and stay inspired. Whether it's reading the latest tech blogs, experimenting with new frameworks, or diving into design projects, I constantly look for ways to combine my professional skills with my personal interests. Outside of tech, I enjoy outdoor activities like hiking and photography, which allow me to explore the world from different perspectives. These hobbies help me maintain a healthy work-life balance and keep my creativity flowing, both in and out of the coding world.
    </AccordionContent>
  </AccordionItem>
</Accordion>



       </div>
            
    </div>
</>
     );
}