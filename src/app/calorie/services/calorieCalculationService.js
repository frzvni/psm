/**
 * Service for calorie and nutrition calculations
 */

// BMI categories
export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'کمبود وزن';
  if (bmi < 25) return 'وزن نرمال';
  if (bmi < 30) return 'اضافه وزن';
  if (bmi < 35) return 'چاقی درجه 1';
  if (bmi < 40) return 'چاقی درجه 2';
  return 'چاقی درجه 3';
};

// Activity level multipliers
export const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9
};

// Calculate BMR using Mifflin-St Jeor Equation
export const calculateBMR = (weight, height, age, gender) => {
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
};

// Calculate TDEE (Total Daily Energy Expenditure)
export const calculateTDEE = (bmr, activityLevel) => {
  return bmr * activityMultipliers[activityLevel];
};

// Calculate recommended calories based on goal
export const calculateRecommendedCalories = (tdee, goal) => {
  if (goal === 'lose') {
    return tdee - 500; // 500 calorie deficit for weight loss
  } else if (goal === 'gain') {
    return tdee + 500; // 500 calorie surplus for weight gain
  } else {
    return tdee; // maintenance
  }
};

// Calculate BMI
export const calculateBMI = (weight, heightInCm) => {
  const heightInMeters = heightInCm / 100;
  return weight / (heightInMeters * heightInMeters);
};

// Calculate macronutrient targets
export const calculateMacroTargets = (recommendedCalories) => {
  const proteinCalories = recommendedCalories * 0.15;
  const fatCalories = recommendedCalories * 0.30;
  const carbsCalories = recommendedCalories * 0.55;

  return {
    targetProtein: Math.round(proteinCalories / 4),
    targetFat: Math.round(fatCalories / 9),
    targetCarbs: Math.round(carbsCalories / 4),
    targetFiber: 25 // Recommended minimum fiber intake in grams
  };
};

// Calculate all nutrition data
export const calculateNutrition = (userInfo) => {
  const bmr = calculateBMR(
    parseFloat(userInfo.weight),
    parseFloat(userInfo.height),
    parseFloat(userInfo.age),
    userInfo.gender
  );

  const tdee = calculateTDEE(bmr, userInfo.activityLevel);
  const recommendedCalories = calculateRecommendedCalories(tdee, userInfo.goal);
  const bmi = calculateBMI(parseFloat(userInfo.weight), parseFloat(userInfo.height));
  const macros = calculateMacroTargets(recommendedCalories);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    recommendedCalories: Math.round(recommendedCalories),
    bmi,
    ...macros
  };
};