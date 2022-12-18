import ingredientsData from './ingredientsData';

const ingredientOptionsList = ingredientsData;


const IngredientOptions = () => {
    return (
        <datalist id="ingredientOptions">
            {ingredientOptionsList.map((ingredient, index) => {
                return <option key={index} value={ingredient} />
            })}
        </datalist>
    )
}

export default IngredientOptions;