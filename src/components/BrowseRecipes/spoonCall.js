import { keys } from './config';
import { store } from '../../app/store';
import { cacheSearch } from '../../features/apiCalls/cachedSearchSlice';


const key = keys.spoonKey;

const endpoints = {
    searchRecipes: "https://api.spoonacular.com/recipes/complexSearch",
    getRecipeInformation: "https://api.spoonacular.com/recipes/{id}/information"
}

export const searchRecipes = async (string) => {

    console.log('Attempting api request...')
    const searchUrl = `${endpoints.searchRecipes}?apiKey=${key}&query=${string}`;
    try {
        const response = await fetch(searchUrl);
        if (response.ok) {
            console.log('Request successful. Converting data before printing...')
            const result = await response.json();
            console.log('Result: ', result);
            const toCache = {query: string, result: result}
            store.dispatch(cacheSearch(toCache));
            console.log(store);
            return;
        }
        throw new Error(response.statusText);
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeInformation = async (id) => {
    const getInfoUrl = `${endpoints.getRecipeInformation}${id}/information?apiKey=${key}&includeNutrition=false`;
    try {
        const response = await fetch(getInfoUrl);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error(response.statusText);
    } catch (error) {
        console.log(error);
    }
    
}