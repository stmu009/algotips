import React from "react";


export const Context = React.createContext({
  loading: false,
  recipeList: null,
  searchByName: () => {},
  setRecipeList: () => {},
  reviewLoading: false,
  reviewBarOpen: false,
  getRecipeById: () => {},
  reviewedRecipe: null,
  getRandomRecipes: () => {},
  resetReviewState: () => {},
  searchByCountry: () => {},
  searchByCategory: () => {},
  searchByIngredients: () => {},
});