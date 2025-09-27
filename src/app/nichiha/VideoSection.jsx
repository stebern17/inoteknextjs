"use client";

import React, { useState, useEffect } from "react";

function VideoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex justify-center items-center">
      {/* change the video source based on screen size */}
      <video
        src={
          isMobile
            ? "/videos/VideoProfilePotrait.webm"
            : "/videos/VideoProfile.webm"
        }
        controls
        className="min-h-screen object-cover hidden lg:block"
        controlsList="nodownload noremoteplayback"
        autoPlay
        muted
        loop
        playsInline
        onContextMenu={(e) => e.preventDefault()}
        preload="auto"
        poster="/images/company profile-1.jpg"
      ></video>
    </section>
  );
}
export default VideoSection;
