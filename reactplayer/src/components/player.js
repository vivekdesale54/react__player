import React from 'react';
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaPlay,
  FaPause,
} from 'react-icons/fa';
import '../styles/player.css';
import { useEffect } from 'react';
const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  songs,
  setSongs,
  currentSong,
}) => {
  useEffect(() => {
    // Update active state only if needed
    setSongs((songs) =>
      songs.map((song) => {
        if (song.id === currentSong.id && !song.active) {
          return { ...song, active: true };
        } else if (song.id !== currentSong.id && song.active) {
          return { ...song, active: false };
        } else {
          return song; // no change
        }
      })
    );
  }, [currentSong, setSongs]);

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
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackerHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  //Add styles
  const trackAnimator = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            onChange={dragHandler}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={trackAnimator} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FaArrowCircleLeft
          onClick={() => skipTrackerHandler('skip-back')}
          className="play-back"
        />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" />
        )}
        <FaArrowCircleRight
          onClick={() => skipTrackerHandler('skip-forward')}
          className="play-next"
        />
      </div>
    </div>
  );
};

export default Player;
