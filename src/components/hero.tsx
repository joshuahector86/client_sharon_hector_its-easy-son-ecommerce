import headshot from "../assets/gerald_hector.jpg";
const Hero = () => {
  return (
    <div className="flex  justify-between w-full bg-linear-to-b from-purple-900 to-black p-10 ">
      <div className="max-w-4xl mx-auto flex items-center gap-10 lg:gap-0 flex-col lg:flex-row">
        <div>
          <h1 className="text-4xl italic font-semibold">
            It's Easy Son - Quit Makin' Things Difficult
          </h1>

          <button>
            <a
              href="https://client-sharon-hector-its-easy-son-w.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-white text-purple-950 font-semibold px-6 py-3 rounded hover:bg-purple-100 transition"
            >
              Book a Consultation
            </a>
          </button>
        </div>
        <div className="bg-purple-950 p-2 rounded-full">
          <img
            src={headshot}
            alt="Headshot"
            className="rounded-full h-60 w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
