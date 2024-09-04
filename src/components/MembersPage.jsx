"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import MemberSection from "@/components/MemberSection";
import MemberHero from "@/components/MemberHero";
import { useEffect, useState } from "react";

const MembersPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize); // Run on resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
  }, []);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.7]);
  const x = useTransform(scrollYProgress, [0, 0.1], ["-50%", "-100%"]);
  const y = useTransform(scrollYProgress, [0, 0.1], ["-50%", "-50%"]);

  return (
    <div className="members-page">
      {!isMobile && (
        <motion.div className="meet-the-team" style={{ scale, x, y }}>
          <MemberHero />
        </motion.div>
      )}
      {isMobile && (
        <div className="meet-the-team">
          <MemberHero />
        </div>
      )}
      <div className="members-cards">
        <MemberSection section={"Core"} />
        {/* <MemberSection section={"Executive"} />
        <MemberSection section={"Members"} /> */}
      </div>
    </div>
  );
};

export default MembersPage;
