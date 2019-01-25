/////////////////////////////
/*
58. Section Intro
    Sobre que va esta sección.

59. Download the code
60. Everything Is an Object: Inheritance and the Prototype Chain
    Todo es un objeto: Herencia y la cadena de prototipo

    # Objectos : "todo es un objeto, o casi todo"

        Primitivos:
            - number
            - string
            - booleans
            - undefined
            - null
            
        Todo lo demas, es un objeto:
            - arrays
            - funciones
            - objetos
            - fechas
            - wrappers para numeros, strings, booleans.
        
    # Programación orientada a objetos: POO

        La programación orientada a objetos hace un uso intensivo de objetos, propiedades y métodos, y estos objetos interactúan entre sí para formar aplicaciones complejas.

        Hay una mejor manera, algo así como un molde donde a partir de este podemos crear cuantos objetos queramos.
        
        var Person {
            name: "noe",
            age: 31
        }

        En otros lenguajes de programación, esto se denomina muchas veces clase, pero en JavaScript nos gusta llamarlo CONSTRUCTOR o PROTOTIPO.
        Por lo tanto, basándonos en este constructor, podemos crear tantas instancias como queramos.

    # Herencia. 

        En términos simples, la herencia es cuando un objeto se basa en otro objeto. Es cuando un objeto obtiene acceso a las propiedades y métodos de otro objeto.
        Ej del atleta, donde se crea un constructor atleta con metodos especificos porque es atleta, y hereda de persona cosas como nombre, apellido, etc.
        Esto nos permite escribir menos código y hacer más programas lógicos.
        
    # PROTOTIPOS (En javascript se herada a traves de esto)


        En la práctica, significa que todos y cada uno de los objetos JavaScript tienen una propiedad prototipo que hace posible la herencia en JavaScript.
        Entonces, en este ejemplo, tenemos el método de cálculo de la edad en la propiedad del prototipo  de la persona y, por lo tanto, John hereda el método y puede llamarlo.
        Y cualquier otro objeto creado por el constructor Person heredaría también este método.
        Entonces, nuevamente, la propiedad prototipo de un objeto es donde ponemos los métodos y las propiedades que queremos que otros objetos hereden.

        Lo que es realmente importante señalar aquí es que el prototipo de persona no es el prototipo de la persona en sí, sino de todas las instancias que creé a través del plano Person, como, por ejemplo, john. Entonces, en otras palabras, la propiedad prototipo de la persona es el prototipo de Juan.

        El objeto Person en sí es una instancia de un constructor aún más grande, que es el objeto Object.

        Todos y cada uno de los objetos que creamos es una instancia del constructor de  Objetos que tiene un montón de métodos en su propiedad de prototipo.

        Y, como puede adivinar, el objeto Persona hereda estos métodos y puede llamarlos. Además, el objeto john también hereda estos métodos y también puede usarlos. 
        
        Explicación:
        Cuando intentamos acceder a un determinado método o propiedad en un objeto, JavaScript primero intentará encontrar ese método en ese objeto exacto.
        Pero si no puede encontrarlo, buscará en el prototipo del objeto, que es la propiedad prototipo de su elemento primario.

        Por lo tanto, se mueve hacia arriba en la cadena de prototipos. Si el método todavía no está allí, esto continúa hasta que no haya más prototipos para mirar, que es nulo. Null es el único que no tiene prototipo y, por lo tanto, es el último eslabón de la cadena de prototipos. Y en este caso, se devuelve indefinido.

        Esta es la razón por la cual, por ejemplo, el objeto john podría llamar al método hasOwnProperty que está almacenado en la propiedad Object Prototype.

        RESUMEN:

        - Cada objeto JavaScript tiene una propiedad prototipo, lo que hace posible la herencia en JavaScript.
        - La propiedad prototipo de un objeto es donde ponemos los métodos y las propiedades que queremos que otros objetos hereden.
        - La propiedad del prototipo del Constructor no es el prototipo del Constructor en sí, sino que es el prototipo de todas las instancias que se crean a   través de él.
        - Cuando se llama a un determinado método, o propiedad, la búsqueda comienza en el objeto mismo, y si no se puede encontrar allí, la búsqueda avanza     hacia el prototipo del objeto. Esto continúa hasta que se encuentre el método. Y esta es la cadena de prototipos.

        O sea, la herencia la usamos porque sino creariamos 20 objetos con 


        
61. Creating Objects: Function Constructors
    Creando objetos: Funciones constructoras.


    Entonces el constructor de funciones es un patrón para escribir un plano-
    Escribimos constructores de funciones con una letra mayúscula 

    Crear un objeto:
        var john = {
            name: 'John',
            yearOfBirth: 1990,
            job: 'teacher'
        };

    Creamos una funcion constructora de objetos.
        var Person = function(name, yearOfBirth, job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }

    Agregamos un metodo a la funcion constructora.
        Person.prototype.calculateAge  = function() {
            console.log(2016 - this.yearOfBirth);
        };

    Person.prototype.lastName = 'Smith';

    Instanciamos objetos con la función constructora.
    Cuando usamos New se crea un nuevo objeto vacio.
        var john = new Person('John', 1990, 'teacher');
        var jane = new Person('Jane', 1969, 'designer');
        var mark = new Person('Mark', 1948, 'retired');

        john.calculateAge();
        jane.calculateAge();
        mark.calculateAge();

        console.log(john.lastName);
        console.log(jane.lastName);
        console.log(mark.lastName);

    Para no crear objetos con funciones largas que hacen una cosa en particular y aplican a todos, se genera la herencia, entonces en vez de crear 20 objetos personas con el metodo calcular edad
    simplemente se agrega calcular edad con un prototipo, y cuando instancias la persona, john puede calcular edad pero su instancia en si, no es la dueña de la funcion sino persona. 

62. The Prototype Chain in the Console

        Muestra la herencia, o sea, los prototipos, en la consola de desarrolador.

63. Creating objects: Objects.create
    Creando objetos con: Objects.create

    En este caso, primero definimos un objeto que actuará como prototipo y luego creamos un nuevo objeto basado en ese mismo prototipo.
    Ahora ves que ya no usamos la P mayúscula al principio porque no es un constructor de funciones.


    var personProto = {
        calculateAge: function() {
            console.log(2016 - this.yearOfBirth);
        }
    };

    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'teacher';

    De esta manera creamos un objeto particular y le agregamos el prototipo
        var jane = Object.create(personProto, {
            name: { value: 'Jane' },
            yearOfBirth: { value: 1969 },
            job: { value: 'designer' }

        }
64. Primitives vs. Objects
    primitivas versus objetos
    
    Primitivos:
            - number
            - string
            - booleans
            - undefined
            - null
            
    Todo lo demas, es un objeto:
        - arrays
        - funciones
        - objetos
        - fechas
        - wrappers para numeros, strings, booleans.

    # variables vs objetos

    Las variables contienen el valor en si, y el objeto guardar la referencia en memoria donde se encuentra el objeto.

    // Primitives
    var a = 23;
    var b = a;
    a = 46;
    console.log(a);
    console.log(b);

    // Objects
    var obj1 = {
        name: 'John',
        age: 26
    };
    var obj2 = obj1;
    obj1.age = 30;
    console.log(obj1.age);
    console.log(obj2.age);

    // Functions
    var age = 27;
    var obj = {
        name: 'Jonas',
        city: 'Lisbon'
    };

    function change(a, b) {
        a = 30;
        b.city = 'San Francisco';
    }

    change(age, obj);

    console.log(age);
    console.log(obj.city);

65. First Class Functions: Passing Functions as Arguments
    Funciones de primera clase: Pasando funciones como argumentos.

     - Una función es un objeto porque es una instancia de él.
     - Tiene el comportamiento como cualquier objeto.
     - Podemos almacenar funciones en una variable. 
     - Podemos pasar una función como un argumento de otra función.
     

    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {
        var arrRes = [];
        for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge(el) {
        return 2016 - el;
    }

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81) {
            return Math.round(206.9 - (0.67 * el));
        } else {
            return -1;
        }
    }


    var ages = arrayCalc(years, calculateAge);
    var fullAges = arrayCalc(ages, isFullAge);
    var rates = arrayCalc(ages, maxHeartRate);

    console.log(ages);
    console.log(rates);


# Funciones que retornan funciones.
    
    - Una función es anonima porque no tiene nombre.
        
    Creamos una funcion que devuelva otra funcion segun el nombre del trabajo.

    function interviewQuestion(job) {
        if (job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');


    teacherQuestion('John');
    designerQuestion('John');
    designerQuestion('jane');
    designerQuestion('Mark');
    designerQuestion('Mike');

    Podemos llamar a la funcion que retorna la primer función, en la misma linea sin necesidad de guarda la primera en una variable:
    interviewQuestion('teacher')('Mark');

67.  Immediately Invoked Function Expressions (IIFE)
     IIFE - Expresiones de funciones invocadas inmediatamente
    
     - Modularidad de codigo.
     - No se usa para reutilizarse ya que son llamadas solo una vez.
     - No son accesibles de afuera, al no tener nombre.
     - Data privacy
     
     (function () {
        //code
     })(); --> la función se invoca inmediatamente con esos () luego de "cerrarse"
     
     Si le quisieramos pasar un parametro:
     
     (function (goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    })(5);
    
    // Ejemplo de él
        function game() {
            console.log('1 funcion');
            var score = Math.random() * 10;
            console.log(score >= 5);
        }

        game();

        function () {
            alert('code');
        }

        (function () {
            console.log('2 funcion');
            var score = Math.random() * 10;
            console.log(score >= 5);
                //console.log('Test: ' + test)
            })();
        })(8);

        console.log(score);


        (function (goodLuck) {
            debugger;
            var score = Math.random() * 10;
            console.log(score >= 5 - goodLuck);
        })();

68. Closures - "Cierres"

    Basicamente si usamos una función anonima dentro de una función, 
    al llamar a la primera y por ej el retorno (la funcion) la almacenamos en una variable, 
    aún habiendo salido de la primer funcion, esta se guarda en la variable, 
    por lo que la podemos llamar igual aunque la función padre ya se haya "cerrado" o como se dice, su contexto de ejecución ido.
    Como una función es un objeto, la variable donde se guardo la función quedó en memoria y es por eso que aunque hayamos salido de su padre, 
    esta se puede seguir usando.
    
    Cuando guardamos un función de retorno en una variable, esta variable, pasa a ser una funcion, porque a su vez las funciones son objetos.

    function retirement(retirementAge) {
        var a = ' years left until retirement.';
        return function(yearOfBirth) {
            var age = 2016 - yearOfBirth;
            console.log((retirementAge - age) + a);
            }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);

    retirementGermany(1990);
    retirementUS(1990);
    retirementIceland(1990);

    //retirement(66)(1990);


    function interviewQuestion(job) {
        return function(name) {
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    interviewQuestion('teacher')('John');

69. Metodos: Bind - Call - Apply 

    CALL: 
        - Suponiendo que un objeto tiene un metodo que queres usar en otro objeto, pero no en todos, podes usar call.
        - Lo que se hace es usar el objeto dueño del metodo .sumetodo.call(objetoquenecesitaesemetodo, parametros1, param2);
        - Esto se llama "metodo de prestamo", porque lo tomamos prestado de john.
    
        var john = {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay) {
                if (style === 'formal') {
                    console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
                } else if (style === 'friendly') {
                    console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
                }
            }
        };

        var emily = {
            name: 'Emily',
            age: 35,
            job: 'designer'
        };

        john.presentation('formal', 'morning');

        john.presentation.call(emily, 'friendly', 'afternoon');
        
    APPLY:
        - Es igual a call solo que acepta los argumentos como un array.
    
        //john.presentation.apply(emily, ['friendly', 'afternoon']);

    BIND:
        - Idem a call pero nos deja establecer una variable explcitamente. 
        - No podemos llamar al metodo inmediatamente sino que genera una copia para almacenar.
        - Ideal para generar funciones con argumetnos preestablecidos.
        - Devuelve una función, por eso hay que almacenarla.
        - Un elemento preestablecido es uno que principalmente sabemos que no va a cambiar.


    var johnFriendly = john.presentation.bind(john, 'friendly');

    johnFriendly('morning');
    johnFriendly('night');

    var emilyFormal = john.presentation.bind(emily, 'formal');
    emilyFormal('afternoon');


    // Another cool example
    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {
        var arrRes = [];
        for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge(el) {
        return 2016 - el;
    }

    function isFullAge(limit, el) {
        return el >= limit;
    }

    var ages = arrayCalc(years, calculateAge);
    var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
    console.log(ages);
    console.log(fullJapan);


70. Coding Challenge 7

--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
//------------------------------------------- Mi solución --------------------------------------------------
/*

(function() {

    debugger;
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
/*-------------------------------------------- Su solución --------------------------------------------------

//
71. Coding Challenge 7: Solution, Part 1


(function() {
    // Genero el constructor para las diferentes preguntas.
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Al constructor le agrego el metodo -por herencia- para mostrar las preguntas.
    Question.prototype.displayQuestion = function() {
        // Muestro por consola la pregunta que tocó
        console.log(this.question);

        // Itero sobre las posibles respuestas
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // Al constructor le agrego un metodo para chequear la respuesta correcta.
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    // Genero diferentes preguntas y respuestas
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    // Guardo todas las preguntas en un array
    var questions = [q1, q2, q3];

    // Genero una pregunta al azar
    var n = Math.floor(Math.random() * questions.length);

    // Muestro la pregunta que tocó
    questions[n].displayQuestion();

    // Obtengo la respuesta del usuario
    var answer = parseInt(prompt('Please select the correct answer.'));

    // Verifico la respuesta del usuario
    questions[n].checkAnswer(answer);
})();

*/

/*
72. Coding Challenge 7: Solution, Part 2 --- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
*/