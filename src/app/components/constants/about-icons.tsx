'use client'
import { useState, useEffect } from 'react'
import CardIcon from './icon-card'

interface AboutUsIconsProps { title: string; }

const AboutUsIcons: React.FC<AboutUsIconsProps> = ({ title }) => {



  const [isExpanded, setIsExpanded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)


  const about = [
    { image: '/icon_images/about_projects.png', altText: 'Rocket Icon', text: 'Total Projects Launch', },
    { image: '/icon_images/about_awards.png', altText: 'Medal icon', text: 'Behance Design Award  ', },
    { image: '/icon_images/about_technology.png', altText: 'Technology icon', text: 'Powered by Modern Technology ', },
    { image: '/icon_images/about_team.png', altText: 'Persons icon', text: 'A Dedicated Team ', },
    { image: '/icon_images/about_profits.png', altText: 'Chart icon', text: 'Raised Profits', },
    { image: '/icon_images/about _cycle.png', altText: 'Recycling icon', text: 'Full Cycle All-In-One', },
  ]



  // Check screen width and update isDesktop
  useEffect(() => {
    const handleResize = () => {
      const lg = 1024 // Tailwind lg breakpoint
      setIsDesktop(window.innerWidth >= lg)
    }

    handleResize() // initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Mobile shows only 2 cards if not expanded
  const visibleAbout = isDesktop || isExpanded ? about : about.slice(0, 2)
  return (
    <div className='mb-8 lg:mb-12'>
      <h2 className=' mx-auto pb-4 lg:pb-8 lg:pt-8 max-w-[715px] text-center' data-aos="zoom-in" >{title}</h2>
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {visibleAbout.map((service, index) => (

            <CardIcon
              key={index}
              delay={`${100 * (index + 1)}`}
              image={service.image}
              imageSize="w-[140px]"
              altText={service.altText}
              text={service.text}
            />

          ))}
        </div>
      </div>

      {/* Toggle Button: only show on mobile when not expanded */}
      {!isExpanded && (
        <div className="flex justify-center mt-4 lg:hidden">
          <button
            onClick={() => setIsExpanded(true)}
            data-aos="zoom-in"
            className="button rounded-md px-[90px]"
          >
            View All &#x27a4;
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutUsIcons;