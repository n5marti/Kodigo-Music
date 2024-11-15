// src/pages/Home.js
import React from 'react';
import SongList from '../components/SongList';
import Player from '../components/Player';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Kodigo Music</h1>
      <SongList />
      <Player />
    </div>
  );
};

export default Home;

