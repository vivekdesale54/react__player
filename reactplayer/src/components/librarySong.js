import React from 'react';
import '../styles/library.css';

const Librarysong = ({
  isPlaying,
  songs,
  setSongs,
  setCurrentSong,
  id,
  audioRef,
  song,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    audioRef.current.play();
    //Add Active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  //If the song is playing
  if (isPlaying) audioRef.current.play();
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default Librarysong;
