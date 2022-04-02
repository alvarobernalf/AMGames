USE AMGames;

CREATE TABLE usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(20) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    genero VARCHAR(10),
    edad TINYINT,
    aficiones VARCHAR(20),
    pais VARCHAR(20),
    ciudad VARCHAR(20),
    avatar VARCHAR(50)
);

CREATE TABLE juego(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomJuego VARCHAR(50) NOT NULL,
    maxJugadores TINYINT NOT NULL,
    etiquetas VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    guardar BOOLEAN NOT NULL
);

CREATE TABLE comentario(
    id INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    id_usuario INT NOT NULL,
    valoracion ENUM("LIKE","DISLIKE") NOT NULL,
    comentario VARCHAR(280),
    fecha DATETIME NOT NULL,
    bloqueado BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE tresEnRaya(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    modo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE snake(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    userHighscore VARCHAR(20),
    puntuacionHighScore TINYINT,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE conectaCuatro(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    modo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE patataCaliente(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    modo VARCHAR(20) NOT NULL,
    vidas INT DEFAULT 2,
    temaPalabras VARCHAR(50) NOT NULL,
    ficheroPalabras VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);


CREATE TABLE carreraCaballos(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    ganador TINYINT NOT NULL,
    apuesta TINYINT NOT NULL,
    coins INT DEFAULT 100,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE buscaminas(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    userHighscore VARCHAR(20),
    puntuacionHighScore TINYINT,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE ajedrez(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    ficheroPartida VARCHAR(50) NOT NULL,
    ficheroJugadas VARCHAR(255),
    modo VARCHAR(20) NOT NULL,
    turnosJugados INT NOT NULL,
    jugadorActual VARCHAR(20) NOT NULL,
    acabada BOOLEAN NOT NULL,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);

CREATE TABLE hundirLaFlota(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    barcosMaquina TINYINT NOT NULL,
    barcosJugador TINYINT NOT NULL,
    ficheroPartidaGuardada VARCHAR(50),
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE
);


CREATE TABLE FL_poderes(
    id_poder INT AUTO_INCREMENT PRIMARY KEY,
    nomefecto VARCHAR(50) NOT NULL
);

CREATE TABLE FL_equipo(
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nomequipo VARCHAR(50) NOT NULL,
    color ENUM("Blanco","Morado","Rojo","Amarillo","Verde") NOT NULL,
    poder INT NOT NULL,
    FOREIGN KEY (poder) REFERENCES FL_poderes(id_poder) ON DELETE CASCADE
);

CREATE TABLE FootballLegends(
    id_partida INT AUTO_INCREMENT,
    id_juego INT NOT NULL,
    equipoLocal INT NOT NULL,
    equipoVisitante INT NOT NULL,
    ganador VARCHAR(20),
    resultado VARCHAR(20),
    tiempo SMALLINT DEFAULT 120,
    PRIMARY KEY (id_partida),
    FOREIGN KEY (id_juego) REFERENCES juego(id) ON DELETE CASCADE,
    FOREIGN KEY (equipoLocal) REFERENCES FL_equipo(id_equipo) ON DELETE CASCADE,
    FOREIGN KEY (equipoVisitante) REFERENCES FL_equipo(id_equipo) ON DELETE CASCADE
);