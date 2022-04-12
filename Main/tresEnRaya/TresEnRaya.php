<!DOCTYPE html>
<html lang="es-ES">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AMGames - Tres en raya</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="tresEnRaya.css">
    <script src="jquery.js"></script>
    <script src="tresEnRaya.js"></script>
</head>
<body>
    <header id="cabecera">
        <div>
            <img src="../img/AMGames_logo.png">
        </div>
    </header>

    <section id="juego">
        <h1 id="titulo">TRES EN RAYA</h1>
        <img id="imgFondo" src="imgtresEnRaya/TresEnRaya.jpg" width="100px" height="100px" alt="Imagen de muestra Tres en Raya">
        <img id="botonVSMaquina" class="botonPlay" src="imgTresEnRaya/VSMaquina.png" width="100px" height="100px" alt="Jugar contra la máquina">
        <img id="botonVSPlayer" class="botonPlay" src="imgTresEnRaya/VSPlayer.png" width="100px" height="100px" alt="Jugar contra otro jugador">

        <h1 id="turno">Turno: O</h1>
        <table>
            <tr>
                <td id="casilla1" class="casilla"><span><br></span></td>
                <td id="casilla2" class="casilla"><span><br></span></td>
                <td id="casilla3" class="casilla"><span><br></span></td>
            </tr>
            <tr>
                <td id="casilla4" class="casilla"><span><br></span></td>
                <td id="casilla5" class="casilla"><span><br></span></td>
                <td id="casilla6" class="casilla"><span><br></span></td>
            </tr>
            <tr>
                <td id="casilla7" class="casilla"><span><br></span></td>
                <td id="casilla8" class="casilla"><span><br></span></td>
                <td id="casilla9" class="casilla"><span><br></span></td>
            </tr>
        </table>
    </section>

    <aside id="sugeridos">
        <h1>Más juegos</h1>
    </aside>
</body>
</html>