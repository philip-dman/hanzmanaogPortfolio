import "../../index.css";
import aboutData from './envAbout.json';

export default function About() {
  return (
    <div className="flex flex-row h-150 w-full p-15 gap-5" id="about">
      <div className="flex flex-col h-full w-1/2 gap-5 px-20">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-2xl text-justify leading-relaxed">
          {aboutData.aboutCard.content}
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
            <strong>{aboutData.accordCard0.title}</strong>: <i>{aboutData.accordCard0.subtitle}</i>
          </div>
          <div className="collapse-content text-xl">
            {aboutData.accordCard0.content}
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
            <strong>{aboutData.accordCard1.title}</strong>: <i>{aboutData.accordCard1.subtitle}</i>
          </div>
          <div className="collapse-content text-xl">
            {aboutData.accordCard1.content}
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
            <strong>{aboutData.accordCard2.title}</strong>:{" "}
            <i>{aboutData.accordCard2.subtitle}</i>
          </div>
          <div className="collapse-content text-xl">
            {aboutData.accordCard2.content}
          </div>
        </div>
      </div>
    </div>
  );
}
