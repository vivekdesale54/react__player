import React from 'react';
import Librarysong from './librarySong';
import '../styles/library.css';

const Library = ({ isPlaying, songs, setCurrentSong, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">

        {songs.map((song) => (
          <Librarysong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
