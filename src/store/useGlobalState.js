import { useState, useMemo, useCallback } from "react";
// import { makeApiRequest } from "../utils";

export const useGlobalState = () => {
  // const [recipeList, setRecipeList] = useState(null);
  // const [reviewBarOpen, setReviewBarOpen] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [reviewedRecipe, setReviewedRecipe] = useState(null);
  const [topic, setTopic] = useState(null)

  // const searchByName = useMemo(
  //   () => (keyword) => {
  //     makeApiRequest(
  //       `/api/search-by?keyword=${keyword}`,
  //       (data) => setRecipeList(data.meals),
  //       setLoading
  //     );
  //   },
  //   [setLoading]
  // );

  // const searchByIngredients = useMemo(
  //   () => (ingredients) => {
  //     makeApiRequest(
  //       `/api/filter-by?filterType=i&filterValue=${ingredients}`,
  //       (data) => setRecipeList(data.meals),
  //       setLoading
  //     );
  //   },
  //   [setLoading]
  // );

  // const openReviewBar = useMemo(
  //   () => () => setReviewBarOpen(true),
  //   [setReviewBarOpen]
  // );

  // const closeReviewBar = useMemo(
  //   () => () => setReviewBarOpen(false),
  //   [setReviewBarOpen]
  // );
  
  // const resetReviewState = useCallback(() => {
  //   setReviewedRecipe(null);
  //   closeReviewBar();
  // }, [closeReviewBar]);

  const setCurrentTopic = useMemo(
    (t) => (t) => setTopic(t),
    [setTopic]
  );

  return {
    topic,
    setCurrentTopic
  };
};
