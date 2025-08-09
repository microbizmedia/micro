import { useState } from 'react'
import SwiperIcon from './services-icon'
import totalProjectsLunched from '../../assets/icon_images/Total_Projects_Launched_icon.png'
import awardsIcon from '../../assets/icon_images/Be_microbiz_awards_icon_v2.png'
import pulledByTheBootstraps from '../../assets/icon_images/Pulled_By_The_Bootstraps_icon.png'
import DedicatedTeam from '../../assets/icon_images/A_Dedicated_Team_icon.png'
import fullCycle from '../../assets/icon_images/Full _Cycle_All_-_In_-_One_icon.png'
import raisedProfits from '../../assets/icon_images/Raised_Profits_icon.png'

const aboutUsIcons = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='mb-4 lg:mb-12'>
      <h2 className='jos mx-auto pb-4 lg:pb-8 lg:pt-8 max-w-[715px] text-center' >{title}</h2>
      <div className={`flex flex-wrap justify-center gap-8 
      
        overflow-hidden transition-all duration-300 
        ${isExpanded ? "max-h-full" : "max-h-[610px]"}
        `}>
        <SwiperIcon
          image={totalProjectsLunched}
          text='Total Projects Lunched'
          imageSize="w-[140px]"
        />
        <SwiperIcon
          image={awardsIcon}
          text='Behance Design Award'
        imageSize="w-[140px]"
        />
        <SwiperIcon
          image={pulledByTheBootstraps}
          text='Pulled By The Bootstraps'
          imageSize="w-[140px]"
        />
        <SwiperIcon
          image={DedicatedTeam}
          text='A Dedicated Team'
          imageSize="w-[140px]"
        />
        <SwiperIcon
          image={raisedProfits}
          text='Raised Profits'
          imageSize="w-[140px]"
        />
        <SwiperIcon
          image={fullCycle}
          text='Full Cycle All-In-One'
          imageSize="w-[140px]"
        />
      </div>
       {/* Toggle Button */}
       <div className='flex justify-center'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`button transition-all duration-300  inline-block sm:hidden bg-colorWhite text-colorBackground rounded-md px-[90px] my-4
         ${isExpanded ? "hidden" : "block"}
        `}
      >
        View All &#x27a4;
      </button>
      </div>
    </div>
  );
};

export default aboutUsIcons;