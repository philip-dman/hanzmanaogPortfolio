import "../../index.css";
import aboutData from "./envAbout.json";
let n8nIcon =
  "https://pbs.twimg.com/profile_images/1536335358803251202/-gASF0c6_400x400.png";
let figmaIcon =
  "https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o";
let dockerIcon =
  "https://yt3.googleusercontent.com/vr50ZXiY9tM1xNgVT2cLt0sGSdL_xuvVYA0fPtzpB9-LNE32KN7bvq75Uwcz70xO-3S6Ts4zIQ=s900-c-k-c0x00ffffff-no-rj";

export default function About() {
  return (
    <div className="flex  flex-col md:flex-row h-hug w-full p-15 gap-5" id="about">
      <div className="flex flex-col h-full w-full md:w-1/2 gap-5 px-10">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-2xl text-justify leading-relaxed">
          {aboutData.aboutCard.content}
        </p>
      </div>
      <div className="flex flex-col h-full w-full md:w-1/2 gap-5 px-10">
        <h2 className="text-4xl font-bold text-center">What I Do</h2>
        {accordionCard(
          aboutData.accordCard0.title,
          n8nIcon,
          aboutData.accordCard0.subtitle,
          aboutData.accordCard0.content
        )}

        {accordionCard(
          aboutData.accordCard1.title,
          figmaIcon,
          aboutData.accordCard1.subtitle,
          aboutData.accordCard1.content
        )}

        {accordionCard(
          aboutData.accordCard2.title,
          dockerIcon,
          aboutData.accordCard2.subtitle,
          aboutData.accordCard2.content
        )}
      </div>
    </div>
  );
}

function accordionCard(
  title: string,
  icon: string,
  subtitle: string,
  content: string
) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-2xl font-semibold space-x-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={icon} />
          </div>
        </div>
        <strong>{title}</strong>: <i>{subtitle}</i>
      </div>
      <div className="collapse-content text-xl">{content}</div>
    </div>
  );
}
