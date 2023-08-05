"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import Nav from "./nav-bar";

// Component that waits for the client to hydrate before rendering
export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body className="font-oswald">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      ) : (
        <body></body>
      )}
    </>
  );
}
