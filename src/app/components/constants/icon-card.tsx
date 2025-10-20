"use client";
import Image from "next/image";

type CardIconProps = {
  text: string;
  image: string;
  altText: string;
  delay?: string;        // optional animation delay
  imageSize?: string;    // Tailwind class for controlling size
};

const CardIcon = ({ text, image, altText, delay, imageSize }: CardIconProps) => {
  return (
    <div  className=" flex justify-center" 
    data-aos="flip-left"  data-aos-delay={delay}
    >
      <div className="h-[180px] w-[290px] bg-[#0c1015] border border-white/10  
      rounded-lg p-6 flex flex-col items-start justify-center"  >
        <Image
          src={image}
          alt={altText}
          width={80} 
          height={80}
          className={`${imageSize} h-auto rounded-lg mb-2 mt-2`}
          loading="lazy"
        />
        <p className="mt-2 pt-2">{text}</p>
      </div>
    </div>
  );
};

export default CardIcon;
