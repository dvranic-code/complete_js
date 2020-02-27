/**
 * Asynchronous JS Example
 */
// const second = () => {
//     setTimeout( () => {
//         console.log('Async Hey There');        
//     }, 2000 );
// }

// const first = () => {
//     console.log('Hey There!');
//     second();
//     console.log('The End');
// }

// first();


/**
 * The Old Way: 
 * Asynchronous JavaScript with Callbacks
 */
// function getRecipe() {
//      setTimeout( () => {
//         const recipeID = [523, 887,436, 978];
//         console.log(recipeID);  

//         setTimeout( id => {
//             const recipe = {
//                 title: "Fresh tomato pasta",
//                 publisher: "Dejan"
//             }
//             console.log(`${id}: ${recipe.title}!`);

//             setTimeout( publisher => {
//                 const recipe = {
//                     title: "Italian Pizza",
//                     publisher: "Dejan"
//                 }
//                 console.log(`${id}: ${recipe.title}!`);

//             }, 1500, recipe.publisher );
            
//         }, 2000, recipeID[2] );      

//      }, 1500 );
// }
// getRecipe(); //callback Hell!!!


/**
 * Lecture:
 * From Callback Hell to Promises
 */
// const getIDs = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 887,436, 978]);
//     }, 2000);
// } );

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout((id) => {
//             const recipe = {
//                 title: "Fresh tomato pasta",
//                 publisher: "Dejan"
//             }
//             resolve(`${id}: ${recipe.title}!`);
//         }, 1000, recID);
//     });
// }

// const getPublisher = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout((user) => {
//             const recipe = {
//                 title: "Italian Pizza",
//                 publisher: "Dejan"
//             }
//             resolve(`${user} made: ${recipe.title}`);
//         }, 1000, publisher);
//     });
// }

// getIDs
// .then((recipeID) => {
//     console.log(recipeID); 
//     return getRecipe(recipeID[2]);
// })
// .then( recipe => {
//     console.log(recipe);
//     return getPublisher('jonas');
// })
// .then( str => {
//     console.log(str);
// })
// .catch(error => console.log(`error: ${error}`)
// );


/**
 * Lecture:
 * From Promises to Async/Await
 * 
 * - to consume the promises
 * 
 */
// async function getRecipeAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
    
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);

//     const related = await getPublisher('jonas');
//     console.log(related);
    
//     return recipe;
// }
// getRecipeAW().then(result => console.log(`This is the END: ${result}`));
// console.log('From Promises to Async/Await');


/**
 * Lecture:
 * Making AJAX Calls with Fetch and Promises
 */
// function getWeather(woeid) {

//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//     .then( result => {
    
//         console.log(result);
//         return result.json();
        
//     } )
//     .then( data => {
//         console.log(data.title);
//         console.log(data.location);
        
//     })
//     .catch( error => console.log(error) );
// }
// getWeather(44418);


/**
 * Lecture:
 * Making AJAX Calls with Fetch and Async/Await
 */
async function getWeatherAW(woeid) {

    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    
        const data = await result.json();
    
        console.log(data.consolidated_weather[2].weather_state_name);

        return data;
    } catch(error) {
        console.log(error);
        
    }
    

}
getWeatherAW(44418).then( weather => console.log( weather ));
