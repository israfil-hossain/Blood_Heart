'use client';

import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.div
      className="fixed top-18 left-0 right-0 h-2 bg-red-500 origin-[0] z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
