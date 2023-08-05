import About from "@/components/about-section";
import Contact from "@/components/contact-section";
import Hero from "@/components/hero-section";
import Projects from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <section className="dark:bg-[#030C21] h-[850px] flex flex-col items-center justify-center py-10">
        <Hero />
      </section>
      <section id="about" className="bg-secondary dark:bg-secondary py-2 md:py-20 lg:py-28">
        <About />
      </section>
      <section id="projects" className="bg-secondary dark:bg-secondary py-10 md:py-20 lg:py-28">
        <Projects />
      </section>
      <section id="contact" className=" dark:bg-[#030C21] md:bg-primary pt-12 pb-12 md:py-20 lg:py-28">
        <Contact />
      </section>
    </>
  );
}
