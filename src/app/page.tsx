import CustomCursor from '@/components/CustomCursor'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden transition-colors duration-300">
      <CustomCursor />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-[5%] py-6 z-50 backdrop-blur-md border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-dark/80 transition-colors duration-300">
        <div className="font-display font-extrabold text-2xl tracking-widest cursor-none">
          TRISS<span className="font-light text-primary">MCALLEN</span>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#services" className="text-sm font-medium hover:text-primary transition-colors cursor-none text-dark dark:text-white">Services</a></li>
            <li><a href="#work" className="text-sm font-medium hover:text-primary transition-colors cursor-none text-dark dark:text-white">Work</a></li>
            <li><a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary font-display font-semibold hover:bg-primary hover:text-dark transition-all cursor-none dark:hover:text-dark">Contact Us</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-[5%] relative pt-24 pb-12">
        <div className="w-full flex flex-col md:flex-row items-center justify-center z-10 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl text-center md:text-left mt-10 md:mt-0">
            <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-6 leading-tight">
              WEB &<br />
              GRAPHIC<br />
              <span className="text-primary relative inline-block">DESIGN.</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 cursor-none transition-colors duration-300">
              Need a website you can trust to grow your business? Contact us today—we're ready to design and build something amazing for you.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-dark font-display font-semibold hover:bg-[#d4e840] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(230,250,97,0.2)] transition-all cursor-none">Get Started</a>
              <a href="#services" className="px-6 py-3 rounded-full bg-secondary text-dark font-display font-semibold hover:bg-[#fa8f4b] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,158,94,0.2)] transition-all cursor-none">Explore Work</a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg relative mt-16 md:mt-0">
            <div className="relative transform transition-transform duration-700 hover:scale-105 group perspective-1000">
              <img 
                src="/hero.jpg" 
                alt="Web and Graphic Design Hero" 
                className="w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Hero Background Illustrations based on user reference */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-30">
          {/* Top Right Orange Block */}
          <div className="absolute top-0 right-[5%] w-32 md:w-48 h-64 bg-secondary"></div>
          
          {/* Bottom Left Orange Quarter Circle */}
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-secondary/80 rounded-tr-[100%]"></div>
          
          {/* Bottom Right Dark Quarter Circle */}
          <div className="absolute bottom-[-5%] right-[10%] w-48 h-48 bg-dark rounded-tl-[100%] dark:bg-white/10"></div>
          
          {/* X Square Circle Pattern Top Right */}
          <div className="absolute top-[20%] right-[10%] flex flex-col gap-4 text-dark dark:text-white/50 w-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10"/></svg>
          </div>

          {/* Zig Zag Lines Right */}
          <svg className="absolute top-[40%] right-[2%] w-32 h-24 text-dark dark:text-white/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M0,20 Q10,0 20,20 T40,20 T60,20 T80,20" />
            <path d="M0,40 Q10,20 20,40 T40,40 T60,40 T80,40" />
            <path d="M0,60 Q10,40 20,60 T40,60 T60,60 T80,60" />
          </svg>

          {/* Semicircles Top Middle */}
          <svg className="absolute top-[10%] left-[55%] w-24 h-48 text-dark dark:text-white/30" viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M0,25 A25,25 0 0 1 0,75" />
            <path d="M25,0 A25,25 0 0 0 25,50" />
          </svg>

          {/* Semi-circles Bottom Left */}
          <svg className="absolute top-[45%] left-[-2%] w-24 h-32 text-dark dark:text-white/30" viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M60,20 A40,40 0 0 0 60,100" />
            <path d="M60,40 A20,20 0 0 0 60,80" />
            <path d="M60,0 A60,60 0 0 0 60,120" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-[5%] bg-dark dark:bg-gray-50 text-white dark:text-dark transition-colors duration-300 overflow-hidden relative">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* TOP — Full-width Headline + Stats + CTA */}
          <div className="mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4 cursor-none">What I Offer</p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
              <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-tight cursor-none">
                Trusted &amp; <span className="text-primary">Professional</span> Services
              </h2>
              <p className="text-gray-400 dark:text-gray-600 text-lg max-w-sm cursor-none md:text-right">
                From bold graphic design to high-performance websites — I deliver work that makes your brand stand out and convert.
              </p>
            </div>

            {/* Stats + CTA Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 pt-10 border-t border-white/10 dark:border-black/10">
              <div className="flex gap-12">
                {[
                  { value: "50+", label: "Projects Done" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "3+",  label: "Years Exp." },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-primary pl-4">
                    <p className="font-display font-extrabold text-4xl text-white dark:text-dark cursor-none">{stat.value}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm cursor-none">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-dark font-display font-bold hover:bg-[#d4e840] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(230,250,97,0.25)] transition-all cursor-none">
                Let's Work Together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* BOTTOM — Full-width 3-column Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>,
                title: "Website Design",
                desc: "Modern, responsive, and performance-optimized websites built to elevate your digital presence and drive real results.",
                tag: "Next.js · React · Tailwind"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
                title: "Graphic Design",
                desc: "Custom graphics, flyers, branding, and visual assets crafted to resonate with your audience and strengthen your identity.",
                tag: "Flyers · Social Media · Branding"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a3 3 0 0 0-6 0v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>,
                title: "Brand Strategy",
                desc: "Comprehensive branding strategies to position your business for growth, credibility and long-term success.",
                tag: "Identity · Strategy · Launch"
              }
            ].map((service, i) => (
              <div key={i} className="group flex flex-col gap-6 p-8 rounded-3xl border border-white/10 dark:border-black/5 bg-white/5 dark:bg-white hover:border-primary dark:hover:border-primary hover:bg-white/10 dark:hover:bg-gray-50 transition-all duration-300 cursor-none">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors cursor-none">{service.title}</h3>
                  <p className="text-gray-400 dark:text-gray-600 leading-relaxed mb-4 cursor-none">{service.desc}</p>
                  <span className="text-xs text-primary/70 font-mono">{service.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio / Explore Work Section */}
      <section id="work" className="py-32 px-[5%] bg-white dark:bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl cursor-none mb-4 text-dark dark:text-white transition-colors">Explore Graphic Work</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl cursor-none transition-colors">
                A selection of high-quality, conversion-focused graphic design projects ranging from social media flyers to brand identity.
              </p>
            </div>
            <a href="#contact" className="hidden md:inline-flex px-6 py-3 rounded-full border border-dark dark:border-white text-dark dark:text-white font-display font-semibold hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all cursor-none">
              Start Your Project
            </a>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {[
              { src: "/portfolio/challenge.jpeg", title: "Design 1.0 Challenge", alt: "Modern tech UI challenge poster" },
              { src: "/portfolio/usa.jpeg", title: "Study in UK Flyer", alt: "Education study abroad flyer" },
              { src: "/portfolio/kitchen.jpeg", title: "Feast Kitchen Menu Layout", alt: "Vibrant food menu design" },
              { src: "/portfolio/websiteads.jpg", title: "Website Agency Ad", alt: "Orange modern geometric agency ad" },
              { src: "/portfolio/laundry.jpeg", title: "Fresh Laundromat Social Post", alt: "Blue professional laundry service ad" },
              { src: "/portfolio/design.jpeg", title: "Custom Graphic Design Ad", alt: "Black and yellow modern ad" },
            ].map((item, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden mb-6 break-inside-avoid bg-gray-100 dark:bg-dark border border-black/5 dark:border-white/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white font-display text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Portfolio Section */}
      <section id="web-work" className="py-32 px-[5%] bg-gray-50 dark:bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl cursor-none mb-4 text-dark dark:text-white transition-colors">Explore Website Work</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl cursor-none transition-colors">
                High-performance, beautifully crafted websites built to drive conversions and elevate your brand's digital experience.
              </p>
            </div>
            <a href="#contact" className="hidden md:inline-flex px-6 py-3 rounded-full border border-dark dark:border-white text-dark dark:text-white font-display font-semibold hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all cursor-none">
              Start Your Project
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                src: "/portfolio/assessly.png", 
                title: "Assessly CBT Platform", 
                alt: "Assessly Exam Platform Frontend",
                link: "https://assessly-one.vercel.app/landing"
              },
              { 
                src: "/portfolio/kingsmeal.png", 
                title: "Kings Meal Restaurant", 
                alt: "Kings Meal Premium Restaurant App",
                link: "https://kingsmeal.netlify.app/"
              },
              { 
                src: "/portfolio/piggyvest.png", 
                title: "Piggyvest Clone Dashboard", 
                alt: "Piggyvest financial dashboard mock",
                link: "https://piggyvest-bella.netlify.app/"
              }
            ].map((item, index) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="group relative rounded-3xl overflow-hidden aspect-video bg-gray-100 dark:bg-dark border border-black/5 dark:border-white/10 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white font-display text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-[5%] relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark dark:to-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4 cursor-none">Ready to Start?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 cursor-none transition-colors">Let's build something amazing together.</p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-primary text-2xl transition-colors">
                  📞
                </div>
                <div>
                  <strong className="block text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 cursor-none transition-colors">Phone</strong>
                  <a href="tel:6316253327" className="text-xl font-semibold hover:text-primary transition-colors cursor-none">631-625-3327</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-primary text-2xl transition-colors">
                  ✉️
                </div>
                <div>
                  <strong className="block text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 cursor-none transition-colors">Mail</strong>
                  <a href="mailto:Trissmcallen@gmail.com" className="text-xl font-semibold hover:text-primary transition-colors cursor-none">Trissmcallen@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl dark:shadow-none transition-colors">
            <div className="mb-6">
              <input type="text" required placeholder="Your Name" className="w-full px-6 py-4 bg-white/80 dark:bg-transparent border border-black/10 dark:border-white/10 rounded-xl focus:border-primary outline-none transition-colors cursor-none text-dark dark:text-white" />
            </div>
            <div className="mb-6">
              <input type="email" required placeholder="Your Email" className="w-full px-6 py-4 bg-white/80 dark:bg-transparent border border-black/10 dark:border-white/10 rounded-xl focus:border-primary outline-none transition-colors cursor-none text-dark dark:text-white" />
            </div>
            <div className="mb-6">
              <textarea rows={5} required placeholder="Your Message" className="w-full px-6 py-4 bg-white/80 dark:bg-transparent border border-black/10 dark:border-white/10 rounded-xl focus:border-primary outline-none transition-colors resize-none cursor-none text-dark dark:text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-dark font-display font-semibold text-lg hover:bg-[#d4e840] transition-colors cursor-none">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-[5%] border-t border-black/10 dark:border-white/10 bg-white dark:bg-dark transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 cursor-none">
          <div className="font-display font-extrabold text-xl tracking-widest">
            TRISS<span className="font-light text-primary">MCALLEN</span>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2026 Triss McAllen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors cursor-none">Fiverr</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors cursor-none">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors cursor-none">Dribbble</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
