// src/components/Player.js
import React, { useState } from 'react';
import './Player.css';

const Player = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song);
    console.log(`Reproduciendo: ${song.title} - ${song.artist}`);
  };

  return (
    <div className="player">
      <button onClick={() => playSong({ title: 'Canción de ejemplo', artist: 'Artista de ejemplo' })}>
        Reproducir Canción
      </button>
      {currentSong && (
        <div className="song-info">
          <p>Reproduciendo: {currentSong.title} - {currentSong.artist}</p>
          <button onClick={() => setCurrentSong(null)}>Detener</button>
        </div>
      )}
    </div>
  );
};

export default Player;
