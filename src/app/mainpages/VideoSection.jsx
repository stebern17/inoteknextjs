"use client";

import React from "react";

function VideoSection() {
  return (
    <section className="flex justify-center items-center">
      <video
        src="/videos/VideoProfile.mp4"
        controls
        className="lg:min-h-screen object-cover"
        controlsList="nodownload noremoteplayback"
        autoPlay
        muted
        loop
        playsInline
        onContextMenu={(e) => e.preventDefault()}
      ></video>
    </section>
  );
}
export default VideoSection;
