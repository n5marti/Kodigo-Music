// src/pages/Search.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const songs = [
    'Song One', 'Song Two', 'Song Three', 'Song Four'
  ];
  const [results, setResults] = useState([]);

  const onSubmit = data => {
    const matches = songs.filter(song => song.toLowerCase().includes(data.searchTerm.toLowerCase()));
    setResults(matches);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchTerm", { required: true, minLength: 3 })} placeholder="Buscar canciones..." />
        {errors.searchTerm && <p>Se requiere un término de búsqueda de al menos 3 caracteres.</p>}
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {results.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

