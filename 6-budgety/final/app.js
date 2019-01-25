/*
73. Seccion Intro
74. Download the code
75. Project Setup and Details

76. Project Planning and Architecture: Step 1
    
    Identificar los "eventos" que vamos a tener en nuestra app:
    
    Ej:
    - En este caso un evento clic donde se agrega la descripción y el monto
    - Tomar los valores de entrada
    - Agregar un nuevo item en la estructura de datos (mantenerlo)
    - Agregar el item al UI
    - Calcular el monto actual después de la + o -
    - Actualizar la interfaz de usuario.

    Estructurar el codigo: Modulos

        - Aspecto vital de la arquitectura de cualquier aplicación robusta.
        - Nos ayudan a mantener las unidades de código para un proyecto bien separadas y organizadas.
        - Pueden permitirnos encapsular algunos datos en privacidad y exponer otros datos públicamente.

        Nos permiten dividir nuestro código en partes lógicas que son los módulos, y luego hacer que interactúen entre sí.

        Entonces, al observar estas tareas que hemos especificado anteriormente, podemos ver que algunas tareas tienen más
        que ver con la interfaz de usuario y otras con la manipulación interna de datos, ¿no?

        Así que vamos a crear un módulo para cada uno de ellos. 

        Modulo UI:
            - Tomar los valores de entrada
            - Agregar el item al UI
            - Actualizar la UI

        Modulo Controlador:
            - En este caso un evento clic donde se agrega la descripción y el monto
            
        Modulo Data:
            - Agregar un nuevo item en la estructura de datos (mantenerlo)
            - Calcular el monto actual después de la + o -
    
77. Implementing the Module Pattern       
    Patron de diseño - Patron de Modulo

    Todo lo que necesitamos saber son los conceptos de cierres y IIFE.

    - Entonces, los módulos son un aspecto vital de la arquitectura de cualquier aplicación robusta.
    - Además, los módulos nos ayudan a mantener las unidades de código para un proyecto bien separadas y organizadas.
    - Pueden permitirnos encapsular algunos datos en privacidad y exponer otros datos públicamente.
        Esto significa que los exponemos al público para que tras funciones o módulos puedan acceder y usarlos.
        Por lo tanto, la encapsulación de datos nos permite ocultar los detalles de implementación de un módulo específico desde el ámbito externo, 
        de modo que solo exponemos una interfaz pública que a veces se denomina API.
  
    Ahora, el secreto del patrón del módulo es que devuelve un objeto que contiene todas las funciones que queremos que sean públicas.
    Manejamos los otros modulos UIController, BudgetController, a través de un controlador principal.
    */

    // var controlador = (function(mod1){
    //     var test = mod1.algo(2);

    //     return {
    //         metodoPublico: function(b){
    //             return test;
    //         }
    //     }
    // })(moduloUno);
/*

78. Seting up the First Event Listeners 
    Seteando el primer manejador de eventos

    Crea un manejador de eventos para el boton del proyecto

79. Reading Input Data

    Muestra como obtener el input desde el modulo de ui, y retornando un objeto con las 3 cosas que necesita del input, lo obtiene del lado del controlador y hace lo que necesita.
    También mejora el codigo, poniendo en un objeto con propiedades con el nombre de las clases, para que si tiene que cambiar algo por algún motivo, solo lo cambia ahi y no en todos los querySelector

80. Creating an initialization function
    Crea una funcion de inicialización.

    Basicamente me todo lo que se tiene que precargar, como manejador de eventos y ciertas variables.
    Todo esto en el controlador principal y lo expone como un metodo publico para poder llamarlo desde afuera.


81. Creating Income and Expense Function Constructors

    Crea una función constructora para los gastos y para los ingresos, y como no hay base de datos, crea un objeto data donde se va a ir almacenando la info.

82. Adding a New Item to Our Budget Controller

    Agrega al objeto data, info desde la vista, o sea, agrega un nuevo gasto o ingreso de plata.

83. Adding a New Item to the UI
    
    Agrega / actualiza, ese ingreso o gasto, a la lista correspondiente.

    Usa para insertar en el ui:
    element es una variable donde esta el elemento de expensas o ingresos
    newHTML es una variable donde guardo el codigo html que genera el nuevo elemento en la lista.
    insertAdjacentHTML + beforeend, lo que hace es meter el elemento antes de que termine el elemento padre.
    o sea, antes de su etiqueta de cierre, por eso se van agregando hacía abajo, los ingresos x ej

    document.querySelector(element).insertAdjacentHTML('beforend',newHTML);

84. Clearing Our Input Fields

    Limpiar los campos de input. | Otra manera de usar querySelector |      Convertir un alista en un array.

    Como devuelve una lista, hay que convertirlo en array
        document.querySelectorAll(elemento1,elemento2, etc);


    Una mejor manera de lupear un array foreach
        var fields, fieldsArr;
            
        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
        
        fieldsArr = Array.prototype.slice.call(fields);
        
        fieldsArr.forEach(function(current, index, array) {
            current.value = "";
        });

85. Updating the Budget: Controller

    actualiza el controlador, agregando la llamadas para actualizar array el total de los ingresos y egresos, y mantiene el total actualizado
    Convierte el string del importe en un number con parseFloat
    Valida que si esta vacia la desripción y que si no hay numero, no se pueda ingresar un elemento a la alista.

86. Updating the Budget: Budget Controller

    Actualiza el total de los ingresos y egresos, y mantiene el total actualizado en los arrays
    
87. Updating the Budget: UI Controller

    ACtualiza la ui de los resultados

88. Project Planning and Architecture: Step 2
    Muestra el pdf donde se ve el diagrama de flujo de los modulos, y muestra las cosas que faltan hacer, como eliminar un gasto que se dió de alta por error.
    Para eso tiene que agregar un manejador de eventos
    Eliminar el elemento del html
    Sacar esa plata del array de donde estaba
    Recalcular el total  y actualizar la ui

89. Delegación de eventos - EVENT DELEGATION

    EVENT BUBBLING - Burbujeo de eventos
        Cuando un evento se dispara o desencadena en el DOM por ej haciendo clic en un boton, el mismo exacto evento tambióen desencadena en sus elementos padres.
        O sea, por primera vez se activa en el boton pero luego se activara en sus elementos padres uno por uno, 
            hasta el elemento html

        Por ende el boton que es el elemento que lo disparó se llama "target element" o elemento objetivo
        Lo importante es que el elemento se almacena como una propiedad en el objeto evento.

    EVENT DELEGATION - Delegación de eventos.
    Al generarse este burbujeo, todos los padres de donde este ese boton, sabe quien fue quien lo desencadeno es por esto que se puede generar un manejador de eventos
    para decirle a alguno de estos padres que espere hasta que pase ese evento.

    Casos de uso:
        - Cuando tenemos un elemento con muchos hijos en los que estamos interesados. Entonces en vez de ponerle el elemento a todos, se lo ponemos al padre.
        - Cuando queremos que un controlador de eventos se atache a un elemento que aún no esta en el DOM cuando se carga la pagina.
        

90. Setting up the Delete Event Listener Using Event Delegation

    Agrega un evento al padre de todos los elementos de expensas o de ingresos
    Mediante el event target, sabe precisamente que elemento eliminar, llamando al padre:
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

91. Deleting an Item from Our Budget Controller
    
    Ya que la lista no va a tener los elementos tal cual los tiene un array, sno que aparte se pudieron haber eliminados elementos, y para eliminar el correcto necesitamos el incide, utilizamos map.
    
    Map retorna un nuevo array con los indices de los elementos del array.
    ids = data.allItems[type].map(function(current) {
        return current.id;
    });

    Verifico que el id que quiero eliminar este en esa lista, si no esta va a devolver -1
    index = ids.indexOf(id);

    Splice elimina el elemento del array, con su index y la cantidad de elementos a borrar
    if (index !== -1) {
        data.allItems[type].splice(index, 1);
    }

92. Deleting an Item from the UI

    eliminamos el elemento hijo del nodo padre.
        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);

93. Project Planning and Architecture: Step 3
    Muestra el pdf actualizado donde se ve el diagrama de flujo con lo que se hizo hasta ahora.
    Hace una nueva lista de lo que falta hacer:
        Calcular los porcentajes
        Actualizarlos en la ui
        Poner bien la fecha actual y año
        Formato de los importes
        Mejorar la experiencia de usuario

94. Updating the Percentages: Controller
     Calcular los porcentajes en el controlador.
    
95. Updating the Percentages: Budget Controller

    Agrega a la funcion constructora de los gastos, obtener y calcular el porcentaje 

96. Updating the Percentages: UI Controller

    Como querySelectorAll devuelve un nodeList, y necesitamos recorrer esos campos, vamos a hacer nuestra propia funcion forEach

    var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
    nodeListForEach(fields, function(current, index) {
        
        if (percentages[index] > 0) {
            current.textContent = percentages[index] + '%';
        } else {
            current.textContent = '---';
        }
    });
    
    Función que le pasas una lista, y un callback que sería la funcion con el current y el index.
    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

97. Formatting Our Budget Numbers: String Manipulation

    Como usar diferentes metodos String, para manipularlos. Como formatear bien los numeros de los importes.

    

      
    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        /*
            + or - before number
            exactly 2 decimal points
            comma separating the thousands

            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
            *//*

            
        num = Math.abs(num); //elimina el signo del numero.
        num = num.toFixed(2); //le pone 2 decimales

        numSplit = num.split('.'); //separa el numero en 2, la parte entera de la parte decimal, en nuestro caso debería ser la ,

        Si la primera parte pasa de 3, comienza el mil y le pone coma.
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }


        dec = numSplit[1];

        le agrega el + o - dependiendo que es.
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };

98. Displaying the Current Month and Year

    Formateo de fecha, mes con nombre, etc.

99. Finishing Touches: Improving the UX

    Cambia el color a azul o rojo dependiendo que tipo de ingreso va a hacer (ingreso o egreso de dinero)

100. We’ve Made It! Final Considerations

    muestra como quedo el pdf final de la arquitectura de la aplicacion


/*----------------------------------------------------------------------------------------------------------------------------------
// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    
    
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };
    
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
        
        
        deleteItem: function(type, id) {
            var ids, index;
            
            // id = 6
            //data.allItems[type][id];
            // ids = [1 2 4  8]
            //index = 3
            
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            
        },
        
        
        calculateBudget: function() {
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }            
            
            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100
        },
        
        calculatePercentages: function() {
            
            /*
            a=20
            b=10
            c=40
            income = 100
            a=20/100=20%
            b=10/100=10%
            c=40/100=40%
            *//*
            
            data.allItems.exp.forEach(function(cur) {
               cur.calcPercentage(data.totals.inc);
            });
        },
        
        
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },
        
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function() {
            console.log(data);
        }
    };
    
})();




// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    
    
    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        /*
            + or - before number
            exactly 2 decimal points
            comma separating the thousands

            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
            *//*

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };
    
    
    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            
        },
        
        
        clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArr[0].focus();
        },
        
        
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },
        
        
        displayPercentages: function(percentages) {
            
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
            nodeListForEach(fields, function(current, index) {
                
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
            
        },
        
        
        displayMonth: function() {
            var now, months, month, year;
            
            now = new Date();
            //var christmas = new Date(2016, 11, 25);
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        
        
        changedType: function() {
            
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus'); 
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
            
        },
        
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);        
    };
    
    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    };
    
    
    var updatePercentages = function() {
        
        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();
        
        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        
        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };
    
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();        
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and update percentages
            updatePercentages();
        }
    };
    
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID) {
            
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Calculate and update percentages
            updatePercentages();
        }
    };
    
    
    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);


controller.init();