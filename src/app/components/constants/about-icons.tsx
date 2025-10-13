'use client'
import { useState } from 'react'
import SwiperIcon from './icon-card'

interface AboutUsIconsProps { title: string; }

const AboutUsIcons: React.FC<AboutUsIconsProps> = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='mb-4 lg:mb-12'>
      <h2 className=' mx-auto pb-4 lg:pb-8 lg:pt-8 max-w-[715px] text-center' data-aos="zoom-in" >{title}</h2>
      <div className={`flex flex-wrap justify-center gap-8   overflow-hidden transition-all duration-300 
        ${isExpanded ? "max-h-full" : "max-h-[610px]"}`}>
        <SwiperIcon image='/icon_images/about_projects.png' altText='Rocket icon' text='Total Projects Lunched' delay="100" imageSize='w-[140px]' />
        <SwiperIcon image='/icon_images/about_awards.png' altText='Medal icon' text='Behance Design Award' delay='200' imageSize='w-[140px]' />
        <SwiperIcon image='/icon_images/about_technology.png' altText='Technology icom' text='Powered by Modern Technology' delay='300' imageSize='w-[140px]' />
        <SwiperIcon image='/icon_images/about_team.png' altText='Persons icon' text='A Dedicated Team' delay='400' imageSize='w-[120px]' />
        <SwiperIcon image='/icon_images/about_profits.png' altText='Chart icon' text='Raised Profits' delay='500' imageSize='w-[140px]' />
        <SwiperIcon image='/icon_images/about _cycle.png' altText='Recycling icon' text='Full Cycle All-In-One' delay='600'imageSize='w-[140px]' />
      </div>
      {/* Toggle Button */}
      <div className={`flex justify-center md:hidden ${isExpanded ? "hidden" : "block"}`}>
        <button onClick={() => setIsExpanded(!isExpanded)} className={`button rounded-md px-[90px] mt-2`}  >
          View All &#x27a4;
        </button>
      </div>
    </div>
  );
};

export default AboutUsIcons;