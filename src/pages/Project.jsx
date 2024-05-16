import { useEffect, useState } from "react";
import { Card } from "./ProjectCard";
import { AllWorks } from "./ProjectData";

export default function Project() {
  const portfolioHeading = "<PORTFOLIO />";
  // const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "all",
  //     title: "All",
  //   },
  //   {
  //     id: "html",
  //     title: "HTML",
  //   },
  //   {
  //     id: "css",
  //     title: "CSS",
  //   },
  //   // {
  //   //     id: "sass",
  //   //     title: "SCSS/SASS"
  //   // },
  //   {
  //     id: "tailwindcss",
  //     title: "TailwindCSS",
  //   },
  //   {
  //     id: "vanillaJS",
  //     title: "Vanilla JS",
  //   },
  //   // {
  //   //     id: "api",
  //   //     title: "API"
  //   // },
  //   {
  //     id: "reactJS",
  //     title: "React JS",
  //   },
  //   {
  //     id: "nextJS",
  //     title: "Next JS",
  //   },
  // ];
  useEffect(() => {
    // switch (selected) {
    //   case "all":
    //     setData(AllWorks);
    //     break;
    //   case "html":
    //     setData(HTMLWorks);
    //     break;
    //   case "css":
    //     setData(VanillaCSSWorks);
    //     break;
    //   case "tailwindcss":
    //     setData(TailwindCSSWorks);
    //     break;
    //   case "vanillaJS":
    //     setData(VanillaJSWorks);
    //     break;
    //   case "reactJS":
    //     setData(ReactJSWorks);
    //     break;
    //   case "nextJS":
    //     setData(NextJSWorks);
    //     break;
    //   default:
    //     setData(AllWorks);
    // }
    setData(AllWorks);
  }, []);

  return (
    <div
      id="portfolio"
      data-aos="fade-in"
      data-aos-duration="3000"
      className="relative bg-blackk text-light-grey bg-portfolio-Bg h-full min-h-[80%] bg-top overflow-hidden mt-[5.3rem]"
    >
      <div
        data-aos="fade-in"
        data-aos-duration="3000"
        className="container px-8 md:px-[9.5vw] w-full mx-auto backdrop-blur-sm"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-semibold pt-8 pb-10">
          {portfolioHeading}
        </h1>
        <p className="font-bold uppercase text-xl">Selected Projects</p>
        {/* buttons */}
        {/* <ul
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="500"
          className="flex gap-x-8 gap-y-3 overflow-x-hidden flex-wrap w-full mx-auto mt-8"
        >
          {list.map((item, index) => (
            <ProjectList
              key={index}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
              title={item.title}
            />
          ))}
        </ul> */}

        {data?.length > 0 ? (
          <section
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className="w-full grid grid-cols-1 place-content-center sm:grid-cols-2 gap-10 items-start mt-10 mb-20"
          >
            {data?.map((item, index) => {
            return <Card key={index} id={item.id} item={item} />;
          })}
          </section>
        ) : (
          <section className="w-full grid grid-cols-1 place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-20 items-center mt-10 mb-20">
            <div className="bg-white/50 w-[350px] h-[240px] animate-pulse"></div>
            <div className="bg-white/50 w-[350px] h-[240px] animate-pulse"></div>
            <div className="bg-white/50 w-[350px] h-[240px] animate-pulse"></div>
          </section>
        )}
      </div>
    </div>
  );
}
