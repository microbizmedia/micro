"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      offset: 0,
      delay: 300,
      duration: 600,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null; // nothing visible, just initializes AOS
}

