"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { CardBody, CardContainer } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-green">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-2">
          {projects.map((item) => (
            <CardContainer
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <CardBody className="relative group/pin z-50 cursor-pointer">
                <div className="p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] overflow-hidden">
                  <div className="relative">
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0"
                      />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          >
                            <img src={icon} alt="icon5" className="p-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <a
                          href={item.link}
                          className="flex lg:text-l md:text-xs text-sm text-green"
                        >
                          Check The Project Page
                        </a>
                        <FaLocationArrow className="ms-3" color="green" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
