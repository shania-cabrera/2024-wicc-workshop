import "./App.css";
import wicclogo from "/src/img/wicc_logo.png";
import githublogo from "/src/img/github.svg";
import instalogo from "/src/img/instagram.svg";
import figmalogo from "/src/img/figma.svg";
import location from "/src/img/location.svg";
import linkedinlogo from "/src/img/linkedin.svg";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <section className="h-screen w-[80%] flex mx-auto items-center">
        <div className="h-auto flex flex-row sm:flex-col-reverse space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center space-y-5 text-base w-full">
            <h1>Hi! I'm Shania Cabrera</h1>
            <p>
              Hi! I'm Shania Cabrera, a UX designer and UI engineer from Cornell University.
              As a prospective UX designer, my goal is to contribute to the development of tools that empower artists in their craft. Whether it's the enchanting world of music production, game design, or content distribution, I am driven by the desire to enhance the way artists engage with their tools.
            </p>

            <div className="flex flex-row items-center space-x-2">
              <img src={location} />
              <p>Ithaca, United States</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <p>Avaliable for new projects</p>
            </div>

            <div className="flex flex-row h-10 space-x-2">
              <a href="https://github.com/shania-cabrera">
                <img src={githublogo} />
              </a>
              <a href="">
                <img src={instalogo} />
              </a>
              <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1166832836082532104">
                <img src={figmalogo} />
              </a>
              <a href="https://www.linkedin.com/in/shania-cabrera/">
                <img src={linkedinlogo} />
              </a>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              src={wicclogo}
              alt="WICC Logo"
              className="object-contain sm:p-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#9CE2D3] min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Experience</div>
          {/* TODO 4: Add your work experience here by editing the json files in src/data/experiences.json */}
          <div className="text-base">
            Here is a quick summary of my most recent experiences:
          </div>
          <Experience className="w-full" />
        </div>
      </section>
      <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Selected Projects</div>
          {/* TODO 5: Add your projects here by editing the json files in src/data/projects.json */}
          <div className="text-base">Here are some projects I have built:</div>
          <Project className="w-full" />
        </div>
      </section>
      {/* TODO 6: Change the email and phone number to your own in the footer component */}
      <Footer />
    </>
  );
}

export default App;
