import "../../index.css";

export default function Contact() {
  return (
    <div className="flex flex-col h-full w-full p-15 gap-20"  id="contact">
      <h2 className="text-4xl font-bold text-center">Contact Me 🧡</h2>

      <div className="flex flex-row gap-5 place-items-center justify-center">
        <div className="card  w-96 shadow-sm">
          <div className="card-body gap-5">
            <h2 className="card-title text-xl font-bold">Get in Touch</h2>
            <p className="text-lg">
              If you have any questions or inquiries, feel free to reach out!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg font-semibold">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 w-96 shadow-sm">
          <div className="card-body gap-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your name?</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>

            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            <textarea
              className="textarea w-full h-full"
              placeholder="Message here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
