"use client";
import Home from '@/app/components/Home/Home'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

export default function Outlet() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', // default
      offset: 0,                      // equivalent to threshold: 0
      delay: 300,                     // 0.5 seconds in ms
      duration: 600,                  // 0.7 seconds in ms
      easing: 'ease',                 // timingFunction
      once: true,                     // same as JOS once: true
      mirror: false,                  // do not animate again on scroll up
      anchorPlacement: 'top-bottom',  // similar to rootMargin in JOS
    })
  }, [])


  return (
    <>  
        <Home />
    </>
  );
}
