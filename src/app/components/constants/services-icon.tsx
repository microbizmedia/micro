"use client";

import Image from "next/image";

type CardIconProps = {
  text: string;
  image: string; // Path or URL to the image
   delay: string; // Path or URL to the image
};

const CardIcon = ({ text, image, delay }: CardIconProps) => {
  return (
    <div
      className="jos flex justify-center"
      data-jos_animation="flip"
    data-jos_delay={delay}
    >
      <div className="h-[180px] w-[290px] bg-[#0c1015] border  rounded-lg p-6 flex flex-col items-start justify-center"
        style={{ borderColor: 'rgba(255,255,255,0.20)' }}>
        <Image
          src={image}
          alt="web_development_icon"
          width={80} // still required for next/image
          height={80}
          className={` h-auto rounded-lg mb-2 mt-2`}
        />
        <p className="mt-2 pt-2">{text}</p>
      </div>
    </div>
  );
};

export default CardIcon;
