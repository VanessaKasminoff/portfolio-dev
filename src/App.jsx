// CSS
import "./assets/css/App.css";

// REACT
import { useEffect, useRef } from "react";

// COMPONENTS
import Header from "./components/Header";

// LIBRARIES
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const containerRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray(".projects-container div");
    // console.log(sections);

    const container = containerRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`,
      },
    });
  });

  const lenis = new Lenis();
  lenis.on("scroll", () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div id="App">
      <Header />
      <main>
        <section id="hero">
          <div className="hero-content">
            <img
              className="hero-img"
              src="https://placehold.co/150"
              alt="Placeholder image"
            />
            <h1 className="hero-heading">Hi there, I'm Vanessa ^-^</h1>
            <p className="hero-description">
              Zombie ipsum brains reversus ab cerebellum viral inferno, brein
              nam rick mend grimes malum cerveau cerebro
            </p>
            <svg
              className="hero-down-arr"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ececec"
              viewBox="0 0 256 256"
            >
              <path d="M210.83,133.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,210.34l77.17-77.17A4,4,0,0,1,210.83,133.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,130.34,50.83,53.17a4,4,0,0,0-5.66,5.66Z"></path>
            </svg>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/vanessakasminoff"
              target="_blank"
            >
              <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#dca8ff"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
            <a href="https://github.com/VanessaKasminoff" target="_blank">
              <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#dca8ff"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </a>
          </div>
        </section>
        <section className="projects">
          <div className="projects-container" ref={containerRef}>
            <div className="project-box">
              <a href="#">
                <img
                  src="https://placehold.co/600x400"
                  alt="placeholder image"
                />
              </a>
              <h3 className="heading-tertiary">Project 1</h3>
              <p className="project-description">
                De apocalypsi gorger omero undead survivor dictum mauris
              </p>
            </div>
            <div className="project-box">
              <a href="#">
                <img
                  src="https://placehold.co/600x400"
                  alt="placeholder image"
                />
              </a>
              <h3 className="heading-tertiary">Project 2</h3>
              <p className="project-description">
                De apocalypsi gorger omero undead survivor dictum mauris
              </p>
            </div>
            <div className="project-box">
              <a href="#">
                <img
                  src="https://placehold.co/600x400"
                  alt="placeholder image"
                />
              </a>
              <h3 className="heading-tertiary">Project 3</h3>
              <p className="project-description">
                De apocalypsi gorger omero undead survivor dictum mauris
              </p>
            </div>
            <div className="project-box">
              <a href="#">
                <img
                  src="https://placehold.co/600x400"
                  alt="placeholder image"
                />
              </a>
              <h3 className="heading-tertiary">Project 4</h3>
              <p className="project-description">
                De apocalypsi gorger omero undead survivor dictum mauris
              </p>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="skills-container">
            <div className="skills-icons">
              <p className="skill-item html">HTML</p>
              <p className="skill-item css">CSS</p>
              <p className="skill-item javascript">JavaScript</p>
              <p className="skill-item react">React</p>
              <p className="skill-item basic">Git</p>
              <p className="skill-item basic">GitHub</p>
            </div>
            <div className="skills-description">
              <h2>These are my skills</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
