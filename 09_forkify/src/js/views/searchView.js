import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.recipeList.innerHTML = '';
};

const renderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title, 17)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;

    elements.recipeList.insertAdjacentHTML('beforeend', markup);
};

// 'Pasta with tomato and spinach'
/**
 * acc: 0 / acc+ cur.length = 5 / newTitle= ['Pasta']
 * acc: 5 / acc+ cur.length = 9 / newTitle= ['Pasta', 'with']
 * acc: 9 / acc+ cur.length = 15 / newTitle= ['Pasta', 'with', 'tomato']
 * acc: 15 / acc+ cur.length = 18 / newTitle= ['Pasta', 'with', 'tomato']
 *
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce( (acc, cur) => {
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0 );
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};