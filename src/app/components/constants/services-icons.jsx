'use client'
import { useState } from 'react'
import CardIcon from './services-icon'
const ServicesIcons = ({ title }) => {


const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="mb-6 lg:mb-16">
      <h2 className=' mx-auto   pb-4 lg:pb-8   max-w-[715px] text-center 'data-aos='zoom-in' >{title}</h2>
       <div className={`flex flex-wrap justify-center gap-8 overflow-hidden transition-all duration-300 
         ${isExpanded ? "max-h-full" : "max-h-[610px]"} `}>

        <CardIcon
          image='/icon_images/web_development_icon.png'
          text='Web Development'
          delay="0"
        />
        <CardIcon
          image='/icon_images/branding_and_design_Icon.png'
          text='Branding & Design'
           delay="0.1"
        />
        <CardIcon
          image='/icon_images/hosting_icon.png'
          text='Hosting'
           delay="0.2"
        />
        <CardIcon
          image='/icon_images/icon_strategy.svg'
          text='Strategy'
           delay="0.3"
        />
        <CardIcon
          image='/icon_images/marketing_icon.png'
          text='Marketing'
           delay="0.4"
        />
        <CardIcon
          image='/icon_images/seo_icon.png'
          text='SEO'
           delay="0.5"
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