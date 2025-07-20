import React, { useState } from 'react';
import "./Home.css";
import EmojiButton from '../Component/EmojiButton/EmojiButton';
import ColorButton from '../Component/ColorButton/ColorButton';
import ImgRotate from '../assets/rotate.png';
import ImgPulse from '../assets/pulse.png';
import ImgReset from '../assets/reset.png';
import CommonButton from '../Component/CommonButton/CommonButton'; 
import Footer from '../Component/Footer/Footer';
import { Toaster, toast } from 'react-hot-toast';


function Home() {
  const [emoji, setEmoji] = useState("🚀");
  const [sliderValue, setSliderValue] = useState(50);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [angle, setAngle] = useState(0); 
  const [isPulsing, setIsPulsing] = useState(false);

  const togglePulse = () => setIsPulsing(prev => !prev);

  const handleReset = () => {
  setEmoji("🚀");
  setSliderValue(50);
  setBgColor("#ffffff");
  setAngle(0);
  setIsPulsing(false);
  toast.success ("All effects have been reset!");
};

  return (
    <div className='page-wrapper'>
      <div className="gradient-bg"/>
        <div className="main-container">
          <div className="content">
            <h1 className='title'>
            Vibe Selector 
              <span className="highlight">Moodify</span>
            </h1>
            <p className="description">
            Moodify – Mood Swings? Emoji Things!
            </p>

        <div className="emoji-display" 
          style={{ backgroundColor: bgColor }}>
          <span
            style={{ transform: `rotate(${angle}deg)`, fontSize: `${sliderValue}px` }}
            className={`emoji ${isPulsing ? "pulse" : ""}`}>
            {emoji}
          </span>
        </div>

        <input
          type="range"
          min="10"
          max="130"
          className="slider"
          onChange={(e) => setSliderValue(e.target.value)}
          value={sliderValue}
        />

        <div className="button-group">
          <CommonButton 
            label="Rotate" 
            icon={ImgRotate} 
            onClick={() => setAngle(prev => prev + 45)} 
          />
          <CommonButton
            label={isPulsing ? "Stop Pulse" : "Start Pulse"}
            icon={ImgPulse} 
            onClick={togglePulse}
          />
        </div>

          <CommonButton 
            label="Reset" 
            icon={ImgReset} 
            onClick={handleReset}
          />
          <Toaster />

        <div className="emoji-picker">
          <EmojiButton emoji={"🚀"} setEmoji={setEmoji} currentEmoji={emoji}/>  
          <EmojiButton emoji={"🦄"} setEmoji={setEmoji} currentEmoji={emoji} />
          <EmojiButton emoji={"🌈"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"🍕"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"🎧"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"🔥"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"🌻"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"🏡"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"⭐"} setEmoji={setEmoji} currentEmoji={emoji}/>
          <EmojiButton emoji={"📚"} setEmoji={setEmoji} currentEmoji={emoji}/>
        </div>

        <div className="color-picker">
          <ColorButton bgColor="#fef9a8" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#d1fae5" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#bfdbfe" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#fca5a5" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#6ee7b7" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#fce7f3" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#ffdada" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#7dd3fc" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#f9a8d4" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#e9d5ff" setBgColor={setBgColor} currentBg={bgColor} />
          <ColorButton bgColor="#86efac" setBgColor={setBgColor} currentBg={bgColor} />
        </div>
       
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
