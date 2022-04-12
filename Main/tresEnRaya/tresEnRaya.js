let turno = 0;
let tablero = [
    [],[],[],
    [],[],[],
    [],[],[]
];

$(document).ready(function () {
    $("table").hide();
    $("#turno").hide();
    $(".botonPlay").on("click", function () {
        $(this).addClass("desaparecer");
        $("#titulo").fadeOut();
        $("#juego img").fadeOut( function () {
            $("#turno").fadeIn("slow");
            $("#turno").css({
                color: "#ffa600",
                textShadow: "1px 1px 1px #004b88"
            });
            $("#turno").css("visibility", "visible");
            $("table").fadeIn("slow");
            $("table").css("visibility", "visible");
        });
    });

    $(".casilla").on("click", function () {
        if ($(this).children("span").html() == "<br>") {
            actualizarTablero($(this));
            turno++;
            if (turno >= 5 && turno < 9) {
                let ganador = checkGanador();
                if (ganador) {
                    finPartida(ganador);
                    inicializar();
                    $("#turno").attr("style", "visibility: hidden");
                }
            } else if (turno == 9) {
                let ganador = checkGanador();
                if (!ganador) {
                    ganador = 0;
                }
                finPartida(ganador);
                inicializar();
                $("#turno").attr("style", "visibility: hidden");
            }
        }
    });
});

function actualizarTablero(elem) {
    if (turno%2 == 0) {
        elem.children("span").html("O");
        elem.css({ color: "#ffa600" });
        elem.children("span").css("visibility", "visible");
        actualizarArray(elem,1);
    } else {
        elem.children("span").html("X");
        elem.css({ color: "#004b88" });
        elem.children("span").css("visibility", "visible");
        actualizarArray(elem,2);
    }

    if ($("#turno").html() == "Turno: O") {
        $("#turno").html("Turno: X");
        $("#turno").css({
            color: "#004b88",
            textShadow: "1px 1px 1px #ffa600"
        });
    } else {
        $("#turno").html("Turno: O");
        $("#turno").css({
            color: "#ffa600",
            textShadow: "1px 1px 1px #004b88"
        });
    }
}

function actualizarArray(elem, valor) {
    let id = elem.attr("id");
    let posicion = id.charAt(id.length-1);
    switch (posicion) {
        case "1":
            tablero[0][0] = valor;
            break;

        case "2":
            tablero[0][1] = valor;
            break;

        case "3":
            tablero[0][2] = valor;
            break;

        case "4":
            tablero[1][0] = valor;
            break;

        case "5":
            tablero[1][1] = valor;
            break;

        case "6":
            tablero[1][2] = valor;
            break;

        case "7":
            tablero[2][0] = valor;
            break;

        case "8":
            tablero[2][1] = valor;
            break;

        case "9":
            tablero[2][2] = valor;
            break;
    }
}

function checkGanador() {
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] == tablero[i][1] && tablero[i][0] == tablero[i][2] && tablero[i][0] != undefined) {
            return tablero[i][0];
        }
        if (tablero[0][i] == tablero[1][i] && tablero[0][i] == tablero[2][i] && tablero[0][i] != undefined) {
            return tablero[i][0];
        }
    }

    if (tablero[0][0] == tablero[1][1] && tablero[0][0] == tablero[2][2] && tablero[0][0] != undefined) {
        return tablero[0][0];

    } else if (tablero[0][2] == tablero[1][1] && tablero[0][2] == tablero[2][0] && tablero[0][2] != undefined) {
        return tablero[0][2];

    } else {
        return false;
    }
}

function inicializar() {
    tablero = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];
    turno = 0;
    $("#turno").html("Turno: O");
    $(".casilla").children("span").html("<br>");
}

function finPartida(ganador) {
    let victoria = document.createElement("div");
    let textoVictoria;

    $(victoria).css({
        position: "absolute",
        top: "25vh",
        left: "25vw",
        width: "30vw",
        height: "55vh",
        padding: "50px",
        border: "solid 1px #ffa600",
        backgroundColor: "#004b88",
        textAlign: "center",
        fontStyle: "bold",
        fontSize: "3vw"
    });
    
    switch (ganador) {
        case 1:
            $(victoria).css({
                color: "#ffa600",
                textShadow: "1px 1px 1px #00BFFF"
            });
            textoVictoria = document.createTextNode("GANADOR: O");
            break;
        
        case 2:
            $(victoria).css({
                color: "#00BFFF",
                textShadow: "1px 1px 1px #ffa600"
            });
            textoVictoria = document.createTextNode("GANADOR: X");
            break;

        default:
            $(victoria).css({
                color: "#FFFFFF",
                textShadow: "1px 1px 1px #080808"
            });
            textoVictoria = document.createTextNode("EMPATE");
    }
    victoria.appendChild(textoVictoria);

    let retry = document.createElement("img");
    $(retry).attr("src", "imgTresEnRaya/botonRetryInvisible.png");
    $(retry).css({
        margin: "15% auto",
        width: "100px",
        height: "auto"
    });
    $(retry).on("click", function () {
        $("#turno").attr("style", "visibility: visible");
        $(victoria).remove();
    });

    let br = document.createElement("br");
    victoria.appendChild(br);
    victoria.appendChild(retry);
    document.body.appendChild(victoria);
}