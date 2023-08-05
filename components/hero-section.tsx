import Link from "next/link";
import { Button } from "./ui/button";
import NavigationButton from "./ui/navigation-button";

export default function Hero() {
  return (
    <>
      <div>
        <h1 className="text-6xl font-bold uppercase tracking-wide text-center mx-4">
          Hey, I&apos;m Dario
        </h1>
      </div>

      <div className="mt-8 mb-16">
        <p className="text-xl md:text-2xl text-center text-cyan-700 dark:text-cyan-600 mx-4">
          A passionate full-stack developer, crafting digital experiences
        </p>
      </div>

      <NavigationButton
        title="Projects"
        scrollTo="projects"
        className="uppercase py-7 px-16 text-lg bg-softblue hover:bg-softblue hover:opacity-90 hover:-translate-y-2 motion-safe:hover:scale-105"
      />
    </>
  );
}
