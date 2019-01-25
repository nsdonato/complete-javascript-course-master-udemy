/* 
Sección 4

43. Section Intro: 
    Sobre lo que se va a hacer

44. Download the Code
    Solo descargar el proyecto

45. The DOM and DOM Manipulation

    Interactúe con una página web por primera vez, y el término técnico para eso es la manipulación DOM.
    DOM = significa Document Object Model.
        El DOM es una representación estructurada de un documento HTML que se puede usar para conectar páginas web a scripts o lenguajes de programación como JavaScript.
        El DOM es una representación completamente orientada a objetos.

46. 5-Minute HTML and CSS Crash Course

   HTML es lo que siempre contiene el contenido de nuestras páginas web.
    Tenemos:
         elementos que se componen de etiquetas de finalización, contenido y etiquetas de cierre, en la mayoría de los casos.
         existen diferentes elementos para diferentes cosas, como enlaces, párrafos, imágenes, secciones, etc.
        <div atributo="valor"> </div>
        id, clases, alt src, etc..
        estructura de una pagina html.. bla bla

        HTML es el contenido de la página web, entonces CSS es la presentación, y aquí en el CSS simplemente escribimos reglas para dar estilo a nuestra página web.
        selectores css, bla bla

47. Project Setup and Details

    Info sobre el juego.

48. First DOM Access and Manipulation
    
    Selecciona el primer elemento que encuentra
        document.querySelector('#score-0') 

    Pone texto en el elemento
        document.querySelector('#score-0').textContent = "hola";

    Pone texto en el elemento y se puede formatear con elementos html
        document.querySelector('#score-0').innerHTML = "<h1>Hola</h1>"

    Darle estilos al elementos, en este caso, eliminarlo del dom
        document.querySelector('.dice').style.display = 'none';

    Asignar un elemento a una variable:
        var dado = documento.querySelector('.dado');

49. Events and Event Handling: Rolling the Dice

    Eventos: 
        Son notificaciones que son enviadas para notificar que algo paso en la pagina web.
        EJ: cliquear en un boton, escrolear, etc.

    Escuchador de eventos:
        Una función que performa una acción basada en un determinado evento. Espera a que un evento especifico pase.

        Si quiero que se llame enseguida:
            function init(){
                //hace algo
            }
            document.querySelector('.dice').addEventListener('click', init())

        si quiero que se llame cuando se hace realmente el click:
            document.querySelector('.dice').addEventListener('click', init);

        si quiero que se la funcion sea anonima:
            document.querySelector('.dice').addEventListener('click', function(){
                //hace algo
            }
50. Updating Scores and Changing the Active Player
            Operador ternario: algo true ? entonces esto sino : esto

            Removemos una clase de la lista de clases que tiene el elemento:
                document.querySelector('.jugador-0-panel').classList.remove('EliminarClaseDeterminada');

            Agregamos una clase a la lista de clases del elemento:
                document.querySelector('.jugador-0-panel').classList.add('AgregarClaseDeterminada');

            Si ya tiene la clase sacarla, y si no la tiene ponersela:
                document.querySelector('.jugador-0-panel').classList.toggle('activo');

51. Implementing Our 'Hold' Function and the DRY Principle 

    DRY: dont repeat yourself

    Principio de no repetir codigo
        Si el codigo se repite, hay que ponerlo en una función.

52. Creating a Game Initialization Function

    Creo una funcion que inicializa el juego..

53. Finishing Touches: State Variables

    Le llama variable de estado, a si se esta jugando una vez que uno gano, genera una variable boolean para que si se aprieta el boton tirar dados, y ya hubo una persona que gano, no siga tirando dados realmente.

54. Code Challenge 6

    Mejoras al juego, ya las hice.
    
55. Code Challenge 6 - Solución 1
56. Code Challenge 6 - Solución 2
57. Code Challenge 6 - Solución 3


*/