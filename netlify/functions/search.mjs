import fetch from 'node-fetch';

export const handler = async function (event, context) {
    const key = process.env.SPOON_KEY;
    const params = event.queryStringParameters;
    const paramsUrl = Object.keys(params).map(key => `&${key}=${params[key]}`).join('');
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}${paramsUrl}`;
    try {
        const response = await fetch(searchUrl);
        const result = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({ 
                message: "Error: Spoonacular call failed",
                params: params,
         }),
        }
    };
};