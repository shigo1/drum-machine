import React, { useState, useEffect } from "react";
import PadButton from "./PadButton";
 

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const DrumPad = () => {
  //volume hook
  const [volume, setVolume] = useState(1);

  //recording
  const [recording, setRecording] = useState("");

  //bank
  const [bank, setBank] = useState(bankOne);

  const handleBank = () => {
    if (bank === bankOne) {
      setBank(bankTwo);
    } else if (bank === bankTwo) {
      setBank(bankOne);
    }
  };

  useEffect(() => {
    if (bank === bankOne) {
      setRecording("bank1");
    } else if (bank === bankTwo) {
      setRecording("bank2");
    }
  }, [bank]);

  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  return (
    <>
    
      <div id='drum-machine' className='   min-vh-100 text-white  '>
      
        <div id='display' className='text-center '>
          <div className='button-container'>
            {bank.map((e) => {
              return (
                <PadButton
                  clip={e}
                  key={e.id}
                  volume={volume}
                  setRecording={setRecording}
                />
              );
            })}
          </div>

          <div className='settings'>
            <h4 className='vol'>Volume</h4>
            <input
              onChange={(e) => setVolume(e.target.value)}
              type='range'
              step='0.01'
              value={volume}
              max='1'
              min='0'
              className='w-50 volume-bar  '
            />
            <br />

            <div
              style={{ width: "200px", height: "40px" }}
              className='  p-2 m-auto d-flex  justify-content-center align-items-center bank'
            >
              {recording}
            </div>
            <br />
            <div
              style={{ width: "150px", height: "40px" }}
              className=' m-auto  p-2 bank-select d-flex justify-content-center align-items-center'
              onClick={handleBank}
            >{`${bank === bankOne ? "Switch" : "Switch"}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrumPad;
