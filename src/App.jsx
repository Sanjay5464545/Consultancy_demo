import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Video, FileText, ArrowUpRight, Zap, Star, Menu, X } from 'lucide-react';

// --- RICH COMPONENT 1: INFINITE LOGO MARQUEE ---
const LogoMarquee = () => {
  const logos = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  ];

  return (
    <div className="w-full bg-white border-y border-gray-200 py-10 overflow-hidden">
      <div className="flex w-[200%] animate-scroll hover:pause">
        <div className="flex w-1/2 justify-around items-center px-10 gap-16">
          {logos.map((logo, index) => (
            <img key={index} src={logo.url} alt={logo.name} className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer" />
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center px-10 gap-16">
          {logos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo.url} alt={logo.name} className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- RICH COMPONENT 2: SERVICES CARD ---
const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative p-8 md:p-10 border border-gray-200 bg-white hover:bg-black transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden rounded-xl md:rounded-none">
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-blue-50 group-hover:bg-gray-800 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
        <Icon size={32} className="text-blue-700 group-hover:text-blue-400 transition-colors" />
      </div>
      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-black group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors">
        {desc}
      </p>
    </div>
  </div>
);

// --- COMPONENT: CARD STACKING (Process) ---
const CardStack = () => {
  return (
    <div className="relative w-full py-20 md:py-32 px-6 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">The Process</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold mt-4">YOUR PATH <br/> TO HIRED.</h2>
        </div>
        
        <div className="space-y-12 md:space-y-24">
          
          {/* Card 01 - Hover Glows Blue */}
          <div className="sticky top-24 md:top-32 bg-neutral-900 border border-neutral-800 p-6 md:p-12 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] group z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="text-6xl md:text-8xl font-display font-bold text-neutral-800 group-hover:text-blue-900 transition-colors duration-500">01</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 group-hover:text-blue-400 transition-colors">The Deep Audit</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed group-hover:text-gray-300">
                  We don't guess. We tear down your Resume, GitHub, and LinkedIn to fix the foundation first.
                </p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-blue-900 to-black rounded-xl border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-500">
                <FileText size={48} className="text-white md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Card 02 - Hover Glows White */}
          <div className="sticky top-28 md:top-36 bg-blue-900 border border-blue-700 p-6 md:p-12 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] group z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="text-6xl md:text-8xl font-display font-bold text-blue-800 group-hover:text-blue-950 transition-colors duration-500">02</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">The Grind Phase</h3>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  4 weeks of intense 1:1 prep. Data Structures, System Design, and Behavioral rounds.
                </p>
              </div>
              <div className="h-48 md:h-64 bg-black/20 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
                <Zap size={48} className="text-white md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Card 03 - Hover High Contrast */}
          <div className="sticky top-32 md:top-40 bg-white text-black border border-gray-200 p-6 md:p-12 rounded-3xl shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] group z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="text-6xl md:text-8xl font-display font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-500">03</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6 group-hover:text-blue-700 transition-colors">The Launch</h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We rewrite your LinkedIn, apply via internal referrals, and negotiate your salary.
                </p>
              </div>
              <div className="h-48 md:h-64 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors duration-500">
                <CheckCircle size={48} className="text-black md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold font-display tracking-tighter z-50 relative">
            CAREER<span className="text-blue-700">EDGE.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Services</a>
            <a href="#" className="hover:text-black transition-colors">Process</a>
            <a href="#" className="hover:text-black transition-colors">Stories</a>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2 text-xs font-bold uppercase hover:bg-gray-800 transition-all">
            Book Call <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl font-display font-bold z-40"
              >
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Stories</a>
                <button className="bg-blue-700 text-white px-8 py-3 text-sm font-sans uppercase tracking-widest mt-4">
                  Book Call
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-28 pb-12 md:pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Accepting New Batch</span>
            </div>
            <h1 className="text-5xl md:text-9xl font-display font-extrabold leading-[0.9] mb-6 md:mb-8 tracking-tighter text-black">
              CRACK <br/> THE <br/> <span className="text-blue-700">CODE.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed mb-8 md:mb-10 border-l-4 border-black pl-6">
              Master the interview. Get placed at top product companies. <br/> <strong>No fluff. Just results.</strong>
            </p>
            <button className="bg-blue-700 text-white px-8 md:px-10 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto">
              Start Your Prep
            </button>
          </motion.div>
          <div className="relative h-[400px] md:h-[600px] w-full order-1 lg:order-2">
            <motion.div style={{ y: yHero }} className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 border border-gray-200 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <LogoMarquee />

      {/* SERVICES */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
             <h2 className="text-4xl md:text-5xl font-display font-bold">OUR EXPERTISE.</h2>
             <div className="h-1 w-20 bg-blue-700 mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard icon={FileText} title="Resume Fix" desc="We rebuild your resume to bypass ATS filters and grab attention instantly." />
            <ServiceCard icon={Video} title="Mock Rounds" desc="Live coding rounds with SDE-IIs from FAANG. Real pressure, real feedback." />
            <ServiceCard icon={ArrowUpRight} title="Referrals" desc="Our alumni network is vast. We push your profile directly to hiring managers." />
          </div>
        </div>
      </section>

      {/* STACK PROCESS */}
      <CardStack />

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-gray-50 p-8 md:p-24 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
               <div className="flex gap-1 text-orange-500 mb-6"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div>
               <h2 className="text-3xl md:text-6xl font-display font-bold leading-tight mb-6 md:mb-8">"Doubled my package."</h2>
               <p className="text-lg md:text-xl text-gray-600 mb-8">"I was stuck at a service-based company. CareerEdge gave me the roadmap to crack Amazon."</p>
               <div><p className="font-bold text-lg">Rahul Verma</p><p className="text-gray-500">SDE-II @ Amazon</p></div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-blue-700 rounded-2xl rotate-6 transform"></div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl h-[300px] md:h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-20 md:pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div><h2 className="text-[15vw] md:text-[12vw] leading-none font-display font-bold tracking-tighter mb-4 md:mb-8">CAREER<br/>EDGE.</h2></div>
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <button className="bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto">Book Consultation</button>
            <p className="text-gray-500 text-sm uppercase tracking-widest">&copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;