
import TitleMessage from "@/app/components/constants/title-message";
import AboutUsIcons from '@/app/components/constants/about-icons';
import Link from "next/link";
import Image from 'next/image'

const About = () => {
    return (
        <div id='section-about' className='global-container z-40'>
            <TitleMessage
                header='About Us'
                paragraph='We design websites, create digital campaigns, and help businesses grow their online presence.'/>
            <AboutUsIcons title="The MicroBiz Snapshot" />
             {/* meet the team */}
            <div className="overflow-hidden mb-8 md:mb-12 ">
                <h2 className=' mx-auto  max-w-[715px] text-center pb-4 lg:pb-8' data-aos='zoom-in' >Meet the Team</h2>
                <div className="flex justify-center flex-wrap gap-6 md:gap-14">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center text-center space-y-2" data-aos='zoom-in'>
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg ">
                            <img
                                src="/members_images/martin_gyorgievski.png"
                                alt="Team member 1"
                                className="w-full h-full object-cover object-[center_30%] bg-[#746eb8]"
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Martin Gyorgievski</h4>
                            <p className="text-sm text-[#746eb8]">Web Designer</p>
                            <p className="text-sm text-gray-500">Munich, DE</p>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center text-center space-y-2 " data-aos='zoom-in'>
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-[8px] border-[#5a49bb]/60">
                            <img
                                src="/members_images/martin_stojmenovski.png"
                                alt="Team member 2"
                                className="w-full h-full object-cover object-[center_30%] bg-[#746eb8]"
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Martin Stojmenovski</h4>
                            <p className="text-sm text-[#746eb8]">Web Developer</p>
                            <p className="text-sm text-gray-500">Denver, CO</p>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center text-center space-y-2" data-aos='zoom-in'>
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-[8px] border-[#916eb8]/80">
                            <img
                                src="/members_images/victor_doculevski.png"
                                alt="Team member 3"
                                className="w-full h-full object-cover object-[center_0%] bg-[#746eb8]"
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Victor Dokulevski</h4>
                            <p className="text-sm text-[#746eb8]">Google Ads Specialist</p>
                            <p className="text-sm text-gray-500">Denver, CO</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2 className=' mx-auto  max-w-[715px] text-center pb-4 lg:pb-8' data-aos='zoom-in' >We Work Worldwide</h2> */}
            <div className=' overflow-hidden rounded-2xl  border-[12px] border-white/15  flex flex-col-reverse 
                    mx-auto max-w-[1024px]  lg:flex-row  mb-8 md:mb-12' data-aos='zoom-in'  >
                <div className='flex flex-col justify-center flex-1 bg-[#0c1015] px-3 py-10 lg:pl-16'>
                    <h2>Join Our Team!</h2>
                    <Link href='/careers' className='my-4 lg:my-6 lg:max-w-[90%] text-[#746eb8] cursor-pointer'>Explore Careers</Link>
                    <p className=' lg:max-w-[90%]'>We’re a startup that values talent and creativity. Work from wherever you are — we care about results and making an impact together!</p>

                </div>
                <Image
                    src='/about_world_map.png'
                    alt='world-map'
                    className='flex-1 pt-8 lg:pt-4 lg:pr-10 bg-[#0c1015]  object-contain object-center  max-h-[280px] lg:py-4 w-full'
                    loading="lazy"
                    height={280}
                    width={400}
                />
            </div>
           
        </div>
    );
};

export default About;
