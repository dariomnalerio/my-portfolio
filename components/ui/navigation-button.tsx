"use client";
import Link from "next/link";
import { Button } from "./button";

export default function NavigationButton({title, scrollTo, className} : {title: string, scrollTo: string, className?: string }) {
  const handleLocation = (scrollTo: string) => {
    window.location.replace(`/#${scrollTo}`);
  };

  return (
    <div>
      <Button
        className={className}
        onClick={() => handleLocation(scrollTo)}
      >
        {title}
      </Button>
    </div>
  );
}
