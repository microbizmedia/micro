'use client'
import Image from "next/image";

type TextAndPictureWindowProps = {
    header: string;
    paragraph: string;
    image: string; // Path or URL to the image
    button?: string; // Optional button text
    link?: string; // Optional link URL
    aditionalClassName?: string;
};

const textAndPictureWindow = ({ header, paragraph, image, button, link, aditionalClassName }: TextAndPictureWindowProps) => {

    const imgClass = ` ${aditionalClassName} flex-1 relative left-4 pt-2 md:py-3    bg-[#0c1015] scale-105
      object-cover object-center  max-h-[380px] w-full`
    return (
        <div
            className=' overflow-hidden rounded-2xl  border-[12px] 
              flex flex-col-reverse mx-auto max-w-[1024px] h-[391px] lg:flex-row mb-8 lg:mb-12 border-white/15'
          data-aos="zoom-in"
        >
            <div className='flex flex-col justify-center flex-1 bg-[#0c1015] py-6 px-3 md:px-0 lg:pl-16'>
                <h2>{header}</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-4 '>{paragraph}</p>
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className='button inline-block lg:self-start' >
                    {button} &#x27a4; </a>
            </div>
            <div className=' overflow-hidden flex-1'>
                <Image
                    src={image}
                    alt='work project image'
                    className={imgClass}
                    loading='lazy'
                    width={200}
                    height={200}
                />
            </div>

        </div>
    );
};

export default textAndPictureWindow;
