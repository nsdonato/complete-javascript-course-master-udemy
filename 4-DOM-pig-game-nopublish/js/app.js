(function(){
    var puntuaciones, puntuacionRedondeada, jugadorActivo, estaJugando;

    init();
    
    document.getElementById('btn-tirar').addEventListener('click', function() {
    
        if(estaJugando) {
    
            document.getElementById('btn-mantener').style.display = 'block';
    
            // 1. Tiro numeros random
            var dado1 = Math.floor(Math.random() * 6) + 1;
            var dado2 = Math.floor(Math.random() * 6) + 1;
    
            // 2. Muestro el resultado
            document.getElementById('dado-1').style.display = 'block';
            document.getElementById('dado-2').style.display = 'block';
            document.getElementById('dado-1').src = 'img/dado-' + dado1 + '.png';
            document.getElementById('dado-2').src = 'img/dado-' + dado2 + '.png';
    
            /* 3. Verifico que no haya salido doble 6 o al menos un 1 en ambos dados, para resetear puntuación y ceder el turno,
                  o sumo y sigo jugando. */
            if  (dado1 === 6 && dado2 === 6)  {
                // El jugador pierde la puntuación completa y cede el turno
                puntuaciones[jugadorActivo] = 0;
                document.getElementById('btn-mantener').style.display = 'none';
                document.querySelector('#puntuacion-' + jugadorActivo).textContent = '0';
                siguienteJugador();
            } else if (dado1 === 1 || dado2 === 1){
                // El jugador pierde la puntuación actual y cede su turno
                puntuacionRedondeada = 0;
                document.getElementById('btn-mantener').style.display = 'none';
                siguienteJugador();
            } else{
               document.getElementById('btn-mantener').style.display = 'block';
                // Realizo la suma, actualizo y sigo juando
                puntuacionRedondeada += dado1 + dado2;
                document.querySelector('#actual-' + jugadorActivo).textContent = puntuacionRedondeada;
            }
    
        }    
    });
    
    
    document.getElementById('btn-mantener').addEventListener('click', function() {
    
        if (estaJugando) {
            // Agrego la puntuación actual a la puntuación global
            puntuaciones[jugadorActivo] += puntuacionRedondeada;
            // Actualizo la UI
            document.querySelector('#puntuacion-' + jugadorActivo).textContent = puntuaciones[jugadorActivo];
            
            var input = document.querySelector('.final-puntuacion').value;
            var puntajeGanador;
            
            // Undefined, 0, null or "" es forzado (coerced) a false
            // cualquier otra cosa es forzada a true
            if(input) {
                puntajeGanador = input;
            } else {
                puntajeGanador = 100;
            }
            
            // Chequeo si un jugador ganó
            if (puntuaciones[jugadorActivo] >= puntajeGanador) {
                 document.getElementById('btn-mantener').style.display = 'none';
                 document.getElementById('btn-tirar').style.display = 'none';
                document.querySelector('#nombre-' + jugadorActivo).textContent = 'Ganador!';
                document.getElementById('dado-1').style.display = 'none';
                document.getElementById('dado-2').style.display = 'none';
                document.querySelector('.jugador-' + jugadorActivo + '-panel').classList.add('ganador');
                document.querySelector('.jugador-' + jugadorActivo + '-panel').classList.remove('activo');
                estaJugando = false;
            } else {
                siguienteJugador();
            }
        }
    });
    
    
    function siguienteJugador() {
        
        jugadorActivo === 0 ? jugadorActivo = 1 : jugadorActivo = 0;
        puntuacionRedondeada = 0;
    
        document.getElementById('btn-mantener').style.display = 'none';
    
        document.getElementById('actual-0').textContent = '0';
        document.getElementById('actual-1').textContent = '0';
    
        document.querySelector('.jugador-0-panel').classList.toggle('activo');
        document.querySelector('.jugador-1-panel').classList.toggle('activo');
    
        document.getElementById('dado-1').style.display = 'none';
        document.getElementById('dado-2').style.display = 'none';
    }
    
    document.getElementById('btn-nuevo').addEventListener('click', init);
    
    function init() {
        puntuaciones = [0, 0];
        jugadorActivo = 0;
        puntuacionRedondeada = 0;
        estaJugando = true;
    
        document.getElementById('dado-1').style.display = 'none';
        document.getElementById('dado-2').style.display = 'none';
    
        document.getElementById('puntuacion-0').textContent = '0';
        document.getElementById('puntuacion-1').textContent = '0';
        document.getElementById('actual-0').textContent = '0';
        document.getElementById('actual-1').textContent = '0';
        document.getElementById('nombre-0').textContent = 'Jugador 1';
        document.getElementById('nombre-1').textContent = 'Jugador 2';
        document.querySelector('.jugador-0-panel').classList.remove('ganador');
        document.querySelector('.jugador-1-panel').classList.remove('ganador');
        document.querySelector('.jugador-0-panel').classList.remove('activo');
        document.querySelector('.jugador-1-panel').classList.remove('activo');
        document.querySelector('.jugador-0-panel').classList.add('activo');
    
        document.getElementById('btn-tirar').style.display = 'block';
        document.getElementById('btn-mantener').style.display = 'none';
        
    }
    
    document.getElementById('btn-reglas').addEventListener('click', function() {
        document.getElementById('card-reglas').style.display = 'block';
    });
    
    document.getElementById('btn-cerrar-reglas').addEventListener('click', function() {
        document.getElementById('card-reglas').style.display = 'none';
    });
}())
