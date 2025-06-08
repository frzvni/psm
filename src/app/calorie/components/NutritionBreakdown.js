'use client';

import styles from '../calorie.module.css';
import { totalCaloriesConsumed, calculateConsumedMacros } from '../services/mealTrackingService';

const NutritionBreakdown = ({ meals, calculationResults }) => {
  if (!calculationResults) return null;

  const totalCalories = totalCaloriesConsumed(meals);
  const { consumedProtein, consumedCarbs, consumedFat, consumedFiber } = calculateConsumedMacros(meals);
  
  // Target macros from calculation results
  const { targetProtein, targetCarbs, targetFat, targetFiber } = calculationResults;

  return (
    <div className={styles.progressSection}>
      <div className={styles.progressHeader}>
        <h3>کالری دریافتی تا این لحظه</h3>
        <div className={styles.progressStats}>
          <div className={styles.progressStat}>
            <span className={styles.progressLabel}>کالری مصرف شده:</span>
            <span className={styles.consumed}>
              {totalCalories.toLocaleString('fa-IR')}
            </span>
          </div>
          <div className={styles.progressStat}>
            <span className={styles.progressLabel}>کالری باقیمانده:</span>
            <span className={styles.remaining}>
              {(calculationResults.recommendedCalories - totalCalories).toLocaleString('fa-IR')}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={`
            ${styles.progressFill}
            ${totalCalories > calculationResults?.recommendedCalories ? styles.warning : ''}
          `}
          style={{
            width: `${Math.min(100, (totalCalories / calculationResults?.recommendedCalories) * 100)}%` 
          }}
        />
      </div>

      <div className={styles.mealBreakdown}>
        <h4 className={styles.mealBreakdownTitle}>جزئیات مصرف مواد مغذی</h4>
        <div className={styles.mealBreakdownGrid}>
          {/* Calories */}
          <div className={styles.mealBreakdownItem}>
            <div className={styles.mealBreakdownItemTitle}>کالری</div>
            <div className={styles.mealBreakdownValue}>
              {totalCalories.toLocaleString('fa-IR')} کالری
            </div>
            <div className={styles.mealBreakdownTarget}>
              از {calculationResults?.recommendedCalories.toLocaleString('fa-IR')} کالری
            </div>
            <div className={`${styles.mealBreakdownExcess} ${totalCalories > calculationResults?.recommendedCalories ? styles.visible : ''}`}>
              <span className={styles.mealBreakdownExcessValue}>
                {Math.max(0, totalCalories - calculationResults?.recommendedCalories).toLocaleString('fa-IR')}
              </span> کالری اضافه
            </div>
            <div className={styles.mealBreakdownProgress}>
              <div 
                className={`
                  ${styles.mealBreakdownProgressFill}
                  ${totalCalories > calculationResults?.recommendedCalories ? styles.warning : ''}
                `}
                style={{ width: `${Math.min(100, (totalCalories / calculationResults?.recommendedCalories) * 100)}%` }}
              />
            </div>
          </div>

          {/* Protein */}
          <div className={styles.mealBreakdownItem}>
            <div className={styles.mealBreakdownItemTitle}>پروتئین</div>
            <div className={styles.mealBreakdownValue}>
              {consumedProtein.toLocaleString('fa-IR')} گرم
            </div>
            <div className={styles.mealBreakdownTarget}>
              از {targetProtein.toLocaleString('fa-IR')} گرم
            </div>
            <div className={`${styles.mealBreakdownExcess} ${consumedProtein > targetProtein ? styles.visible : ''}`}>
              <span className={styles.mealBreakdownExcessValue}>
                {Math.max(0, consumedProtein - targetProtein).toLocaleString('fa-IR')}
              </span> گرم اضافه
            </div>
            <div className={styles.mealBreakdownProgress}>
              <div 
                className={`
                  ${styles.mealBreakdownProgressFill}
                  ${consumedProtein > targetProtein ? styles.warning : ''}
                `}
                style={{ width: `${Math.min(100, (consumedProtein / targetProtein) * 100)}%` }}
              />
            </div>
          </div>

          {/* Carbs */}
          <div className={styles.mealBreakdownItem}>
            <div className={styles.mealBreakdownItemTitle}>کربوهیدرات</div>
            <div className={styles.mealBreakdownValue}>
              {consumedCarbs.toLocaleString('fa-IR')} گرم
            </div>
            <div className={styles.mealBreakdownTarget}>
              از {targetCarbs.toLocaleString('fa-IR')} گرم
            </div>
            <div className={`${styles.mealBreakdownExcess} ${consumedCarbs > targetCarbs ? styles.visible : ''}`}>
              <span className={styles.mealBreakdownExcessValue}>
                {Math.max(0, consumedCarbs - targetCarbs).toLocaleString('fa-IR')}
              </span> گرم اضافه
            </div>
            <div className={styles.mealBreakdownProgress}>
              <div 
                className={`
                  ${styles.mealBreakdownProgressFill}
                  ${consumedCarbs > targetCarbs ? styles.warning : ''}
                `}
                style={{ width: `${Math.min(100, (consumedCarbs / targetCarbs) * 100)}%` }}
              />
            </div>
          </div>

          {/* Fat */}
          <div className={styles.mealBreakdownItem}>
            <div className={styles.mealBreakdownItemTitle}>چربی</div>
            <div className={styles.mealBreakdownValue}>
              {consumedFat.toLocaleString('fa-IR')} گرم
            </div>
            <div className={styles.mealBreakdownTarget}>
              از {targetFat.toLocaleString('fa-IR')} گرم
            </div>
            <div className={`${styles.mealBreakdownExcess} ${consumedFat > targetFat ? styles.visible : ''}`}>
              <span className={styles.mealBreakdownExcessValue}>
                {Math.max(0, consumedFat - targetFat).toLocaleString('fa-IR')}
              </span> گرم اضافه
            </div>
            <div className={styles.mealBreakdownProgress}>
              <div 
                className={`
                  ${styles.mealBreakdownProgressFill}
                  ${consumedFat > targetFat ? styles.warning : ''}
                `}
                style={{ width: `${Math.min(100, (consumedFat / targetFat) * 100)}%` }}
              />
            </div>
          </div>

          {/* Fiber */}
          <div className={styles.mealBreakdownItem}>
            <div className={styles.mealBreakdownItemTitle}>فیبر</div>
            <div className={styles.mealBreakdownValue}>
              {consumedFiber.toLocaleString('fa-IR')} گرم
            </div>
            <div className={styles.mealBreakdownTarget}>
              از {targetFiber.toLocaleString('fa-IR')} گرم
            </div>
            <div className={`${styles.mealBreakdownExcess} ${consumedFiber > targetFiber ? styles.visible : ''}`}>
              <span className={styles.mealBreakdownExcessValue}>
                {Math.max(0, consumedFiber - targetFiber).toLocaleString('fa-IR')}
              </span> گرم اضافه
            </div>
            <div className={styles.mealBreakdownProgress}>
              <div 
                className={`
                  ${styles.mealBreakdownProgressFill}
                  ${consumedFiber > targetFiber ? styles.warning : ''}
                `}
                style={{ width: `${Math.min(100, (consumedFiber / targetFiber) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionBreakdown;