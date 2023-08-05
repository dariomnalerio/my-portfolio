import { ProjectProps } from "@/lib/types";
import Project from "./project";

const projects: ProjectProps[] = [
  {
    title: "Smart ABA",
    description:
      "An app that seamlessly integrates advanced technology, intelligent automation, and powerful data insights to empower therapists in the education of children with special learning needs.",
    image:
      "https://res.cloudinary.com/dhkyj5k4o/image/upload/v1690586358/Presentation-page/smart-aba-dashboard_zqcy8v.webp",
    github: "unavailable",
    skills: [
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
  },
  {
    title: "Next-ecommerce",
    description:
      "An easy-to-use Next.js ecommerce app selling vinyl records, complete with authentication, product listings, a shopping cart, checkout, order tracking, and secure payment processing. Enjoy a seamless shopping experience for music enthusiasts.",
    image:
      "https://res.cloudinary.com/dhkyj5k4o/image/upload/v1690586633/Presentation-page/next-ecommerce_g9uciu.webp",
    github: "https://github.com/dariomnalerio/next-ecommerce",
    demo: "https://next-ecommerce-dariomnalerio.vercel.app/",
    skills: [
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "PostgreSQL",
      "Stripe",
      "Prisma ORM",
    ],
  },
  {
    title: "Simple Shell",
    description:
      "I developed a sh-compatible command language interpreter that executes commands from various sources, such as command line input, standard input, or specified files. It was a significant project that taught me essential programming concepts and teamwork dynamics within a randomly assigned group.",
    image:
      "https://res.cloudinary.com/dhkyj5k4o/image/upload/v1691264248/Presentation-page/WindowsTerminal_714NcjJBuE_1_kzkvls.webp",
    github: "https://github.com/dariomnalerio/holbertonschool-simple_shell",
    skills: ["C", "Linux"],
  },
];

export default function Projects() {
  return (
    <>
      {/* Projects title */}
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h2 className="text-4xl uppercase font-bold tracking-widest">
            Projects
          </h2>
          <div className="border-b-4 border-b-softblue rounded-md w-8 mt-8 self-center"></div>
        </div>
      </div>

      {/* Projects content */}
      {projects.map((project, index) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          github={project.github}
          demo={project.demo}
          skills={project.skills}
          key={index}
        />
      ))}
    </>
  );
}
