'use client';

import styles from '../../calorie.module.css';

const CategoryList = ({ foodDatabase, selectedCategory, onCategorySelect }) => {
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

  return (
    <div className={styles.categoriesList}>
      {Object.entries(foodDatabase).map(([category, data]) => (
        <div
          key={category}
          className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
          onClick={() => onCategorySelect(category)}
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
  );
};

export default CategoryList;