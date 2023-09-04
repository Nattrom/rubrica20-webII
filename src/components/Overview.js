import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Overview.module.css';
function Overview() {
  // Estado para almacenar las tarjetas favoritas
  const [favoritePilots, setFavoritePilots] = useState([]);

  // Función para cargar los favoritos desde el localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritePilots(storedFavorites);
  }, []);

  // Datos de los pilotos
  const pilotsData = [
    {
      id: 1,
      name: 'Max Verstappen',
      description: 'Red Bull Racing',
      num:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MAXVER01.png.transform/2col/image.png',

      image:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png',
      pais:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Netherlands.jpg.transform/2col/image.jpg',
    },
    {
      id: 2,
      name: 'Sergio Pérez',
      description: 'Red Bull Racing.',
      num:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SERPER01.png.transform/2col/image.png',

      image:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png',
      pais:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Mexico.jpg.transform/2col/image.jpg',
    },
    {
      id: 3,
      name: 'Fernando Alonso',
      description: 'Aston Martin.',
      num:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/FERALO01.png.transform/2col/image.png',
      image:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png',
      pais:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col/image.jpg',
    },
    {
      id: 4,
      name: 'Lewis Hamilton',
      description: 'Mercedes.',
      num:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LEWHAM01.png.transform/2col/image.png',

      image:
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
      pais:
        'https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col/image.jpg',
    },
  ];

  // Función para agregar un piloto a favoritos
  const addToFavorites = (pilot) => {
    const updatedFavorites = [...favoritePilots, pilot];
    setFavoritePilots(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Almacena en el localStorage
  };

  // Función para eliminar un piloto de favoritos
  const removeFromFavorites = (pilot) => {
    const updatedFavorites = favoritePilots.filter((p) => p.id !== pilot.id);
    setFavoritePilots(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Actualiza el localStorage
  };

  // Función para comprobar si un piloto está en favoritos
  const isFavorite = (pilot) => {
    return favoritePilots.some((p) => p.id === pilot.id);
  };

  return (
    <div className={styles['overview-container']}>
      <h1>F1 Drivers 2023</h1>
      <h2>4 pilotos más destacados en la Formula 1</h2>
      <div className={styles['card-container']}>
        {pilotsData.map((pilot) => (
          <div className={styles['card']} key={pilot.id}>
            <img src={pilot.num} alt={pilot.name} />
            <img src={pilot.image} alt={pilot.name} />
            <div className={styles['name-container']}>
              <h2 className={styles['first-name']}>{pilot.name.split(' ')[0]}</h2>
              <h2 className={styles['last-name']}>{pilot.name.split(' ')[1]}</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={pilot.pais}
                  alt={pilot.name}
                  style={{
                    width: '60px',
                    height: '30px',
                    marginLeft: '10px',
                  }}
                />
              </div>
            </div>
            <p>{pilot.description}</p>
            {isFavorite(pilot) ? (
              <FontAwesomeIcon
                icon={faHeart}
                className={`${styles['favorite-icon']} ${styles['favorited']}`}
                onClick={() => removeFromFavorites(pilot)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                className={styles['favorite-icon']}
                onClick={() => addToFavorites(pilot)}
              />
            )}
          </div>
        ))}
      </div>
      <h2>Favorites</h2>
      <div className={styles['favorite-card-container']}>
        {favoritePilots.map((pilot) => (
          <div className={styles['favorite-card']} key={pilot.id}>
            <img src={pilot.image} alt={pilot.name} />
            <h3>{pilot.name}</h3>
            <p>{pilot.description}</p>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${styles['favorite-icon']} ${styles['favorited']}`}
              onClick={() => removeFromFavorites(pilot)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;


