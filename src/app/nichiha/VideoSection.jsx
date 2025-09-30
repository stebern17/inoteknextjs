"use client";

import React, { useState, useEffect } from "react";

function VideoSection() {
  return (
    <section id="companyprocrsl" className="flex justify-center items-center">
      {/* change the video source based on screen size */}
      <video
        src="/videos/VideoProfile.webm"
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
        width={1920}
        height={1080}
      ></video>
      <video
        src="/videos/VideoProfilePotrait.webm"
        controls
        className="min-h-screen object-cover block lg:hidden"
        controlsList="nodownload noremoteplayback"
        autoPlay
        muted
        loop
        playsInline
        onContextMenu={(e) => e.preventDefault()}
        preload="auto"
        poster="/images/company profile-1.jpg"
        width={1080}
        height={1920}
      ></video>
    </section>
  );
}
export default VideoSection;
