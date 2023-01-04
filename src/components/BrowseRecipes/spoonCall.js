import { store } from '../../app/store';
import { cacheSearch, cacheRecipe } from '../../features/apiCalls/cachedSearchSlice';

const listToString = (list, string) => {
    if (list.length === 0) return "";
    return `&${string}=${list.toString()}`;
}

export const searchRecipes = async (obj) => {
    
    const queryUrl = `query=${obj.query}`;
    const dietUrl = listToString(obj.diet, 'diet');
    const intolerancesUrl = listToString(obj.intolerances, 'intolerances');
    const timeUrl = obj.maxReadyTime ? `&maxReadyTime=${obj.maxReadyTime}` : '';
    const params = `${queryUrl}${dietUrl}${intolerancesUrl}${timeUrl}`;
    const url = `/.netlify/functions/search?${params}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            const toCache = {searchParams: obj, result: result}
            store.dispatch(cacheSearch(toCache));
            return;
        }
        throw new Error(response.statusText);
    } catch (error) {
        console.log(error);
    } 
  
}

export const getRecipeInformation = async (id) => {
    const url = `/.netlify/functions/getInfo?id=${id}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            store.dispatch(cacheRecipe(result));
            return true;
        }
        throw new Error(response.statusText);
    } catch (error) {
        console.log(error);
        return false;
    };
    
}