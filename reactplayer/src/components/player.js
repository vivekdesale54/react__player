import React from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft, FaPlay,FaPause } from 'react-icons/fa';
import '../styles/player.css';
const Player = ({ songInfo, setSongInfo, audioRef, isPlaying, setIsPlaying }) => {

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }
  
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          onChange={dragHandler}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FaArrowCircleLeft className="play-back" />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" />
        )}
        <FaArrowCircleRight className="play-next" />
      </div>
    </div>
  );
};

export default Player;
