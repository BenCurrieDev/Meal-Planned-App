import ingredientsToIds from '../../data/ingredientsData';

const ingredientOptionsList = Object.keys(ingredientsToIds);


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