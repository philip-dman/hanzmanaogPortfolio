import "../../index.css";
import profIcon from "../../assets/profIcon.jpg";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import techBg from "../../assets/tech bw bg.mp4";

export default function Hero() {
  return (
    <div className="hero h-200 w-screen" id="home">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={techBg}
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

export function Banner() {
  return (
    <div className="avatar flex-row bg-base-300 px-10 py-5 gap-10">
      <div className="flex-1 flex-row w-5 rounded-full">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        Hello
      </div>
      <div className="flex-1">World</div>
    </div>
  );
}
