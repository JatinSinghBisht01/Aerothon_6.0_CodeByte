import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import Features from "../components/Features";

const LandingPage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen">
          {/* <Hero /> */}
          <section className="relative w-full h-screen mx-auto ">
            <div
              className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#4892f4] " />
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
              </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                      {" "}
                      Welcome to{" "}
                      <span className="text-[#4dcbe4]">
                        {" "}
                        FlyDetector{" "}
                      </span>{" "}  
                    </h1>

                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  Your Ultimate Solution for Fly Management <br/>
                    <Typewriter
                      cursor={true}
                      loop={true}
                      delaySpeed={10}
                      words={[
                        "Real-time, accurate fly detection using cutting-edge sensors and AI analytics. ",
                        "Easy monitoring and management of fly activity ",
                        "Tailored solutions including traps, repellents, and eco-friendly options",
                        "Round-the-clock assistance for setup, troubleshooting, and expert advice.",
                      ]}
                    />
                  </p>
                  {/* <Button variant="ghost"> */}

                  {/* </Button> */}
                </div>
            </div>
          </section>
        </div>
      </div>
      <Features />
    </>
  );
};
export default LandingPage;
