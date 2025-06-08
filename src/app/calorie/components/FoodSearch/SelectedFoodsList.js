'use client';

import styles from '../../calorie.module.css';

const SelectedFoodsList = ({ selectedFoods, onPortionChange, onRemoveFood, onAddSelectedFoods }) => {
  if (!selectedFoods || selectedFoods.length === 0) return null;

  return (
    <div className={styles.selectedFoods}>
      <h4>غذاهای انتخاب شده</h4>
      {selectedFoods.map((food, index) => (
        <div key={index} className={styles.selectedFoodItem}>
          <div className={styles.selectedFoodInfo}>
            <span className={styles.selectedFoodName}>{food.name}</span>
            <div className={styles.portionInputGroup}>
              <input
                type="number"
                value={food.portion}
                onChange={(e) => onPortionChange(food.name, e.target.value)}
                className={styles.portionInput}
                min="0"
              />
              <span className={styles.gramLabel}>گرم</span>
            </div>
          </div>
          <button
            onClick={() => onRemoveFood(food.name)}
            className={styles.removeButton}
            type="button"
          >
            حذف
          </button>
        </div>
      ))}
      <button
        onClick={onAddSelectedFoods}
        className={`${styles.addSelectedButton} ${selectedFoods.length === 0 ? styles.disabled : ''}`}
        disabled={selectedFoods.length === 0}
        type="button"
      >
        افزودن غذاهای انتخاب شده
      </button>
    </div>
  );
};

export default SelectedFoodsList;