// "x-rapidapi-host": "https://tasty.p.rapidapi.com",
// "x-rapidapi-key": "1e0a21ddecmsh919c55f45819c12p1c0c0fjsn849cf41bd3be"

// Global app controller
// import str from './models/Search';
// import {add as plus, multiply} from './views/searchView';
// import * as searchView from './views/searchView';

import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput(); 

    if(query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        searchView.renderResults(state.search.recipes);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

