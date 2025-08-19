
import TitleMessage from "@/app/components/constants/title-message";
import AboutUsIcons from '@/app/components/constants/about-icons';
import Image from 'next/image'

const About = () => {
    return (
        <div id='section-about' className='global-container z-40'>
            <TitleMessage
                header='About Us'
                paragraph='For years, we’ve partnered with startups, nonprofits, corporations,
                      and industry leaders to design, launch, and scale products that drive business growth.'/>
            <AboutUsIcons title="MicroBiz Media In a Nutshell" />
            <h2 className=' mx-auto  max-w-[715px] text-center pb-4 lg:pb-8' data-aos='zoom-in' >We work worldwide</h2>
            <div className=' overflow-hidden rounded-2xl  border-[12px] border-white/15  flex flex-col-reverse 
                    mx-auto max-w-[1024px]  lg:flex-row  mb-8 md:mb-12' data-aos='zoom-in'  >
                <div className='flex flex-col justify-center flex-1 bg-[#0c1015] px-3 py-10 lg:pl-16'>
                    <h2>Result Driven Work!</h2>
                    <p className='my-6 lg:max-w-[90%] text-[#746eb8]'>Visit our Career center</p>
                    <p className=' lg:max-w-[90%]'>We are an equal opportunity employer, Talent is everywhere so work where you are, we care about the resulets!</p>

                </div>
                <Image
                    src='/about_world_map.png'
                    alt='world-map'
                    className='flex-1 pt-4 lg:pr-10 bg-[#0c1015]  object-contain object-center  max-h-[280px] lg:py-4 w-full'
                    loading="lazy"
                    height={280}
                    width={400}
                />
            </div>
        </div>
    );
};

export default About;
