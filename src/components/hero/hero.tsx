import "../../index.css";
import cropped from "../../assets/cropped.jpg";

export default function Hero() {
  return (
    <div className="hero bg-base-200 h-200 w-screen" id="home">
      <div className="hero-content flex-row gap-10 px-10 w-screen">
        <div className="flex-col w-full space-y-5">
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
            <div className="w-15 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" />
            </div>
            <div className="w-15 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" />
            </div>
            <div className="w-15 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" />
            </div>
          </div>

          <div>
            <button className="btn btn-primary h-15 w-40 text-xl font-bold">
              <a href="#about">Show more</a>
            </button>
          </div>
        </div>

        <img
          src={cropped}
          className="w-100 h-100 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  );
}

export function heroDivider() {
  return <div className="divider divider-primary"></div>;
}
