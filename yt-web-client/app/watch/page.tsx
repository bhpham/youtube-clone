"use client";

import { useSearchParams } from "next/navigation";

export default function Watch() {
  const videoPrefix = "https://storage.googleapis.com/bc-yt-processed-videos/";
  const videoSrc = useSearchParams().get("v");

  return (
    <div>
      <h1>Watch Page</h1>
      <video
        className="showVideo"
        width={640}
        height={360}
        controls
        src={videoPrefix + videoSrc}
      />
    </div>
  );
}
