'use client'
import { useState, useEffect } from 'react'
import CardIcon from './icon-card'

const ServicesIcons = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const services = [
    { image: '/icon_images/service_website.png', altText: 'Website icon', text: 'Web Development',  },
    { image: '/icon_images/service_branding.png', altText: 'Palette icon', text: 'Branding & Design', },
    { image: '/icon_images/service_hosting.png', altText: 'Hard disks icon', text: 'Hosting',  },
    { image: '/icon_images/service_strategy.svg', altText: 'Balance icon', text: 'Strategy',  },
    { image: '/icon_images/service_marketing.png', altText: 'Chart icon', text: 'Marketing', },
    { image: '/icon_images/service_seo.png', altText: 'Magnifier loupe icon', text: 'SEO', },
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
  const visibleServices = isDesktop || isExpanded ? services : services.slice(0, 2)
  return (
    <div className="mb-6 lg:mb-16">
      <h2 className="mx-auto pb-4 lg:pb-8 max-w-[715px] text-center" data-aos="zoom-in">
        {title}
      </h2>

      <div className="flex justify-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {visibleServices.map((service, index) => (
            <CardIcon
              key={index}
              image={service.image}
              altText={service.altText}
              text={service.text}
              delay={`${100 * (index + 1)}`}
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
  )
}

export default ServicesIcons
