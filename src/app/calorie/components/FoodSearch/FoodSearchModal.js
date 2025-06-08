'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../../calorie.module.css';
import CategoryList from './CategoryList';
import FoodList from './FoodList';
import SelectedFoodsList from './SelectedFoodsList';

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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h3>انتخاب غذا</h3>
          <button type="button" className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.modalBody}>
          <CategoryList 
            foodDatabase={foodDatabase} 
            selectedCategory={selectedCategory} 
            onCategorySelect={handleCategorySelect} 
          />

          {selectedCategory && (
            <FoodList 
              selectedCategory={selectedCategory}
              foodDatabase={foodDatabase}
              searchQuery={searchQuery}
              selectedFoods={selectedFoods}
              onFoodSelect={handleFoodSelect}
              onPortionChange={handlePortionChange}
              onSearchChange={setSearchQuery}
            />
          )}

          <SelectedFoodsList 
            selectedFoods={selectedFoods}
            onPortionChange={handlePortionChange}
            onRemoveFood={handleRemoveFood}
            onAddSelectedFoods={handleAddSelectedFoods}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodSearchModal;