import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AutoCarousel from "./Carousel/NewCarousel";

const thumbnails = [
  "/thumbnail/v2/1.png",
  "/thumbnail/v2/2.png",
  "/thumbnail/v3/3.jpg",
  "/thumbnail/v2/4.png",
  "/thumbnail/v2/5.png",
  "/thumbnail/v2/6.png",
  "/thumbnail/v2/7.png",
  "/thumbnail/v2/8.png",
  "/thumbnail/v3/9.jpg",
  "/thumbnail/v2/10.png",
  "/thumbnail/v3/11.jpg",
  "/thumbnail/v3/12.jpg",
];

const links = [
  "https://www.youtube.com/watch?v=IMxIXkeE61s",
  "https://www.youtube.com/watch?v=MY3Qy6vAbZQ",
  "https://www.youtube.com/watch?v=q_4r1KbT8Xc",
  "https://www.youtube.com/watch?v=tKlWUsLLCow",
  "https://www.youtube.com/watch?v=NFw-WizIt50",
  "https://www.youtube.com/watch?v=Zq5AEc7WJf4",
  "https://www.youtube.com/watch?v=SCIOOlT3KJI",
  "https://www.youtube.com/watch?v=VZIc5jXss-g",
  "https://www.youtube.com/watch?v=awRH4mR3kwQ",
  "https://www.youtube.com/watch?v=6kvFxnoKCs8",
  "https://www.youtube.com/watch?v=IB1ysAbrOhU",
  "https://www.youtube.com/watch?v=HqCvTI5WvUI"
]
 

export default function YoutubeThumbnails() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <AutoCarousel images={thumbnails} links={links} />;
  }

  return (
    <div className="flex flex-col w-full  justify-center items-center">
      <div className="grid grid-cols-4 space-x-0 max-w-[1200px] my-6 gap-2 px-12">
        {thumbnails.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={links[index]} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt="youtube-thumbnails"
                width={250}
                height={250}
                className="rounded-lg "
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
