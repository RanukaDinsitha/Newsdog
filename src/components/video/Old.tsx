import React, { useRef, useState } from "react";

const OldPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const seekTo = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeekChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Array.isArray(newValue)
        ? newValue[0]
        : newValue;
    }
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="https://www.youtube.com/embed/hPt1gUE1zAc"
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
      {/* Additional controls can be added here */}
    </div>
  );
};

export default OldPlayer;
