export const getRecipes = async () => {
  const url = "www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getIngredients = (recipe) => {
  const ingredients =
    recipe[0] &&
    Array.from({ length: 20 }, (_, i) => {
      const ingredient = recipe[0][`strIngredient${i + 1}`];
      const measure = recipe[0][`strMeasure${i + 1}`];
      return ingredient ? { ingredient: ingredient, measure: measure } : null;
    });

  return ingredients;
};
