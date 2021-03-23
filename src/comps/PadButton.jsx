import React, { useState, useEffect } from "react";

const PadButton = ({ clip, volume, setRecording }) => {
  const [active, setActive] = useState(false);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.currentTime = 0;
    audioTag.volume = volume;
    audioTag.play();
    setRecording(clip.id);
    console.log(audioTag.volume)
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.keyCode === clip.keyCode) {
      playSound();
    }
  };

  return (
    <div
      onClick={playSound}

      id={clip.id}
      className={`drum-pad btn  p-4  ${
        active && "drum-success "
      }`}
    >
      <audio className='clip' id={clip.keyTrigger} src={clip.url}></audio>
      <h2>{clip.keyTrigger}</h2>
    </div>
  );
};

export default PadButton;
