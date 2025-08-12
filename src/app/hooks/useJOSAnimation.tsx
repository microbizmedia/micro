'use client'
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
// @ts-ignore
import JOS from 'jos-animation';

// Custom hook for initializing JOS animations
const useJOSAnimation = () => {
   const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    JOS.init({
      passive: false,
      once: true,
      animation: 'fade-up',
      timingFunction: 'ease',
      threshold: 0,
      delay: 0.5,
      duration: 0.7,
      scrollDirection: 'down',
      rootMargin: '0% 0% 15% 0%',
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    JOS.refresh();
  }, [pathname, searchParams]);

    // Scroll to hash target and refresh JOS
  // useEffect(() => {
  //   if (location.hash) {
  //     const el = document.querySelector(location.hash);
  //     if (el) {
  //       setTimeout(() => {
  //         el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //         setTimeout(() => {
  //           JOS.refresh();
  //         }, 0.1);
  //       }, 0.1);
  //     }
  //   }
  // }, [location.hash]);

};

export default useJOSAnimation;
