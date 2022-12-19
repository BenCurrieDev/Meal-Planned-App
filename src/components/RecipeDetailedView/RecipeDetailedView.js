import { useSelector } from "react-redux";


const RecipeDetailedView = (props) => {

    return (
      <h2>Data to be displayed here: {props.recipe.title}</h2>
    )
}

export default RecipeDetailedView;