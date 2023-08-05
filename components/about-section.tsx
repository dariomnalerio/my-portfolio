import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import NavigationButton from "./ui/navigation-button";

export default function About() {
  const skills = [
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "SQL",
    "React",
    "NextJS",
    "Python",
    "Linux",
    "NodeJS",
    "ExpressJS",
    "C",
  ];

  return (
    <>
      {/* About me title */}
      <div className="flex justify-center mt-20">
        <div className="flex flex-col">
          <h2 className="text-4xl uppercase font-bold dark:text-slate-100 tracking-widest">About me</h2>
          <div className="border-b-4 border-b-softblue rounded-md w-8 mt-8 self-center"></div>
        </div>
      </div>

      {/* About me content */}
      <div className="mt-28 flex flex-col xl:flex-row justify-center  mx-16 md:mx-32 lg:mx-44 xl:mx-64 gap-24">
        {/* About me content - description */}
        <div className=" w-full">
          <h3 className="text-2xl font-bold dark:text-slate-100">Nice to meet you!</h3>
          <div className="my-8 flex flex-col gap-4 text-slate-600 dark:text-slate-300 font-medium">
            <p>
              I&apos;m a software developer from Uruguay, experienced in working in
              projects on both the front-end and back-end side of{" "}
              <span className="font-bold text-slate-700 dark:text-softblue">
                web applications
              </span>
              , as well as some lower level projects, such as a C command line
              interpreter.
            </p>
            <p>
              I am passionate about{" "}
              <span className="font-bold text-slate-700 dark:text-softblue">
                problem solving
              </span>{" "}
              and enjoy creating{" "}
              <span className="font-bold text-slate-700 dark:text-softblue">
                efficient
              </span>{" "}
              and user-friendly solutions. Continuous learning is at the core of
              my professional journey, and I am always on the lookout for
              opportunities where I can contribute my expertise, learn, and grow
              as a developer.
            </p>
            <p>
              I&apos;m actively seeking new{" "}
              <span className="font-bold text-slate-700 dark:text-softblue">
                job
              </span>{" "}
              opportunities that align with my skills. Feel free to reach out to
              me if you have an exciting opportunity that matches my background
            </p>
          </div>

          <NavigationButton title="Contact" scrollTo="contact" className="uppercase px-12 bg-softblue hover:bg-softblue hover:opacity-90 text-secondary hover:-translate-y-0.5" />
       
        </div>

        {/* About me content - skills */}
        <div className=" w-full ">
          <h3 className="text-2xl font-bold dark:text-slate-100">Skills</h3>

          <div className="mt-8 flex flex-wrap  gap-5 uppercase">
            {skills.map((skill, index) => (
              <Badge className="max-w-fit rounded-2xl px-5 py-1.5 bg-cyan-800 dark:bg-cyan-600 hover:bg-cyan-900 hover:opacity-90  font-medium" key={index}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
