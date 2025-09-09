import "../../index.css";
import assistant from "../../assets/assistant.png";
import plane from "../../assets/plane.png";
import safeHub from "../../assets/safeHub.png";
import gmailAuto from "../../assets/gmailAuto.png";

export default function Projects() {
  return (
    <div className="flex flex-col h-full w-full p-15 bg-base-200 gap-20" id="projects">
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="grid grid-cols-4 gap-5 place-items-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={assistant}
              alt="AI Assistant"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title text-xl font-bold">AI Assistant</h2>
            <p className="text-lg">
              I created and AI assistant using N8N, Gemini LLM's, MCP server, and telegram bot API.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg font-semibold">More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={plane}
              alt="Flight Booking"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title text-xl font-bold">Project Management Tool</h2>
            <p className="text-lg">
              I self-hosted Plane, a project management tool for agile kanban projects using Docker.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg font-semibold">More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={safeHub}
              alt="SafeHub"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title text-xl font-bold">SafeHub</h2>
            <p className="text-lg">
              Our team developed SafeHub, an online booking platform.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg font-semibold">More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm" >
          <figure>
            <img
              src={gmailAuto}
              alt="Gmail Automation"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title text-xl font-bold">Gmail Automation</h2>
            <p className="text-lg">
              I built an automatic email sorting workflow using N8N.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg font-semibold">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
