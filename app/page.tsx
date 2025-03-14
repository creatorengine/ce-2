
"use client";
import { useEffect, useState } from "react";
import Video1 from "./components/Video1";
import Video2 from "./components/Video2";
import { useInView as useView } from "react-intersection-observer";
import AutoCarousel from "./components/Carousel/NewCarousel";
import { teams, testimonials2 } from "./components/Carousel/images";
import TeamCarousel from "./components/Carousel/TeamCarousel";
import Footer from "./components/Footer/Footer";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import BrandTape from "./components/BrandTape/BrandTape";
import {
  TextGenerateEffect,
  TextGenerateEffect2,
  TextGenerateEffect3,
} from "@/components/ui/text-generate-effect";
import YoutubeThumbnails from "./components/YoutubeThumbnails";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [teamManagementRef, inView] = useView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingYoutube = "Our Work";
  const headingTeam = "Our Team";
  const headingAbout = "About Us ";
  const bodyList =
    "Editing • Graphics • Animation • Color Grading • Motion Designing ";
  const bodyList2 =
    " Sound Design & Mixing • Creative Music Production • Post Production Management";
  const bodyAbout =
    " We provide End to End Post Production For Digital Creators,Television, Streaming & More ";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <main className="-z-10 flex flex-col w-screen overflow-hidden">
        <div className="top-0 h-[100vh] lg:h-[100vh] mt-0 pt-0 w-full">
          {isMobile ? <Video2 /> : <Video1 />}
        </div>

        {/* Mid-text-1: Initial text */}
        <div className="mid-section flex flex-col lg:mt-8 mt-16  justify-start min-h-fit px-8 lg:px-20 text-[#DADADA] text-large  lg:text-xl text-center">
          {/* <TextGenerateEffect
            words={headingAbout}
            className="lg:text-4xl  text-2xl mt-8 mb-4 "
          /> */}
          <ScrollAnimationWrapper>
            <p className="font-bold mt-8 text-xl lg:text-2xl">
              End to End Post Production For Digital Creators, Television,
              Streaming & More
            </p>
          </ScrollAnimationWrapper>
          <div className="flex flex-col justify-center w-full lg:gap-0 gap-1 lg:justify-around">
            <ScrollAnimationWrapper>
              <p className="text-list ml-0 mt-4 lg:mt-8 text-balance lg:pr-0 pr-2">
                Editing • Graphics • Animation • Color Grading • Motion Design{" "}
                <span className="lg:hidden">•</span>
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-list ml-0 text-balance lg:pr-0 pr-2">
                Sound Design & Mixing • Creative Music Production • Post
                Production Management
              </p>
            </ScrollAnimationWrapper>
          </div>
          
          <div>
            <div className="flex flex-wrap px-6 lg:px-16 mt-4 lg:mt-10">
              <ScrollAnimationWrapper className="w-full">
                <span className="mr-2 w-full">
                  Our leadership team spearheaded Post Production divisions for
                  top studios including
                </span>
              </ScrollAnimationWrapper>
              {"  "}

              <div
                className="  flex flex-row gap-1 my-3 items-center justify-center lg:justify-evenly
                 h-full
               w-full"
              >                
                <ScrollAnimationWrapper className="w-full flex flex-row justify-center items-center">
                  <img
                    src="/illustrations/ottlogos.png"
                    className="lg:ml-2 ml-4 lg:w-[500px]"
                    alt=""
                  />
                </ScrollAnimationWrapper>
              </div>

              <ScrollAnimationWrapper className="w-full">
                <span className="w-full lg:mt-0 mt-4">
                  and brought their expertise to critically acclaimed and
                  award-winning shows like{" "}
                </span>
              </ScrollAnimationWrapper>
            </div>
            <div className="lg:w-[780px] w-full text-balance mx-auto">
              <ScrollAnimationWrapper>
                <span
                  className="w-full lg:mt-0 mt-3 gradient-text italic
            "
                >
                  Squid Game, Suits, MasterChef, Sacred Games, Elephant
                  Whisperers, Delhi Crime, House of Secrets, Behind Closed Doors
                  and many more.
                </span>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
        <div className="my-16">
          <BrandTape />
        </div>
        <div className="w-screen lg:h-[80vh] h-[30vh]">
          <AutoCarousel images={testimonials2} />
        </div>
        <div className="w-full flex flex-col justify-center    h-full my-16 md:mt-32 lg:my-7">
          <TextGenerateEffect
            words={headingYoutube}
            className="lg:text-4xl  text-2xl mt-8 mb-4 ml-4 md:ml-12 lg:mx-36 "
          />
          <div className=" lg:ml-8 w-full h-full ">
            <YoutubeThumbnails />
          </div>
        </div>

        <div className="team-members w-full mt-16 min-h-fit flex flex-col ">
          <TextGenerateEffect
            words={headingTeam}
            className="lg:text-4xl text-2xl ml-4 md:ml-12 lg:mx-36"
          />
          <TeamCarousel images={teams} />
        </div>
      </main>
    </>
  );
}
