import "../../index.css";

export default function About() {
  return (
    <div className="flex flex-row h-150 w-full p-15 gap-5" id="about">
      <div className="flex flex-col h-full w-1/2 gap-5 px-20">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-2xl text-justify leading-relaxed">
          I am currently a 4th year BSIT student at La Consolacion University
          Philippines. I am passionate about technology and love to explore new
          trends in the tech world. I like to solve problems and find a creative
          solution to them. I am interested in front-end development,
          automations, and self-hosting.
        </p>
      </div>
      <div className="flex flex-col h-full w-1/2 gap-5 px-20">
        <h2 className="text-4xl font-bold text-center">What I Do</h2>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-2xl font-semibold space-x-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://pbs.twimg.com/profile_images/1536335358803251202/-gASF0c6_400x400.png" />
              </div>
            </div>
            <strong>N8N</strong>: <i>a self-hosted workflow automation tool</i>
          </div>
          <div className="collapse-content text-xl">
            In my problem solving journey, I discovered N8N, a powerful workflow
            automation tool that allows me to automate tasks and integrate
            various services seamlessly. It has become an essential part of my
            toolkit.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-semibold space-x-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o" />
              </div>
            </div>
            <strong>Figma</strong>: <i>a collaborative interface design tool</i>
          </div>
          <div className="collapse-content text-xl">
            During our web development projects, I utilize Figma to create user
            interface designs and prototypes. Its collaborative features allow
            me to work seamlessly with team members and gather feedback
            efficiently.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-semibold space-x-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://yt3.googleusercontent.com/vr50ZXiY9tM1xNgVT2cLt0sGSdL_xuvVYA0fPtzpB9-LNE32KN7bvq75Uwcz70xO-3S6Ts4zIQ=s900-c-k-c0x00ffffff-no-rj" />
              </div>
            </div>
            <strong>Self-hosting</strong>:{" "}
            <i>lots of amazing tech tools for free</i>
          </div>
          <div className="collapse-content text-xl">
            Self-hosting allows me to take control of my applications and data.
            I can run various services on my own server, giving me the freedom
            to customize and optimize my setup. It's a great way to learn and
            experiment with new technologies. I use docker desktop to self-host
            my applications and services.
          </div>
        </div>
      </div>
    </div>
  );
}
