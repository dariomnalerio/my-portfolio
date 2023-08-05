"use client";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import picture from "@/public/assets/me.webp";
import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
export default function Nav() {
  const router = useRouter();
  const LINKEDIN_URL = "https://www.linkedin.com/in/darionalerio/";
  const GITHUB_URL = "https://github.com/dariomnalerio";

  const handleLocation = (id: string) => {
    if (id === "home") {
      router.push("/");
    } else if (id === "about") {
      window.location.replace("/#about");
    } else if (id === "projects") {
      window.location.replace("/#projects");
    } else if (id === "contact") {
      window.location.replace("/#contact");
    } else {
      return;
    }
  };

  return (
    <nav className="bg-secondary h-20 flex items-center justify-between z-[999] sticky top-0 border-b-2 px-16 md:px-32 lg:px-44 xl:px-64">
      {/* Home anchor */}
      <div
        className="cursor-pointer hover:text-softblue"
        onClick={(e) => {
          e.preventDefault();
          handleLocation("home");
        }}
      >
        <div className="flex items-center gap-3">
          <Image src={picture} alt="My picture" className="h-14 w-14" />
          <p className="uppercase font-semibold text-lg hidden md:block">
            Dario Nalerio
          </p>
        </div>
      </div>

      {/* Links md+*/}
      <div className="hidden md:flex gap-4 lg:gap-10 xl:gap-12 uppercase font-medium">
        <div
          className="cursor-pointer hover:text-softblue hover:border-b-2 hover:border-softblue"
          onClick={(e) => {
            e.preventDefault();
            handleLocation("about");
          }}
        >
          About
        </div>
        <div
          className="cursor-pointer hover:text-softblue hover:border-b-2 hover:border-softblue"
          onClick={(e) => {
            e.preventDefault();
            handleLocation("projects");
          }}
        >
          Projects
        </div>
        <div
          className="cursor-pointer hover:text-softblue hover:border-b-2 hover:border-softblue"
          onClick={(e) => {
            e.preventDefault();
            handleLocation("contact");
          }}
        >
          Contact
        </div>

        {/* Social media icons & theme switch */}
        <div className="flex gap-3 mt-1">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            className="hover:opacity-80"
          >
            <BsLinkedin />
          </Link>
          <Link href={GITHUB_URL} target="_blank" className="hover:opacity-80">
            <BsGithub />
          </Link>

          <ModeToggle />
        </div>
      </div>
      {/* Links sm */}

      <div className="md:hidden flex gap-3 items-center">
        {/* Social media icons & theme switch */}
        <div className="flex gap-3 mt-1">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            className="hover:opacity-80"
          >
            <BsLinkedin />
          </Link>
          <Link href={GITHUB_URL} target="_blank" className="hover:opacity-80">
            <BsGithub />
          </Link>

          <ModeToggle />
        </div>
        {/* Hamburger menu */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-4 w-4">
              <AiOutlineMenu className="w-4 h-4 hover:opacity-50 mt-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="z-[999] bg-secondary border shadow-lg w-32 p-3"
          >
            <DropdownMenuItem className="text-[14px] pb-1 hover:text-softblue">
              About
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-[14px] pb-1 hover:text-softblue">
              Projects
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-[14px] pb-1 hover:text-softblue">
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
