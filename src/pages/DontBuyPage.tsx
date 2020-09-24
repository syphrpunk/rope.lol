import React from "react";
import { Header } from "../components/Header/Header";

export const DontBuyPage: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Header />
      <div className="flex justify-center">
        <img src="/images/DontBuyIt.png" alt="Dont Buy It!" />
      </div>
      <div className="flex flex-col items-center px-4 md:px-0">
        <div className="text-2xl md:text-4xl cursive pt-8">
          Don't just take our word for it, these people also said don't buy rope
        </div>
        <div className="py-8">
          <iframe
            title="$ROPE - Gilbert Gottfried has a message for you Degens"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/si8xvLSz9jU"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-4">
          <iframe
            title="$ROPE - Zydrunas Savickas"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/qSZRA9NMsLU"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-4">
          <iframe
            title="$ROPE - A message from the big guy himself for all the CHADS out there."
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/_Cw9Sqw5K98"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
