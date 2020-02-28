// "x-rapidapi-host": "https://tasty.p.rapidapi.com",
// "x-rapidapi-key": "1e0a21ddecmsh919c55f45819c12p1c0c0fjsn849cf41bd3be"

// Global app controller
// import str from './models/Search';
// import {add as plus, multiply} from './views/searchView';
// import * as searchView from './views/searchView';
import axios from 'axios';

async function getResults(query) {
    // const key = '1e0a21ddecmsh919c55f45819c12p1c0c0fjsn849cf41bd3be'// no key
    try {
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        console.log(result);
    } catch(err) {
        alert(err);
    }
    
}

getResults('pizza')
