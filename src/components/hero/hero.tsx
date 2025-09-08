import '../../index.css';

export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.pinimg.com/736x/3c/0f/b0/3c0fb0256dc3e97a6f77aec6bce93da7.jpg)",
            }}
        >
            <div className="hero-overlay flex"></div>
            <div className="hero-content text-left">
                <div className="w-full">
                    <h1 className="mb-5 text-4xl font-semibold">Hello, </h1>
                    <h1 className="mb-5 text-5xl font-bold">Hanz Manaog here!</h1>
                    <p className="mb-5">
                        Currently a 4th year student taking <strong>Bachelor of Science in Information Technology</strong><br></br> at La Consolacion University Philippines
                    </p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div>
    );
}