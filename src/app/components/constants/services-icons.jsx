'use client'
import { useState } from 'react'
import CardIcon from './icon-card'
const ServicesIcons = ({ title }) => {


  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-6 lg:mb-16">
      <h2 className=' mx-auto   pb-4 lg:pb-8   max-w-[715px] text-center ' data-aos='zoom-in' >{title}</h2>
      <div className={`flex flex-wrap justify-center gap-8 overflow-hidden transition-all duration-300 
         ${isExpanded ? "max-h-full" : "max-h-[610px]"} `}>

        <CardIcon
          image='/icon_images/service_website.png'
          altText='Website icon'
          text='Web Development'
          delay="100"
        />
        <CardIcon
          image='/icon_images/service_branding.png'
          altText='Palette icon'
          text='Branding & Design'
          delay="200"
        />
        <CardIcon
          image='/icon_images/service_hosting.png'
          altText='Hard disks icon'
          text='Hosting'
          delay="300"
        />
        <CardIcon
          image='/icon_images/service_strategy.svg'
          altText='Balance icon'
          text='Strategy'
          delay="400"
        />
        <CardIcon
          image='/icon_images/service_marketing.png'
          altText='Chart icon'
          text='Marketing'
          delay="500"
        />
        <CardIcon
          image='/icon_images/service_seo.png'
          altText='magnifier loupe icon'
          text='SEO'
          delay="600"
        />
      </div>

      {/* Toggle Button */}
      <div className={`flex justify-center md:hidden ${isExpanded ? "hidden" : "block"}`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`button rounded-md px-[90px] mt-2`}
        >
          View All &#x27a4;
        </button>
      </div>
    </div>
  );
};

export default ServicesIcons;