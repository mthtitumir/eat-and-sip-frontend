"use client";
import { useRef, useState } from "react";
import { Icon } from "@/icons";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-screen">
      <video
        ref={vidRef}
        src="https://res.cloudinary.com/dbbtzirgj/video/upload/v1720929011/meal_bw03oc.mp4"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
        <div
          className="w-24 h-24 rounded-full border border-amber-500 flex items-center justify-center cursor-pointer bg-transparent"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (vidRef.current) {
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }
          }}
        >
          {playVideo ? (
            <Icon.pause color="#fff" fontSize={30} className="bg-transparent" />
          ) : (
            <Icon.play color="#fff" fontSize={30} className="bg-transparent" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
