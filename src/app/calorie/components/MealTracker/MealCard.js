'use client';

import styles from '../../calorie.module.css';
import { calculateMealCalories } from '../../services/mealTrackingService';

const MealCard = ({ 
  mealType, 
  title, 
  meals, 
  handleRemoveFood, 
  setSelectedMeal, 
  setShowFoodModal,
  mealTarget = 0
}) => {
  const mealCalories = calculateMealCalories(meals, mealType);

  return (
    <div className={styles.mealCard}>
      <div className={styles.mealHeader}>
        <h4>{title}</h4>
        <button
          type="button"
          className={styles.addFoodButton}
          onClick={() => {
            console.log('Opening food modal for meal:', mealType);
            setSelectedMeal(mealType);
            setShowFoodModal(true);
          }}
        >
          افزودن غذا
        </button>
      </div>
      <div className={styles.mealContent}>
        {meals[mealType]?.map((food, index) => (
          <div key={index} className={styles.foodItem}>
            <span>{food.name}</span>
            <span>{food.portion} گرم</span>
            <span>{food.calories} کالری</span>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => handleRemoveFood(mealType, index)}
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <div className={styles.mealFooter}>
        <span>کالری: {mealCalories}</span>
        <div className={styles.mealProgress}>
          <div 
            className={styles.mealProgressFill}
            style={{ width: `${Math.min(100, (mealCalories / mealTarget) * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MealCard;