import Link  from 'next/link';
type TextVideoWindowProps = {
  header: string;
  paragraph: string;
  button: string;
};
const textVideoWindow = ({ header, paragraph, button }: TextVideoWindowProps) => {

    return (
        <>
            <div
                className='jos hero-img overflow-hidden rounded-2xl  border-[12px] flex flex-col-reverse mx-auto max-w-[1024px] lg:flex-row mb-8 lg:mb-12'
                data-jos_animation='zoom'
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
                <div className='flex flex-col justify-center flex-1 bg-[#0c1015] px-3 py-6 lg:pl-16'>
                    <h2>{header}</h2>
                    <p className='lg:mt-6 lg:mb-10 mt-4 mb-4 lg:max-w-[70%]'>{paragraph}</p>
                    <Link href='work' className='button inline-block lg:self-start bg-colorWhite text-[#0c1015] rounded-md'> {button} &#x27a4;  </Link>
                </div>
                <div className='bg-[#0c1015] flex justify-center'>
                    <video width='420' autoPlay muted loop playsInline
                        className='flex-1 lg:pr-20 bg-[#0c1015]  object-cover object-center  lg:pt-0 '
                    >
                        <source src='/videos/MP4_video_websites.mp4' type="video/mp4">
                        </source>
                        Your browser does not support the video tag.
                    </video>
                </div>



            </div>
        </>
    );
};

export default textVideoWindow;
