const $tablero = $('#tablero');
const FILAS = 10;
const COLS = 10;

function creaTablero(filas, cols){
    $tablero.empty();
    for(let i=0; i<filas; i++){
        const $fila = $('<div>').addClass('fila');
        for(let j=0; j<cols ; j++){
            const $col = $('<div>').addClass('col oculta')
                                 .attr('data-row', i)
                                 .attr('data-col', j);
            if(Math.random()<0.1){
                $col.addClass('mina');
            }
            $fila.append($col);
        }
        $tablero.append($fila);
    }
}

function resetear(){
    creaTablero(FILAS, COLS);
}

function finPartida(esFinal){
    let msg = null;
    let icon = null;
    if(esFinal){
        msg = '¡Has ganado!';
        icon = 'fa fa-flag';
    }else{
        msg = '¡Has perdido!';
        icon = 'fa fa-bomb';
    }
    $('.col.mina').append($('<i>').addClass(icon));
    $('col:not(.mina)').html(function (){
        const $celda = $(this);
        const contador = getContadorMinas($celda.data('row'),$celda.data('col'));
        return contador === 0 ? '' : contador;
    });
    $('.col.oculta').removeClass('oculta');
    setTimeout(function (){
        alert(msg);
        resetear();
    }, 1000);
}

function revela(x,y){
    const aux = {};

    function repetir(i,j){
        if(i>= FILAS || j>=COLS || i<0 || j<0) 
            return;
        const key = `${i} ${j}`;

        if(aux[key]) 
            return;
        const $celda = $(`.col.oculta[data-row=${i}][data-col=${j}]`);
        const totalMinas = getContadorMinas(i,j);

        if(!$celda.hasClass('oculta') || $celda.hasClass('mina')){
            return;
        }

        $celda.removeClass('oculta');

        if(totalMinas){
            $celda.text(totalMinas);
            return;
        }
        //Comprueba sus celdas de alrededor
        for(let ai = -1; ai<=1; ai++){
            for(let aj =-1; aj<=1;aj++){
                repetir(i+ai,j+aj);
            }
        }
    }
    repetir(x,y);
}

function getContadorMinas(i,j){
    let contador = 0;

    for(let ai = -1 ; ai<=1; ai++){
        for(let aj = -1; aj<=1 ; aj++){
            const sumaI = i + ai;
            const sumaJ = j+aj;
            if(sumaI >=FILAS || sumaJ>=COLS || sumaI<0 || sumaJ<0) 
                continue;
            const $celda = $(`.col.oculta[data-row=${sumaI}][data-col=${sumaJ}]`);
            if($celda.hasClass('mina')) contador++;
        }
    }
    return contador;
}

$tablero.on('click', '.col.oculta', function (){
    const $celda = $(this);
    const fila = $celda.data('row');
    const col = $celda.data('col');

    if($celda.hasClass('mina')){
        finPartida(false);
    } else{
        revela(fila,col);
        const esFinal = $('.col.oculta').length === $('.col.mina').length;
        if(esFinal) {   
            finPartida(true);
        }
    }

});

resetear();