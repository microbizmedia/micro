type TextAndPictureWindowProps = {
  header: string;
  paragraph: string;
  image: string; // Path or URL to the image
  button?: string; // Optional button text
  link?: string; // Optional link URL
  aditionalClassName?: string;
};

const textAndPictureWindow = ({ header, paragraph, image, button, link, aditionalClassName }: TextAndPictureWindowProps) => {
    const imgClass = ` ${aditionalClassName} flex-1 relative left-4 pt-2 md:py-3    bg-colorBackground scale-105
      object-cover object-center  max-h-[380px] w-full`
    return (
        <>
            <div
                className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15
              flex flex-col-reverse
              mx-auto max-w-[1024px]
              lg:flex-row mb-8 lg:mb-12'
                data-jos_animation='zoom'
            >
                <div className='flex flex-col justify-center flex-1 bg-colorBackground py-6 px-3 md:px-0 lg:pl-16'>
                    <h2>{header}</h2>
                    <p className='lg:mt-6 lg:mb-10 mt-4 mb-4 '>{paragraph}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer"
                        className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md' >
                        {button} &#x27a4; </a>
                </div>
                <div className=' overflow-hidden'>
                    <img
                        src={image}
                        alt='hero-dashboard'
                        className={imgClass}

                    />
                </div>

            </div>
        </>
    );
};

export default textAndPictureWindow;
