// src/App.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt,FaArrowDown, } from 'react-icons/fa';
import profile from './portfolio.jpg'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import FadeInOnScroll from './FadeInControll.jsx';
import twitter from './twitter.png'
import trust from './trust.png'
import kovai from './kovai.png'
import carRental from './carRental.png'
import port from './portfolioWeb.png'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['Home', 'Projects', 'Skills', 'Experience', 'Contact'];
  return (

   
       <div className="bg-black text-green-400 min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
     
          <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-green-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-green-700 px-4 py-2 animate-fade-down">
          <ul className="flex flex-col space-y-4 text-green-300 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-green-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
      {/* Hero Section */}
            <FadeInOnScroll direction="left" delay={0.8}>
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg text-gray-400">Hello, I am</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Manikandan
            <span className="block text-green-500">MERN Stack Developer</span>
          </h1>
          <p className="text-green-300 mb-6">
            Final-year B.Tech CSE student passionate about building scalable, responsive, and secure web applications using the MERN stack.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="#projects" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold">
              View Projects
            </a>
            <a href="#contact" className="border border-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600">
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com" className="text-xl hover:text-green-400"><FaGithub /></a>
            <a href="https://linkedin.com" className="text-xl hover:text-green-400"><FaLinkedin /></a>
            <a href="mailto:youremail@example.com" className="text-xl hover:text-green-400"><FaEnvelope /></a>
          </div>
        </div>
        <div className="relative mt-12 md:mt-0 md:ml-20">
  {/* Animated Background */}
  <div className="absolute -inset-2 rounded-full bg-green-500 opacity-30 animate-pulse blur-xl z-0" />

  {/* Profile Image */}
  <img
    src={profile}
    alt="Profile"
     style={{ width: '530px' }}
    className="relative z-10 rounded-full shadow-lg"
  />
</div>

      </section>
      </FadeInOnScroll>
    </div>

      {/* Projects Section */}


 <h2 className="text-4xl font-bold text-green-500 mb-12 flex justify-center animate-pulse tracking-wider">
    Projects
  </h2>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
  {[
    {
      title: 'Twitter Clone',
      desc: 'Feature-rich MERN-based social media platform with JWT auth, post threads, and moderation system.',
      image: twitter,
      stack: ['Reactjs','HTML5','Tailwind css','javaScript', 'Node.js', 'MongoDB', 'Express.js'],
      live: 'https://github.com/Manikandan0018/x-clone',
    },
    {
      title: 'Car Rental Web App',
      desc: 'Real-time car booking platform with Stripe integration and role-based access for admins and users.',
      image: carRental,
      stack: ['Reactjs','HTML5','Tailwind css','javaScript', 'Node.js', 'MongoDB', 'Express.js'],
      live: 'https://manikandan0018.github.io/carRental/',
    },
    {
      title: 'Luxury Apartment UI',
      desc: 'Single-page modern UI showcasing lifestyle amenities with React and Tailwind.',
      image: kovai,
      stack: ['Reactjs','HTML5','Tailwind css','javaScript', 'Node.js', 'MongoDB', 'Express.js'],
      live: 'https://manikandan0018.github.io/KovaisApparment/',
    },
    {
      title: 'Trust Information Portal',
      desc: 'Media-centric portal for events and announcements with Cloudinary, role-based access, and moderation.',
      image: trust,
      stack: ['Reactjs','HTML5','Tailwind css','javaScript', 'Node.js', 'MongoDB', 'Express.js'],
      live: 'https://manikandan0018.github.io/trust/',
    },
     {
      title: 'Portfolio',
      desc: 'Personal portfolio builded using Reactjs frontend Components',
      image: port,
      stack: ['Reactjs','HTML5','Tailwind css','javaScript','Bootstrap'],
      live: 'https://manikandan0018.github.io/trust/',
    },
    
  ].map((project) => (
   <div
  key={project.title}
  className="w-full bg-[#0f172a] mb-5 border border-green-700 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-55 object-cover border-b border-green-700"
      />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-green-400 mb-2">{project.title}</h3>
        <p className="text-green-200 mb-3">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-[#1e293b] text-green-300 text-sm px-2 py-1 rounded border border-green-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 text-black font-semibold px-4 py-2 rounded hover:bg-green-400 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M14 3h7v7m0 0L10 21l-7-7L17 3z"/>
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  ))}
</div>





      {/* Skills Section */}
      <FadeInOnScroll direction="up" scale={0.95} delay={0.7}>
     <section
  id="skills"
  className="px-6 py-20 max-w-6xl mx-auto text-center font-firacode"
>
  <h2 className="text-4xl font-bold text-green-500 mb-12 animate-pulse tracking-wider">
    Skills & Tools
  </h2>

  <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-green-300">
    {[
      'python',
      'JavaScript (ES6+)',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Bootstrap',
      'Figma',
      'HTML5',
      'Git',
      'GitHub',
      'Postman',
      'REST APIs',
      'Cloudinary',
      'Stripe',
      'Firebase',
      'Netlify',
      'Render',
      'CI/CD',
    ].map((skill, index) => (
      <div
        key={index}
        className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-green-600 hover:bg-green-700 hover:text-white transition duration-300 shadow shadow-green-500/20"
      >
        {skill}
      </div>
    ))}
  </div>
</section>
</FadeInOnScroll>


      {/* Experience Section */}
      <FadeInOnScroll direction="left" delay={0.8}>
     <section
  id="experience"
  className="px-6 py-20 max-w-6xl mx-auto font-firacode text-white"
>
  <h2 className="text-4xl font-bold text-green-500 mb-12 text-center tracking-wide animate-pulse">
    Experience
  </h2>

  <div className="relative bg-black/60 backdrop-blur-md border border-green-700 p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_#22c55e] transition-shadow duration-300 group">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h3 className="text-2xl font-semibold text-green-400 group-hover:text-green-300 transition">
        Frontend Web Development Intern
      </h3>
      <span className="text-sm text-green-200 opacity-80">
        Next24 Tech — <span className="italic">Jun–Aug 2024</span>
      </span>
    </div>

    <p className="mt-4 text-green-300 leading-relaxed tracking-wide">
      Built responsive UI components using <span className="text-green-400">React.js</span>, <span className="text-green-400">Tailwind CSS</span>, <span className="text-green-400">HTML5</span>, and <span className="text-green-400">JavaScript</span>. Focused on enhancing performance, accessibility, and reusability of web components for scalable product delivery.
    </p>
  </div>
</section>
</FadeInOnScroll>

    

      {/* Contact Section */}
      <FadeInOnScroll direction="right" rotate={-5} delay={0.2}>
<section
  id="contact"
  className="px-6 py-20 max-w-4xl mx-auto text-center font-firacode text-white"
>
  <h2 className="text-4xl font-bold text-green-500 mb-12 tracking-wide animate-pulse">
    Get in Touch
  </h2>

  <div className="bg-black/60 backdrop-blur-md border border-green-700 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_#22c55e] transition duration-300 space-y-6">
    
    {/* Email */}
    <p className="text-green-300 flex justify-center items-center gap-3">
      <FaEnvelope className="text-green-400" />
      <a
        href="mailto:manikandan110305@gmail.com"
        className="underline hover:text-green-500 transition"
      >
        manikandan110305@gmail.com
      </a>
    </p>

    {/* Phone */}
    <p className="text-green-300 flex justify-center items-center gap-3">
      <FaPhoneAlt className="text-green-400" />
      <span>+91 7826920882</span>
    </p>

    {/* Social Links */}
    <div className="flex justify-center gap-8 text-2xl mt-4">
      <a
        href="https://github.com/Manikandan0018"
        target="_blank"
        rel="noreferrer"
        className="text-green-400 hover:text-green-500 transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/manikandan110305/"
        target="_blank"
        rel="noreferrer"
        className="text-green-400 hover:text-green-500 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
</section>
</FadeInOnScroll>



      {/* Footer */}
        <footer className="bg-black/90 border-t text-center border-green-700 text-white font-firacode relative overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/10 via-transparent to-green-800/10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10">
        {/* CTA Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-green-500 animate-fade-up">
            Let's Build Something Great Together!
          </h3>
          <p className="text-green-300 leading-relaxed">
            B.Tech CSE student passionate about crafting robust MERN stack solutions.
            Open to full-time SDE opportunities & freelance MERN projects.
          </p>
          <div className="flex justify-center gap-5 mt-4 text-2xl text-green-400">
            <a
              href="https://github.com/Manikandan0018"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manikandan110305/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold text-green-400 mb-4">Quick Links</h4>
          <ul className="space-y-3 text-green-300">
            {['education', 'projects', 'experience', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-green-500 transition-all duration-300 hover:underline underline-offset-4"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info + CV */}
        <div>
          <h4 className="text-xl font-semibold text-green-400 mb-4">Personal Info</h4>
          <ul className="text-green-300 space-y-1">
            <li><span className="text-green-400">Name:</span> Manikandan R</li>
            <li><span className="text-green-400">Email:</span> manikandan110305@gmail.com</li>
            <li><span className="text-green-400">Phone:</span> +91 7826920882</li>
            <li><span className="text-green-400">City:</span> Chennai, India</li>
            <li><span className="text-green-400">Branch:</span> B.Tech - CSE</li>
          </ul>
          <a
            href="/Manikandan-Resume-2005.pdf"
            download
            className="inline-flex items-center gap-2 mt-5 text-green-300 hover:text-green-500 transition underline underline-offset-4"
          >
            <FaArrowDown /> Download Resume
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-green-700 text-sm border-t border-green-700 py-6 relative z-10">
        © {new Date().getFullYear()} Manikandan R • MERN Stack Developer • Built with React & Tailwind
      </div>
    </footer>
    </div>
      
   
   
  );
}
