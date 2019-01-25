
/* # Asincronismo en javascript

 

119. Section Intro
120. An Example of Asynchronous JavaScript
     - Download starter project from Github

    * Asincronico
        - Codigo que se ejecuta en segundo plano, mientras nuestro codigo principal sigue ejecutando.
        - Tipicalmente se usa para pedir datos del servidor o una api. Un timer setTimeout, es asincronico. Porque llama a una función después de un tiempo determinado. Se ejecuta en segundo plano.
        - En su callback se pasa una funcion que queremos que se ejecute cuando termine el procesamiento.

         // const second = () => {
        //     setTimeout(() => {
        //         console.log('Async Hey there');
        //     }, 2000);
        // }

        // const first = () => {
        //     console.log('Hey there');
        //     second();
        //     console.log('The end');
        // }

        // first();

    * Sincronico se ejecuta linea por linea.
        Si se ejecuta algo sincronico antes de que cargue la pagina, la pagina podria quedar cargada por la mitad, y encima no se podia clicear ni nada por el estilo.

        // const second = () => {
        //         console.log('second');
        // }

        // const first = () => {
        //     console.log('Hey there');
        //     second();
        //     console.log('The end');
        // }

        // first();

121. Understanding Asynchronous JavaScript: The Event Loop

    # Loop event

  Cuando creamos un setTimeout, este se crea en el stack de ejecución junto con la función de callback
   pero a su vez, esta en el entorno de las web api, y se mantiene ahí hasta que pase su trabajo.
   cuando termina de ejecuarse, en vez de volver al stack de ejecución, va a la cadena de ejecución y para mostrase como sabemos, hay que esperar que el stack de ejecució este vacio.
   Por ultimo el evento loop la lleva hacia un nuevo contexto de ejecución donde se ejecuta la funcion callback.

122. The Old Way: Asynchronous JavaScript with Callbacks

    # callback hell

    se le dice cuando tenes una llamada tras otra anidada de x ej setTimeout.

    // function getRecipe() {
        //     setTimeout(() => {
        //         const recipeID = [523, 883, 432, 974];
        //         console.log(recipeID);

        //         setTimeout(id => {
        //             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
        //             console.log(`${id}: ${recipe.title}`);

        //             setTimeout(publisher => {
        //                 const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
        //                 console.log(recipe);
        //             }, 1500, recipe.publisher);

        //         }, 1500, recipeID[2]);

        //     }, 1500);
        // }
        // getRecipe();

    * WEB APIS

    - Viven fuera del motor de Javascript, son cosas como:
        . Metodos de manipulación de DOM
        . setTimeout
        . solicitudes HTTP por ajax
        . geolocalización
        . almacenamiento local, etc..
        

123. From Callback Hell to Promises

     
    # PROMESAS

    "Prometeme que vas a obtener ese dato, así lo puedo manejar en el futuro"
    - Una promesa es un objeto que mantiene el trackeo de si un evento pasó o no.
    - Determina que hacer si el evento sucedió
    - Implementa un concepto de "un futuro valor que estamos esperando"
    - Todos los objetos promesa, heredan los metodos then y catch
    Las promesas tienen diferentes estados:

        - Pending | Pendiente: antes de que pase el evento.
        - Settled / Resolved | "Colocado / Resuelto": después que el evento pasó:
        - Fulfilled | "Cumplido" : Promesa cumplida, resultado exitoso, el resultado esta disponible.
        - Rejected | "Rechazada" : Hubo un error.
    
        //reject puede ser error, ya que se usa cuando hubo un error.

        const getIDs = new Promise((resolve, reject) => {
        // lo que esta aca adentro se le llama " funcion ejecutora ", toma 2 parametros

        //     setTimeout(() => {
        //         resolve([523, 883, 432, 974]);   // lo que queremos retornar cuando salio todo ok
        //     }, 1500);
        // });

        .then(PASAMOScallbackfunction(1arg)) > nos permite adherir un manejador de eventos si la promesa esta cumplida "fulfilled"
                el parametro en la función callback es el resultado de la promesa cumplida.

        .catch(error => {
            // manejamos el error que hubo
        })

        para manejar mas de 1 promesa, ponemos un .then abajo del otro

        // function getRecipe() {
        //     setTimeout(() => {
        //         const recipeID = [523, 883, 432, 974];
        //         console.log(recipeID);

        //         setTimeout(id => {
        //             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
        //             console.log(`${id}: ${recipe.title}`);

        //             setTimeout(publisher => {
        //                 const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
        //                 console.log(recipe);
        //             }, 1500, recipe.publisher);

        //         }, 1500, recipeID[2]);

        //     }, 1500);
        // }
        // getRecipe();

        // const getIDs = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve([523, 883, 432, 974]);
        //     }, 1500);
        // });

        // const getRecipe = recID => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(ID => {
        //             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
        //             resolve(`${ID}: ${recipe.title}`);
        //         }, 1500, recID);
        //     });
        // };

        // const getRelated = publisher => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(pub => {
        //             const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
        //             resolve(`${pub}: ${recipe.title}`);
        //         }, 1500, publisher);
        //     });
        // };

        // getIDs
        // .then(IDs => {
        //     console.log(IDs);
        //     return getRecipe(IDs[2]);
        // })
        // .then(recipe => {
        //     console.log(recipe);
        //     return getRelated('Jonas Schmedtmann');
        // })
        // .then(recipe => {
        //     console.log(recipe);
        // })
        // .catch(error => {
        //     console.log('Error!!');
        // });

124. From Promises to Async/Await

    Async/Await fueron creados para que consumamos promesas, no para que las creemos.
    
    ASYNC = significa que la función es asincronica, devuelve una promesa.
            Dentro de la función podemos tener mas de un AWAIT.
            Se ejecuta en segundo plano.

    AWAIT = impide que se ejecute ese codigo hsta que se haya cumplido la promesa.

    // const getIDs = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([523, 883, 432, 974]);
    //     }, 1500);
    // });

    // const getRecipe = recID => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(ID => {
    //             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
    //             resolve(`${ID}: ${recipe.title}`);
    //         }, 1500, recID);
    //     });
    // };

    // const getRelated = publisher => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(pub => {
    //             const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
    //             resolve(`${pub}: ${recipe.title}`);
    //         }, 1500, publisher);
    //     });
    // };

   // async function getRecipesAW() {
    //     const IDs = await getIDs;
    //     console.log(IDs);
    //     const recipe = await getRecipe(IDs[2]);
    //     console.log(recipe);
    //     const related = await getRelated('Jonas Schmedtmann');
    //     console.log(related);

    //     return recipe;
    // }
    // getRecipesAW().then(result => console.log(`${result} is the best ever!`));

    // function getWeather(woeid) {
    //     fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
    //     .then(result => {
    //         // console.log(result);
    //         return result.json();
    //     })
    //     .then(data => {
    //         // console.log(data);
    //         const today = data.consolidated_weather[0];
    //         console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    //     })
    //     .catch(error => console.log(error));
    // }
    // getWeather(2487956);
    // getWeather(44418);
        
125. AJAX and APIs

    # AJAX 
        Significa Javascript asincrónico y XML. Básicamente, nos permite comunicarnos de forma asíncrona con servidores remotos.
        También para enviar datos al servidor haciendo una solicitud posterior en lugar de una solicitud de obtención.
        
        API significa Application Programming Interface y en un nivel muy alto, es básicamente una pieza de software que puede ser utilizada por otra pieza de
        software para básicamente permitir que las aplicaciones se comuniquen entre sí.
        
        Dos tipos de API que puedes usar en Javascript: 
            1) API (tu propia api donde brindas info sobre tu sistema) 
            2) API externas de terceros (api que hizo alguien para que puedas obtener cierta información)


126. Making AJAX Calls with Fetch and Promises

        API web moderna llamada Fetch. Una de las API web que está disponible en el navegador, son parte del lenguaje JavaScript.
    HttpRequest en realidad, tiene mejor compatibilidad con el navegador que Fetch, ya que ha existido desde hace mucho tiempo.

    Las apis de terceros se usan con una key, que te provee ese "proveedor".
    
    En este ejemplo, Tiene metodos (operaciones en wbs)
        
    JSON Viewer, es una herramienta que te formatea los json del retorno de las api, de manera linda y facil de leer.

    JSON:
        es un formato de datos basado en texto que es muy similar a los objetos de JavaScript, pero la diferencia es
        que JSON es realmente una sola cadena y no un objeto completo dentro del motor de JavaScript.
        Esto es como una cadena que podemos recibir del servidor y luego podemos convertirlo fácilmente en un objeto JavaScript.

        Error comun:
            "no hay control de acceso permitido encabezado de origen está presente en el recurso solicitado"
            Bueno, la razón de esto es la llamada política de origen en JavaScript, que básicamente nos impide hacer solicitudes AJAX a un dominio diferente de nuestro
            propio dominio.
            Para permitir esto se usa: Cross Origin Resource Sharing o CORS.
                En términos simples, los desarrolladores de la API que estamos solicitando, deben implementar CORS en su servidor.
                Entonces, lo que los desarrolladores suelen hacer es proxy o canalizar la solicitud a través de su propio servidor.

                Un proxy CORS es un servicio que permite a los desarrolladores acceder a los recursos de otros sitios web, sin tener que poseer ese sitio web.

   
127. Making AJAX Calls with Fetch and Async/Await

    A esta funcion que se hizo en el 126. le agregó try catch
    
    // async function getWeatherAW(woeid) {
    //     try {
    //         const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
    //         const data = await result.json();
    //         const tomorrow = data.consolidated_weather[1];
    //         console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
    //         return data;
    //     } catch(error) {
    //         alert(error);
    //     }
    // }
    // getWeatherAW(2487956);
    
    // let dataLondon;
    // getWeatherAW(44418).then(data => {
    //     dataLondon = data
    //     console.log(dataLondon);
    // });
    
    */