import React from "react";
import "../styles/library.css"

const Librarysong = ({ isPlaying,song, songs, setCurrentSong, id, audioRef}) => {
    const songSelectHandler = async () => {
       await setCurrentSong(song);
       audioRef.current.play();
       if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
       }
    } 

    return(
        <div onClick={songSelectHandler} className="library-song">
                <img src={song.cover} alt={song.name}></img>
                <div className="song-description">
                    <h3>{song.name}</h3>
                    <h4>{song.artist}</h4>
                </div>
                
        </div>
    )
}

export default Librarysong;
