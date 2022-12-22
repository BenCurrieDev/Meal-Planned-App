
const IngredientOptions = ({ingredients}) => {
    return (
        <datalist id="ingredientOptions">
            {ingredients.map((ingredient, index) => {
                return <option key={index} value={ingredient} />
            })}
        </datalist>
    )
}

export default IngredientOptions;