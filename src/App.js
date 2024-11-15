import React from 'react';
import NavBar from './components/NavBar';
import Player from './components/Player';
import SongList from './components/SongList';

function App() {
  return (
    <div>
      <NavBar />
      <SongList />
      <Player />
    </div>
  );
}

export default App;
