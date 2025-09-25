import "../../index.css";
import assistant from "../../assets/assistant.png";
import plane from "../../assets/plane.png";
import safeHub from "../../assets/safeHub.png";
import gmailAuto from "../../assets/gmailAuto.png";
import projectsData from "./envProjects.json";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <div
      className="flex flex-col h-full w-full p-15 bg-base-200 gap-20"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="grid  grid-cols-1 md:grid-cols-4 gap-10 place-items-center items-stretch">
        {cards(projectsData.card0.title, projectsData.card0.content, assistant)}

        {cards(projectsData.card1.title, projectsData.card1.content, plane)}

        {cards(projectsData.card2.title, projectsData.card2.content, safeHub)}

        {cards(projectsData.card3.title, projectsData.card3.content, gmailAuto)}
      </div>
    </div>
  );
}

function cards(title: string, content: string, imgSrc: string) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      whileHover={{ scale: 1.1 }}
      layout // This is the key
    >
      <div className="card bg-base-100 h-full w-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="rounded-tl-2xl rounded-tr-2xl h-1/3 items-stretch overflow-hidden">
          <img src={imgSrc} className="w-full h-full object-cover" />
        </div>
        <div className="card-body gap-5">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="text-lg">{content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-lg font-semibold">
              More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
