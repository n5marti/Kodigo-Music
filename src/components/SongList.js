// src/components/SongList.js
import React from 'react';

const SongList = () => {
  const songs = [
    { id: 1, title: 'Song One', artist: 'Artist A' },
    { id: 2, title: 'Song Two', artist: 'Artist B' },
    { id: 3, title: 'Song Three', artist: 'Artist C' },
  ];

  return (
    <div>
      <h2>Top Songs</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <p>{song.title} - {song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

