import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

const LazyVideo = ({
  src,
  poster,
  width = "100%",
  height = "100%",
  style = {},
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading before it enters the viewport
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={videoRef}
      sx={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f0f0", // Placeholder color
        ...style,
      }}
    >
      {isIntersecting ? (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        poster && (
          <img
            src={poster}
            alt="Video Poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        )
      )}
    </Box>
  );
};

export default LazyVideo;
