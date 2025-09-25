import "../../index.css";
import profIcon from "../../assets/profIcon.jpg";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import techBgDark from "../../assets/techBgDark.mp4";
import techBgWhite from "../../assets/techBgWhite.mp4";
import { useEffect, useState } from "react";


export default function Hero() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // DaisyUI sets data-theme on html element
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    setTheme(document.documentElement.getAttribute("data-theme"));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Use techBgWhite for lofiMod (light theme), otherwise use techBgDark (default or lofiModInverse)
  const videoSrc = theme === "lofiMod" ? techBgWhite : techBgDark;
  console.log("Current theme:", theme, "Video src:", videoSrc);

  return (
    <div className="hero h-200 w-screen" id="home">
      <video
        key={theme} // Force remount on theme change
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content flex-row gap-10 px-10 w-screen">
        <div className="flex-col w-screen space-y-5">
          <div>
            <h1 className="text-5xl font-bold">Hi 👋</h1>
          </div>
          <div>
            <h1 className="text-5xl font-regular">I'm Hanz Manaog</h1>
          </div>
          <div>
            <h1 className="text-6xl font-bold">Tech Enthusiast</h1>
          </div>

          <div className="avatar flex-row gap-10">
            <FaGithub
              className="w-10 h-10"
              onClick={() =>
                window.open("https://github.com/philip-dman?tab=overview")
              }
            />
            <FaFacebook
              className="w-10 h-10"
              onClick={() =>
                window.open("https://www.facebook.com/hanz.philip.manaog.2024/")
              }
            />
            <MdEmail
              className="w-10 h-10"
              onClick={() =>
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <FaLinkedin className="w-10 h-10" />
          </div>

          <div>
            <button
              className="btn btn-primary h-15 w-40 text-xl font-bold"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Show more
            </button>
          </div>
        </div>

        <img
          src={profIcon}
          className="w-100 h-100 rounded-full object-cover shadow-2xl hidden md:block"
        />
      </div>
    </div>
  );
}

export function heroDivider() {
  return <div className="divider divider-primary"></div>;
}

import { TbBrandReact } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";
import { SiN8N } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export function Banner() {
  // List of icons to render
  const icons = [
    <SiN8N key="n8n" className="h-10 w-10" />,
    <TbBrandReact key="react" className="h-10 w-10" />,
    <FaHtml5 key="html" className="h-10 w-10" />,
    <FaCss3Alt key="css" className="h-10 w-10" />,
    <RiJavascriptFill key="js" className="h-10 w-10" />,
    <LuFigma key="figma" className="h-10 w-10" />,
    <FaGithub key="github" className="h-10 w-10" />,
    <FaDocker key="docker" className="h-10 w-10" />,
    <FaJava key="java" className="h-10 w-10" />,
    <FaPython key="python" className="h-10 w-10" />,
  ];
  return (
    <div className="overflow-hidden w-full bg-base-200 px-10 py-5">
      <div className="flex min-w-max gap-16 justify-between animate-banner-scroll">
        {icons.concat(icons.concat(icons.concat(icons)))}
      </div>
    </div>
  );
}
