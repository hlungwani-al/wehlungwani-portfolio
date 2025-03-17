'use client';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="text-[#1e295e]">
      <Navbar />
      <main className="flex flex-col">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">
            <TypeAnimation
              sequence={[
                "Introducing We Hlungwani: A Full Stack Mastermind", 1000,
                "Introducing We Hlungwani: A Microsoft Certified AI Engineer", 1000,               
                "Introducing We Hlungwani: A Problem-Solving Innovator", 1000,
                "Introducing We Hlungwani: A Cloud Computing Specialist", 1000,
                "Introducing We Hlungwani: A Data-Driven Visionary", 1000,
                "Introducing We Hlungwani: A Frontend Architect in Angular", 1000,
                "Introducing We Hlungwani: A PostgreSQL and Database Optimization Pro", 1000,
                "Introducing We Hlungwani: A Passionate Software Craftsman", 1000,
                "Introducing We Hlungwani: A Future-Ready IT Leader", 1000
              ]}
              speed={50}
              repeat={Infinity}
              className="text-[#1e295e]" 
            />
          </h2>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-[#55679c] text-white">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg max-w-2xl mx-auto">
      I&apos;m a Microsoft-certified AI engineer and full-stack developer with a knack for crafting intelligent, high-performance applications.  
      From architecting scalable backend systems with Java & PostgreSQL to designing sleek, responsive frontends in Angular,  
      I thrive on turning complex challenges into seamless digital experiences.  
      Fueled by a passion for innovation, I blend data-driven insights with cutting-edge tech to build solutions that matter.  
      Lets push the boundaries of what&apos;s possible.
    </p>
  </div>
</section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Here are some of the projects I have worked on.
            </p>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-[#55679c] text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Feel free to reach out to me via email or social media.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
