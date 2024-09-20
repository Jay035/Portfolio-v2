import { useEffect, useRef } from "react";
// import cv from "../assets/Chibuike_Ukandu_ CV.pdf";
import Typed from "typed.js";
import { Link } from "react-router-dom";
// import sassIcon from "../assets/sass.png";
// import tailwindcssIcon from "../assets/tailwindcss.png";
// import javascriptIcon from "../assets/javascript.png";
// import bootstrapIcon from "../assets/bootstrap.png";

export default function Home() {
  // create ref element
  const el = useRef(null),
    aboutHeading = "<ABOUT />",
    portfolio = "<Portfolio />";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Chibuike Ukandu. ", " a Frontend Engineer. "],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-blackk text-light-grey z-0 relative">
      <section
        data-aos="fade-in"
        data-aos-duration="3000"
        id="hero"
        className="bg-hero-img w-full h-screen bg-no-repeat bg-center bg-black-300 bg-blend-multiply bg-cover"
      >
        {/* text */}
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="relative h-4/5 text-center w-11/12 max-w-[800px] mx-auto leading-loose sm:ml-10 sm:text-left top-[40%] -translate-y-[40%]"
        >
          <h1 className="text-2xl text-white font-semibold mb-2 sm:text-4xl xl:text-5xl">
            Hello, I&apos;m <span ref={el}></span>
          </h1>
          <h4 className="text-lg font-semibold sm:text-2xl">
            I&apos;m a developer who is passionate about creating interactive
            interfaces that solve human problems.{" "}
          </h4>
          {/* buttons */}
          <div className="sm:w-4/5 sm:flex justify-center items-center gap-12 sm:gap-4 mt-12 sm:justify-start">
            {/* contact */}
            <button className="block cursor-auto bg-button-black p-2 w-1/2 sm:w-2/5 mx-auto sm:mx-0 my-2 text-white font-semibold hover:bg-[#505052] sm:py-4">
              <Link
                to="/contact"
                className="py-4 px-4 text-lg sm:text-xl xl:text-xl"
                href="/src/pages/Contact.js"
              >
                Hire Me
              </Link>
            </button>
            {/* GET CV  */}
            <button className="block cursor-auto bg-button-black p-2 w-1/2 sm:w-2/5 mx-auto sm:mx-0 my-2 text-white font-semibold hover:bg-[#505052] sm:py-4">
              <a
                className="py-4 px-4 text-lg sm:text-xl xl:text-xl"
                href="https://drive.google.com/file/d/1ng_v6qMwrd9mAHUohhbwwcWMN1vP06qk/view?usp=sharing"
              >
                Get CV
              </a>
            </button>
          </div>
        </div>
        <a href="#about-me" className="arrow w-fit mt-36 md:mt-10 mx-auto flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="#a5a5a8"
            className="bi bi-arrow-down-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </svg>
        </a>
      </section>

      {/* ============= ABOUT ME =================== */}

      <section
        // data-aos="fade"
        // data-aos-duration="3000"
        id="about-me"
        className="w-[90%] mx-auto leading-7 pt-32 pb-12 max-w-[1000px]"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-3xl sm:text-4xl font-semibold text-center mt-8 pb-10"
        >
          {aboutHeading}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="about-sections grid text-base sm:text-lg"
        >
          {/* LEFT COLUMN  */}
          <div className="xl:text-xl sm:font-normal text-base">

            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className=""
            >
              👋 Hi there! I'm{" "}
              <span className="text-white opacity-90 font-semibold">
                {" "}
                Chibuike Ukandu.
              </span>
              , also known as CodexJay. I am a passionate Frontend Engineer with
              a knack for crafting intuitive, pixel-perfect and scalable web
              interfaces. With over 2 years of hands-on experience, I specialize
              in harnessing the power of modern web technologies to bring ideas
              to life. I have experience in design and possess a keen sense of
              aesthetic.
              {/* I&apos;m an enthusiastic Frontend developer, an ardent believer in
              continuous learning of both technical and soft skills to improve
              my ability to deliver great software solutions with the best user
              experience. Whether it&apos;s a project, job opportunity, or just
              a chat, feel free to contact me. */}
            </p>

            {/* SKILLS */}
            <div id="skills" className="my-8">
              <h5
                data-aos="fade-up"
                data-aos-duration="4000"
                className="text-2xl sm:text-3xl font-semibold mb-2"
              >
                Skills
              </h5>
              <div className="">
                <ul
                  data-aos="fade-in"
                  data-aos-duration="3000"
                  className="mt-8 flex flex-wrap md:grid md:grid-cols-5 md:gap-x-6 gap-y-10 gap-x-5 px-4 text-center justify-start items-start"
                >
                  {/* REACT JS */}
                  <li className="font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">REACT JS</span>
                  </li>
                  {/* JAVASCRIPT */}
                  <li className=" font-medium">
                    <span className="bg-light-grey/30 py-2 px-4">
                      JAVASCRIPT
                    </span>
                  </li>
                  <li className=" font-medium">
                    <span className="bg-light-grey/30 py-2 px-4">
                      TYPESCRIPT
                    </span>
                  </li>
                  {/* TAILWINDCSS  */}
                  <li className=" font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">
                      TAILWINDCSS
                    </span>
                  </li>
                  {/* NEXT JS */}
                  <li className="font-medium">
                    <span className="bg-light-grey/30 py-2 px-4">NEXT JS</span>
                  </li>
                  {/* VUE JS */}
                  <li className=" font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">VUE JS</span>
                  </li>
                  {/* HTML  */}
                  <li className="font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">HTML</span>
                  </li>
                  {/* CSS  */}
                  <li className="font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">CSS</span>
                  </li>

                  {/* SASS  */}
                  <li className=" font-medium cursor-default">
                    <span className="bg-light-grey/30 py-2 px-4">
                      SCSS/SASS
                    </span>
                  </li>

                  {/* BOOTSTRAP  */}
                  <li className="font-medium cursor-default">
                    {" "}
                    <span className="bg-light-grey/30 py-2 px-4">
                      BOOTSTRAP
                    </span>
                  </li>

                  {/* FIGMA  */}
                  <li className=" font-medium cursor-default">
                    {/* <i className="ri-github-fill hidden text-3xl mb-2"></i> */}
                    <span className="bg-light-grey/30 py-2 px-4">FIGMA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="mt-12 mb-8"
            >
              <h5 className="text-2xl lg:text-3xl font-semibold mb-2">
                Education
              </h5>
              <ul
                data-aos="fade-up"
                data-aos-duration="3000"
                className="list-disc pl-9 pb-2"
              >
                <li className="cursor-default pb-2">
                  <h6 className="font-medium">
                    AltSchool School of Engineering
                  </h6>
                  <p className="text-base">Software Engineering</p>
                  <p className="text-lg font-medium">2022 - 2023</p>
                </li>
                <li className="pb-2 cursor-default">
                  <h6 className="font-medium">Jobberman</h6>
                  <p className="text-base">Soft Skills Training</p>
                  <p className="text-lg font-medium">2021</p>
                </li>
             {/*   <li className="pb-2 cursor-default">
                  <h6 className="font-medium">Living Word Academy Secondary</h6>
                  <p className="text-base">WASSCE</p>
                  <p className="text-lg font-medium">2020</p>
                </li>
                */}
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              id="projects"
              className="pb-8"
            >
              <h5 className="text-2xl font-medium mb-2">Projects</h5>
              <p className="">
                Links to my works can be found on my{" "}
                <Link
                  to="/projects"
                  className="font-medium text-white opacity-90"
                >
                  {" "}
                  {portfolio}
                </Link>{" "}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          {/* <div className="">
              <div id="certificates" className="my-4">
                  <h5 className='text-2xl font-medium mb-2'>Certifications</h5>
                  <ul className='list-disc pl-9'>
                      <li>Side Hustle Internship &nbsp;<a href={SHI} className="font-medium text-white">View</a> </li>
                      <li>Jobberman Soft Skills Training &nbsp;
                        <a href="" className="font-medium text-white"> 
                        <Document file={JSS}>
                          <Page>
                            <Text>View</Text>
                            <Image />
                          </Page>
                        </Document>
                        View
                         </a>  
                        </li>
                      <li>Innovation Growth Hub Fellowship &nbsp;<a href={IGHub} className="font-medium text-white">View</a> </li>
                  </ul>
              </div>
              
            </div> */}
        </div>
      </section>
    </div>
  );
}
