import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { Badge } from "./ui/badge";

export default function Project(props: ProjectProps) {
  return (
    <>
      {/* Projects content */}
      <div
        className="mt-28 flex flex-col xl:flex-row justify-center mx-16 md:mx-32 lg:mx-44 xl:mx-64 gap-10 lg:gap-16"
        key={props.title}
      >
        {/* Projects picture */}
        <div className="w-full max-w-[750px]">
          <div className="aspect-w-16 aspect-h-9  ">
            <img
              src={props.image}
              alt="Project picture"
              className="object-cover hover:scale-105 border-2 border-cyan-800 dark:border-cyan-600 rounded-sm"
            />
          </div>
        </div>

        {/* Projects description */}
        <div className="w-full h-auto">
          <h3 className="text-2xl font-bold ">{props.title}</h3>
          <div className="my-8 flex flex-col gap-4 text-slate-600 dark:text-slate-300 font-medium">
            <p>{props.description}</p>
            {props.github === "unavailable" && (
              <p>
                Cannot provide the Github link as the code belongs to a
                business. However, if you&apos;re interested in learning more
                about the project or discussing potential collaboration
                opportunities, please feel free to reach out.
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-5 uppercase mb-8">
            {props.skills.map((skill, index) => (
              <Badge
                className="max-w-fit rounded-2xl px-5 py-1.5 bg-cyan-800 hover:bg-cyan-900 hover:opacity-90 dark:bg-cyan-600 font-medium"
                key={index}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {props.github !== "unavailable" && (
            <Button
              asChild
              className="uppercase bg-softblue hover:bg-softblue hover:opacity-90 hover:-translate-y-0.5"
            >
              <Link href={props.github ? props.github : "#"} target="_blank">
                <BsGithub />
                <span className="ml-1">Github</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
