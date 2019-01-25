/////////////////////////////////////
// 36. How Our Code Is Executed: JavaScript Parsers and Engines

/*
    JavaScript se aloja/ejecuta en navegadores o servidor NodeJS.
    Lo que sucede es que el host donde se aloja JavaScript, tiene algún tipo de motor de JavaScript que toma nuestro código y lo ejecuta.

    Lo primero que sucede dentro del motor, es que nuestro código es analizado por un analizador sintáctico, que básicamente lee nuestro código línea por línea y verifica si la sintaxis del código que le dimos es correcta.
    Esto significa que el analizador conoce las reglas de JavaScript y cómo debe escribirse para que sea correcto y válido.
    Y si cometes algunos errores, básicamente arroja un error y detiene la ejecución.

    Sin embargo, si todo es correcto, el analizador genera una estructura de datos conocida como Árbol de sintaxis abstracta, que luego se traduce en código máquina.

    Entonces este código ya no es código JavaScript, sino un código, o digamos un conjunto de instrucciones, que puede ser ejecutado directamente por el procesador de la computadora.

    Y es solo cuando nuestro código ya se convirtió a un código de máquina, realmente se ejecuta y hace su trabajo.

*/

// 37. Execution Contexts and the Execution Stack
/*
    Todo el código JavaScript debe ejecutarse en un entorno, y estos entornos se llaman contextos de ejecución.

    Entonces, puede imaginarse un contexto de ejecución como un cuadro, o como un contenedor, que almacena variables, y enel que se evalúa y ejecuta una parte de nuestro código.

    Ahora, el contexto de ejecución predeterminado es siempre el contexto global: 
        se ejecuta todo el código que no está dentro de ninguna función
        está asociado con el objeto global, que en el caso del navegador es el objeto window.

        Entonces, todo lo que declaramos en el contexto global se adjunta automáticamente a ese objeto.

  ¿qué pasa con el código que está en funciones?
      Cada vez que llamamos a una función, obtiene su propio contexto de ejecución totalmente nuevo.

      Una nueva función obtiene su nuevo contexto de ejecución.

      Y lo que sucede es que este nuevo contexto se pone encima del contexto actual, formando la denominada pila de ejecución.
      Cuando la función cumplió con su objetivo, se retorna y se elimina de la parte superior de la pila.


*/


// 38. Execution Contexts in Detail: Creation and Execution Phases and Hoisting

/*
# The Execution Context / Contexto de ejecución: 
        Tiene un objeto que guarda mucha información importante, que las funciones usan mientras se esta ejecutando, incluso antes de que empiece a correr el codigo. 
    
    1. Fase de creación
      a. Creacion de la variable de objeto (VO):
          - Se crea el objeto de argumento, conteniendo todo los argumentos que pasamos en la funcion.
          
     
          
      b. Creacion de la cadena de alcance
      c. Determinación del valor de la variable this.

    2. Fase de ejecución
        El código y la función que generó el contexto de ejecución actual, se ejecutan línea por línea y se definen todas las variables.


*/


// 39. Hoisting in Practice
/*

 # Alzamiento / Hoisting
            A estos dos en particular se le llaman "levantar = Hoisted", porque estan levantadas antes que siquiera el codigo se empiece a ejecutar. La diferencia es que las funciones estan "declaradas" y las variables seteadas como undefined y se definen en la fase de ejeución.
          
              - El codigo es escaneado buscando DECLARACIÓN DE FUNCIONES, para cada función se crea una propiedad en la VO, apuntando a la función.
                O sea, quedan todas las funciones "guardadas" ahí, aun antes de que se ejecute el codigo.
              - El codigo es escaneado buscando DECLARACIÓN DE VARIABLES, para cada variable se crea una propiedad en la VO, y se setea en undefined.
              

// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// 40. Scoping and the Scope Chain

/*
# Scope / Alcance
    
    - El alcance responde a la pregunta: ¿Donde podemos acceder a determinada variable o función?
    
    - Cada función CREA UN ALCANCE, o entorno, donde las variables son accesibles. En otros lenguajes también se crean en if, while, etc, pero en javascript NO.
    
    - Alcance léxico:
    Algo que esta escrito en el codigo, se trata de la posición de algo dentro de nuestro codigo. P sea, una función que esta escrita dentro de otra función tiene acceso a las variables de la función padre, y a las variables fuera de esa función = # CADENA DE ALCANCE.
    Esto solo funciona de adentro hacía fuera, no desde el global scope hasta dentro de una función dentro de una función.
    
    El orden en que se llaman las funciones no determina el alcance de las funciones dentro de las funciones, esto lo determina donde las variables estan escritas, ver ppt execution Stack vs Scope Chain.
    

// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// 41. The 'this' Keyword
/*

# THIS

    - En una llamada a una función normal, this apunta al VO (el objeto window en el explorador).
    
    - En una llamada a un metodo, que esta asociado a un objeto, apunta al objeto que llama al metodo.
    
    - No se le asigna valor hasta que no se llama a la función que lo define.


/////////////////////////////////////
// 42. The 'this' Keyword in Practice
/*

//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
