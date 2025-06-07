'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBreadSlice,
  faAppleWhole,
  faFish,
  faEgg,
  faCheese,
  faCarrot,
  faGlassWater,
  faSearch,
  faTimes,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import styles from '../calorie.module.css';

const categoryIcons = {
  "غلات و حبوبات": faBreadSlice,
  "میوه‌ها": faAppleWhole,
  "گوشت و پروتئین": faFish,
  "لبنیات": faEgg,
  "چربی‌ها": faCheese,
  "سبزیجات": faCarrot,
  "نوشیدنی‌ها": faGlassWater
};

const categories = [
  "غلات و حبوبات",
  "میوه‌ها",
  "گوشت و پروتئین",
  "لبنیات",
  "چربی‌ها",
  "سبزیجات",
  "نوشیدنی‌ها"
];

const FoodSearchModal = ({ isOpen, onClose, onFoodSelect, foodDatabase = {} }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedCategory(null);
      setSearchQuery('');
      setSelectedFoods([]);
    }
  }, [isOpen]);

  const handleCategorySelect = (category) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleFoodSelect = (food) => {
    if (!food || !food.name) return;

    const newFood = {
      ...food,
      portion: 100,
      calories: food.calories || 0,
      protein: food.protein || 0,
      carbs: food.carbs || 0,
      fat: food["total-fat"] || 0
    };

    console.log('Sending food to parent:', newFood);
    onFoodSelect(newFood);
    onClose();
  };

  const handlePortionChange = (foodName, newPortion) => {
    console.log('Portion change:', foodName, newPortion);
    if (!foodName) return;
    const portion = parseInt(newPortion) || 0;

    setSelectedFoods(selectedFoods.map(food => {
      if (food.name !== foodName) return food;
      return { ...food, portion: Math.max(0, portion) };
    }));
  };

  const handleRemoveFood = (foodName) => {
    console.log('Removing food:', foodName);
    setSelectedFoods(selectedFoods.filter(food => food.name !== foodName));
  };

  const handleAddSelectedFoods = () => {
    console.log('Adding selected foods:', selectedFoods);
    if (!selectedFoods.length) return;

    selectedFoods.forEach(food => {
      if (!food || !food.name) return;
      const normalizedFood = {
        ...food,
        fat: food["total-fat"] || 0,
        portion: food.portion || 100,
        calories: food.calories || 0,
        protein: food.protein || 0,
        carbs: food.carbs || 0
      };
      console.log('Sending food to parent:', normalizedFood);
      onFoodSelect(normalizedFood);
    });
    onClose();
  };

  const getFilteredFoods = () => {
    if (!selectedCategory || !foodDatabase[selectedCategory]) return [];
    const categoryFoods = foodDatabase[selectedCategory].foods || [];
    return categoryFoods.filter(food => {
      if (!food || !food.name) return false;
      return !searchQuery || food.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'غلات و حبوبات': '🌾',
      'لبنیات': '🥛',
      'گوشت و تخم مرغ': '🥩',
      'میوه‌ها': '🍎',
      'سبزیجات': '🥬',
      'چربی‌ها و روغن‌ها': '🫒',
      'آجیل و دانه‌ها': '🥜',
      'نوشیدنی‌ها': '🥤',
      'تنقلات': '🍪',
      'سایر': '🍽️'
    };
    return icons[category] || '🍽️';
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h3>انتخاب غذا</h3>
          <button type="button" className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.categoriesList}>
            {Object.entries(foodDatabase).map(([category, data]) => (
              <div
                key={category}
                className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                <div className={styles.categoryIcon}>
                  {getCategoryIcon(category)}
                </div>
                <div className={styles.categoryName}>
                  {category}
                </div>
                <div className={styles.categoryDescription}>
                  {data.description}
                </div>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className={styles.foodSection}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="جستجوی غذا..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                        onChange={(e) => handlePortionChange(food.name, e.target.value)}
                        min="0"
                      />
                      <span className={styles.gramLabel}>گرم</span>
                    </div>
                    <button
                      type="button"
                      className={styles.addButton}
                      onClick={() => handleFoodSelect(food)}
                    >
                      افزودن
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedFoods.length > 0 && (
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
                        onChange={(e) => handlePortionChange(food.name, e.target.value)}
                        className={styles.portionInput}
                        min="0"
                      />
                      <span className={styles.gramLabel}>گرم</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFood(food.name)}
                    className={styles.removeButton}
                    type="button"
                  >
                    حذف
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  selectedFoods.forEach(food => {
                    const newFood = {
                      ...food,
                      portion: food.portion || 100,
                      calories: food.calories || 0,
                      protein: food.protein || 0,
                      carbs: food.carbs || 0,
                      fat: food["total-fat"] || 0
                    };
                    onFoodSelect(newFood);
                  });
                  onClose();
                }}
                className={`${styles.addSelectedButton} ${selectedFoods.length === 0 ? styles.disabled : ''}`}
                disabled={selectedFoods.length === 0}
                type="button"
              >
                افزودن غذاهای انتخاب شده
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodSearchModal; 
