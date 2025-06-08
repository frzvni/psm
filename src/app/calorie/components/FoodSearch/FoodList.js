'use client';

import styles from '../../calorie.module.css';

const FoodList = ({ 
  selectedCategory, 
  foodDatabase, 
  searchQuery, 
  selectedFoods, 
  onFoodSelect, 
  onPortionChange,
  onSearchChange
}) => {
  const getFilteredFoods = () => {
    if (!selectedCategory || !foodDatabase[selectedCategory]) return [];
    const categoryFoods = foodDatabase[selectedCategory].foods || [];
    return categoryFoods.filter(food => {
      if (!food || !food.name) return false;
      return !searchQuery || food.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  if (!selectedCategory) return null;

  return (
    <div className={styles.foodSection}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="جستجوی غذا..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className={styles.foodList}>
        {getFilteredFoods().map(food => (
          <div key={food.name} className={styles.foodItem}>
            <div className={styles.foodInfo}>
              <span className={styles.foodName}>{food.name}</span>
              <span className={styles.foodCalories}>{food.calories} کالری</span>
            </div>
            <div className={styles.portionInputGroup}>
              <input
                type="number"
                className={styles.portionInput}
                value={selectedFoods.find(f => f.name === food.name)?.portion || 100}
                onChange={(e) => onPortionChange(food.name, e.target.value)}
                min="0"
              />
              <span className={styles.gramLabel}>گرم</span>
            </div>
            <button
              type="button"
              className={styles.addButton}
              onClick={() => onFoodSelect(food)}
            >
              افزودن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
