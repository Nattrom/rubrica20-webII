import React, { useEffect, useState } from 'react';
import './Content.css'; // Asegúrate de que la ruta sea correcta



const Content = () => {
  const deportes = [
    {
        img: 'https://www.mundodeportivo.com/us/files/image_449_220/uploads/2023/09/02/64f3616708962.jpeg',
        titulo: 'Futbol',
        descripcion: 'Deporte que se practica entre dos equipos de once jugadores que tratan de introducir un balón en la portería del contrario impulsándolo con los pies, la cabeza o cualquier parte del cuerpo excepto las manos y los brazos; en cada equipo hay un portero, que puede tocar el balón con las manos, aunque solamente dentro del área; vence el equipo que logra más goles durante los 90 minutos que dura el encuentro.',
        categoria: 'Equipo',
        equipo: 'Real Madrid',
        link: 'https://www.realmadrid.com/'
    },
    {
        img: 'https://s1.eestatic.com/2020/02/02/deportes/baloncesto/nba/baloncesto-nba_-national_basketball_association-nba_464464274_144115393_1706x960.jpg',
        titulo: 'Baloncesto',
        descripcion: 'Deporte que se practica, en una cancha rectangular, entre dos equipos de cinco jugadores que tratan de introducir el balón en la canasta contraria, que se encuentra a una altura de 3,05 m, valiéndose solo de las manos; los encestes valen uno, dos o tres puntos y gana el equipo que logra más puntos en los 40 minutos que dura el encuentro.',
        categoria: 'Equipo',
        equipo: 'Angeles Lakers',
        link: 'https://www.nba.com/lakers'
    },
    {
        img: 'https://s1.significados.com/foto/voleibol-cancha-y-red.jpg',
        titulo: 'Voleibol',
        descripcion: 'Deporte que se practica entre dos equipos de seis jugadores en una cancha rectangular dividida transversalmente por una red situada a 2,43 m de altura; el objetivo es golpear el balón con manos o brazos para pasarlo por encima de la red, evitando que la pelota bote en el campo propio; los partidos constan de tres mangas de 15 puntos cada una.',
        categoria: 'Equipo',
        equipo: 'Polonia',
        link: 'https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_voleibol_de_Polonia'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQuQ3k6weBuOh1AiJmuoxgd71xrZJFe5POA&usqp=CAU',
        titulo: 'Formula 1',
        descripcion: 'La Fórmula 1 es la cúspide del automovilismo y la categoría más alta de las carreras de monoplazas. La F1 compite con coches de ruedas abiertas (es decir, fuera del cuerpo principal del vehículo), tanto en circuitos permanentes como en circuitos urbanos.',
        categoria: 'Motor',
        equipo: 'Ferrari',
        link: 'https://www.formula1.com/'
    },
    {
        img: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/1/21/u4viahxlk4p1yvobv4nh/ogier-toyota-monaco',
        titulo: 'Rally',
        descripcion: 'Prueba deportiva de velocidad y resistencia para vehículos de cualquier tipo, habitualmente motos y automóviles, que se desarrolla en carreteras, caminos y pistas difíciles, y consiste en recorrer un itinerario determinado pasando diversas pruebas o controles y sin exceder los límites de un tiempo prefijado; suele disputarse por etapas.',
        categoria: 'Motor',
        equipo: 'Citroen',
        link: 'https://www.redbull.com/co-es/wrc-8-coches-mas-exitosos-historia-rally'
    },
    {
        img: 'https://images.ecestaticos.com/oJ29Hg4xeJCrdYE4WTjBzf5Cijk=/0x0:2008x1338/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F37c%2F7c6%2F42b%2F37c7c642b4e9ad5c6ab9f231c5ad6538.jpg',
        titulo: 'Motocross',
        descripcion: 'El Motocross es una disciplina del motociclismo que consiste en realizar una serie de pruebas con la motocicleta sobre circuitos todoterreno cerrados o libres cuyo rastro se remonta hasta el Cross Country.',
        categoria: 'Motor',
        equipo: 'Tim Gajser',
        link: 'https://es.wikipedia.org/wiki/Motocross'
    },
    { img: 'https://img.freepik.com/vector-gratis/vector-mesa-ruleta-casino-realista-rueda-fichas-negras-rojas-azules-aisladas-sobre-fondo-verde_1284-48487.jpg',
    titulo: 'Ruleta', 
    descripcion: 'La ruleta de casino es un juego de azar que se juega en una mesa con una rueda giratoria y una bola. Los jugadores apuestan en qué número o color caerá la bola cuando la rueda se detenga. Es uno de los juegos más icónicos de los casinos y ofrece diferentes tipos de apuestas y pagos en función de la elección de los jugadores',
    categoria:'Mesa', equipo: 'Marion Tinsley',
    link:'https://es.wikipedia.org/wiki/Marion_Tinsley'},
    { img: 'https://as1.ftcdn.net/v2/jpg/02/61/55/92/1000_F_261559202_abCwBFCRwTUsbz35xEOF8Yx6bipjiEE9.jpg',
    titulo: 'Poker', 
    descripcion: 'El póker es un juego de cartas que combina habilidad estratégica y suerte, en el que los jugadores apuestan en función de la combinación de cartas que tienen en la mano. El objetivo es ganar fichas o dinero al vencer a otros jugadores con mejores combinaciones de cartas o al hacer que se retiren. ',
    categoria:'Mesa', equipo: 'Harold Vanderbilt',
    link:'https://es.wikipedia.org/wiki/Harold_Vanderbilt'},
    {
        img: 'https://imagenes.extra.ec/files/image_full/uploads/2023/07/19/64b81ce34503e.jpeg',
        titulo: 'Ajedrez',
        descripcion: 'Juego de mesa en el que se enfrentan dos jugadores, cada uno de los cuales tiene 16 piezas de valores diversos que puede mover, según ciertas reglas, sobre un tablero dividido en 64 cuadros alternativamente blancos y negros; gana el jugador que consigue dar mate al rey de su contrincante.',
        categoria: 'Mesa',
        equipo: 'Magnus Carlsen',
        link: 'https://www.chess.com/es/article/view/10-mejores-jugadores-historia'
    }
];

  const [lista, setLista] = useState([]);
  const [categoriaSelec, setCategoriaSelec] = useState('');

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    const combinedCards = [...deportes, ...savedCards];
    setLista(combinedCards);
  }, [categoriaSelec]);

  const CategoriaChange = (event) => {
    setCategoriaSelec(event.target.value);
  };

  const filteredSports = categoriaSelec
    ? lista.filter((sports) => sports.categoria === categoriaSelec)
    : lista;

    return (
      <div className="container mt-4">
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={categoriaSelec}
            onChange={CategoriaChange}
          >
            <option value="">Seleccione una categoría para filtrar.</option>
            <option value="Motor">Motor</option>
            <option value="Mesa">Mesa</option>
            <option value="Equipo">Equipo</option>
          </select>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
          {filteredSports.map((sports, index) => (
            <div className="col-md-6 col-sm-6 mb-3 col-lg-4" key={index}>
              <div className="card shadow-lg zoom-on-hover d-flex h-100">
                <div className="card-image-container">
                  <img
                    className="card-img-top card-image"
                    src={sports.img}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-titulo">{sports.titulo} </h4>
                  <p className="card-text">{sports.descripcion}</p>
                  <p className="card-text">
                    <span className="fw-bold">Categoría:</span> {sports.categoria}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">Equipo:</span>{' '}
                    <a target="_blank" href={sports.link}>
                      {sports.equipo}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Content;