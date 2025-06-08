'use client';

import { useState } from 'react';
import styles from '../../calorie.module.css';
import MealCard from './MealCard';
import { totalCaloriesConsumed } from '../../services/mealTrackingService';

const MealTracker = ({ 
  meals, 
  setMeals, 
  calculationResults, 
  setSelectedMeal, 
  setShowFoodModal 
}) => {
  const handleRemoveFood = (mealType, foodIndex) => {
    if (!mealType || typeof foodIndex !== 'number') return;

    setMeals(prev => {
      if (!prev || !prev[mealType]) return prev;
      const updatedMeal = [...prev[mealType]];
      updatedMeal.splice(foodIndex, 1);
      const updatedMeals = {
        ...prev,
        [mealType]: updatedMeal
      };
      return updatedMeals;
    });
  };

  return (
    <div className={styles.calorieCounter}>
      <h3>ثبت وعده‌های غذایی</h3>
      <div className={styles.mealCategories}>
        <MealCard 
          mealType="breakfast" 
          title="صبحانه" 
          meals={meals} 
          handleRemoveFood={handleRemoveFood} 
          setSelectedMeal={setSelectedMeal} 
          setShowFoodModal={setShowFoodModal}
          mealTarget={calculationResults?.recommendedCalories * 0.25} // 25% of daily calories
        />
        <MealCard 
          mealType="morning_snack" 
          title="میان وعده صبح" 
          meals={meals} 
          handleRemoveFood={handleRemoveFood} 
          setSelectedMeal={setSelectedMeal} 
          setShowFoodModal={setShowFoodModal}
          mealTarget={calculationResults?.recommendedCalories * 0.1} // 10% of daily calories
        />
        <MealCard 
          mealType="lunch" 
          title="ناهار" 
          meals={meals} 
          handleRemoveFood={handleRemoveFood} 
          setSelectedMeal={setSelectedMeal} 
          setShowFoodModal={setShowFoodModal}
          mealTarget={calculationResults?.recommendedCalories * 0.3} // 30% of daily calories
        />
        <MealCard 
          mealType="afternoon_snack" 
          title="میان وعده عصر" 
          meals={meals} 
          handleRemoveFood={handleRemoveFood} 
          setSelectedMeal={setSelectedMeal} 
          setShowFoodModal={setShowFoodModal}
          mealTarget={calculationResults?.recommendedCalories * 0.1} // 10% of daily calories
        />
        <MealCard 
          mealType="dinner" 
          title="شام" 
          meals={meals} 
          handleRemoveFood={handleRemoveFood} 
          setSelectedMeal={setSelectedMeal} 
          setShowFoodModal={setShowFoodModal}
          mealTarget={calculationResults?.recommendedCalories * 0.25} // 25% of daily calories
        />
      </div>
    </div>
  );
};

export default MealTracker;