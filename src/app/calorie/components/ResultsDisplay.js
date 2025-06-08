'use client';

import styles from '../calorie.module.css';
import { getBMICategory } from '../services/calorieCalculationService';

const ResultsDisplay = ({ calculationResults }) => {
  if (!calculationResults) return null;

  return (
    <div className={styles.results}>
      <h3>نتایج محاسبات</h3>
      <div className={styles.miniResultsRow}>
        <div className={styles.miniResultBox}>
          <h5>شاخص توده بدنی (BMI)</h5>
          <div>{typeof calculationResults.bmi === 'number' ? calculationResults.bmi.toFixed(1) : '-'}</div>
          <div className={styles.miniResultLabel}>
            {typeof calculationResults.bmi === 'number' ? getBMICategory(calculationResults.bmi) : ''}
          </div>
        </div>
        <div className={styles.miniResultBox}>
          <h5>میزان متابولیسم پایه (BMR)</h5>
          <div>{calculationResults.bmr.toLocaleString('fa-IR')}</div>
          <div className={styles.miniResultLabel}>کالری در روز</div>
        </div>
        <div className={styles.miniResultBox}>
          <h5>میزان انرژی مصرفی روزانه (TDEE)</h5>
          <div>{calculationResults.tdee.toLocaleString('fa-IR')}</div>
          <div className={styles.miniResultLabel}>کالری در روز</div>
        </div>
      </div>
      <div className={styles.miniResultsRow}>
        <div className={styles.miniResultBox}>
          <h5>کالری توصیه شده</h5>
          <div className={styles.recommended}>{calculationResults.recommendedCalories.toLocaleString('fa-IR')}</div>
          <div className={styles.miniResultLabel}>کالری در روز</div>
        </div>
      </div>
      <div className={styles.macroResults}>
        <div className={styles.macroItem}>
          <h4>پروتئین</h4>
          <p><span>گرم:</span> <span>{calculationResults.targetProtein} گرم</span></p>
          <p><span>کالری:</span> <span>{calculationResults.targetProtein * 4} کالری</span></p>
          <p><span>درصد کل کالری:</span> <span>15%</span></p>
        </div>
        <div className={styles.macroItem}>
          <h4>کربوهیدرات</h4>
          <p><span>گرم:</span> <span>{calculationResults.targetCarbs} گرم</span></p>
          <p><span>کالری:</span> <span>{calculationResults.targetCarbs * 4} کالری</span></p>
          <p><span>درصد کل کالری:</span> <span>55%</span></p>
        </div>
        <div className={styles.macroItem}>
          <h4>چربی کل</h4>
          <p><span>گرم:</span> <span>{calculationResults.targetFat} گرم</span></p>
          <p><span>کالری:</span> <span>{calculationResults.targetFat * 9} کالری</span></p>
          <p><span>درصد کل کالری:</span> <span>30%</span></p>
        </div>
        <div className={styles.macroItem}>
          <h4>فیبر</h4>
          <p><span>گرم:</span> <span>{calculationResults.targetFiber} گرم</span></p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;