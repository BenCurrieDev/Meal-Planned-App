import fetch from 'node-fetch';

export const handler = async function (event, context) {
    const key = process.env.SPOON_KEY;
    const params = event.queryStringParameters;
    const getInfoUrl = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${key}&includeNutrition=false`;
    try {
        const response = await fetch(getInfoUrl);
        const result = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({ 
                message: "Hello World",
                params: params,
         }),
        }
    };
};