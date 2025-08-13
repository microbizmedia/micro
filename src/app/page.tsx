"use client";
import Home from '@/app/components/Home/Home'
import { useEffect } from "react";
import JOS from "jos-animation/dist/jos.js";
import "jos-animation/dist/jos.css";
import { usePathname } from "next/navigation";

export default function Outlet() {
   const pathname = usePathname();
  useEffect(() => {
    JOS.init({
      delay: 0.1,
      duration: 0.4,
      once: true,
      scrollDirection: 'all',
      rootMargin: '0% 0% 40px 0%',
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
