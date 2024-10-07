import React from 'react';

const FavoritesListComponent = ({ favorites }) => {
  return (
    <ul>
      {favorites.map((favorite, index) => (
        <li key={index}>
          <a href={favorite.url} target="_blank" rel="noopener noreferrer">
            {favorite.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FavoritesListComponent;
