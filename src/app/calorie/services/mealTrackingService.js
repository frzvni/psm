/**
 * Service for meal tracking functionality
 */

// Add food to a meal
export const addFoodToMeal = (meals, mealType, food) => {
  if (!mealType || !food) return meals;

  // Normalize food data
  const normalizedFood = {
    ...food,
    fat: food.fat || food["total-fat"] || 0,
    portion: food.portion || 100,
    calories: food.calories || 0,
    protein: food.protein || 0,
    carbs: food.carbs || 0
  };

  const currentMeal = meals[mealType] || [];
  return {
    ...meals,
    [mealType]: [...currentMeal, normalizedFood]
  };
};

// Remove food from a meal
export const removeFoodFromMeal = (meals, mealType, foodIndex) => {
  if (!mealType || typeof foodIndex !== 'number' || !meals[mealType]) return meals;

  const updatedMeal = [...meals[mealType]];
  updatedMeal.splice(foodIndex, 1);
  
  return {
    ...meals,
    [mealType]: updatedMeal
  };
};

// Calculate calories for a specific meal
export const calculateMealCalories = (meals, mealType) => {
  if (!mealType || !meals[mealType]) return 0;
  
  const foods = Array.isArray(meals[mealType]) ? meals[mealType] : [];
  return foods.reduce((total, food) => {
    if (!food || typeof food.calories !== 'number' || typeof food.portion !== 'number') return total;
    // Calculate calories based on portion (100g is the base)
    const portionRatio = food.portion / 100;
    return total + (food.calories * portionRatio);
  }, 0);
};

// Calculate total calories consumed across all meals
export const totalCaloriesConsumed = (meals) => {
  if (!meals) return 0;
  
  return Object.keys(meals).reduce((total, mealType) => {
    return total + calculateMealCalories(meals, mealType);
  }, 0);
};

// Calculate remaining calories
export const calculateRemainingCalories = (recommendedCalories, meals) => {
  if (!recommendedCalories) return 0;
  return recommendedCalories - totalCaloriesConsumed(meals);
};

// Calculate consumed macronutrients
export const calculateConsumedMacros = (meals) => {
  if (!meals) return { consumedProtein: 0, consumedCarbs: 0, consumedFat: 0, consumedFiber: 0 };

  const consumedProtein = Object.values(meals).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.protein || 0), 0) : 0), 0);

  const consumedCarbs = Object.values(meals).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.carbs || 0), 0) : 0), 0);

  const consumedFat = Object.values(meals).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.fat ?? food?.["total-fat"] ?? 0), 0) : 0), 0);

  const consumedFiber = Object.values(meals).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.fiber || 0), 0) : 0), 0);

  return {
    consumedProtein,
    consumedCarbs,
    consumedFat,
    consumedFiber
  };
};

// Update an entire meal
export const updateMeal = (meals, mealType, foods) => {
  return {
    ...meals,
    [mealType]: foods
  };
};