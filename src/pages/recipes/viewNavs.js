export const bottomViewNavs = {
    displayRecipes: [
        {text: 'New Recipe', newView: 'addRecipe'},
        {text: 'Browse Recipes', newView: 'browseRecipes'}
    ],
    addRecipe: [
        {text: 'Cancel New Recipe', newView: 'displayRecipes'}
    ],
    browseRecipes: [
        {text: 'Recipe Book', newView: 'displayRecipes'}
    ],
    detailedRecipe: [
        {text: 'Back', newView: 'displayRecipes'}

    ],
    editRecipe: [
        {text: 'Cancel Edit', newView: 'detailedRecipe'}

    ],
    browseDetails: [
        {text: 'Back', newView: 'browseRecipes'}
    ]
  }