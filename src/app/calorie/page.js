'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import styles from './calorie.module.css';
import Navbar from '../components/Navbar';

// Import components
import UserInfoForm from './components/UserInfoForm';
import ResultsDisplay from './components/ResultsDisplay';
import FastingTimer from './components/FastingTimer';
import MealTracker from './components/MealTracker/MealTracker';
import NutritionBreakdown from './components/NutritionBreakdown';
import MedicalConditionsModal from './components/MedicalConditionsModal';
import FoodSearchModal from './components/FoodSearch/FoodSearchModal';

// Import services
import { getRandomTip } from './services/fastingService';
import foodDatabase from './foodDatabase';

export default function CaloriePage() {
  // State variables
  const [dailyTip, setDailyTip] = useState('برای کاهش وزن، وعده‌های غذایی خود را در بشقاب‌های کوچکتر سرو کنید.');
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [fastingTime, setFastingTime] = useState('00:00:00');
  const [isFasting, setIsFasting] = useState(false);
  const [showMedicalModal, setShowMedicalModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    targetWeight: '',
    activityLevel: '',
    goal: ''
  });
  const [meals, setMeals] = useState({
    breakfast: [],
    morning_snack: [],
    lunch: [],
    afternoon_snack: [],
    dinner: [],
    snacks: []
  });
  const [calculationResults, setCalculationResults] = useState(null);
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [fastingHours, setFastingHours] = useState(16);
  const [remainingTime, setRemainingTime] = useState(0);

  // Set random daily tip on component mount
  useEffect(() => {
    setDailyTip(getRandomTip());
  }, []);

  // Handle food selection from modal
  const handleFoodSelect = (food) => {
    console.log('Food selected in parent:', food);
    if (selectedMeal) {
      setMeals(prevMeals => {
        const currentMeal = prevMeals[selectedMeal] || [];
        const updatedMeals = {
          ...prevMeals,
          [selectedMeal]: [...currentMeal, food]
        };
        console.log('Updated meals:', updatedMeals);
        return updatedMeals;
      });
      setShowFoodModal(false);
      setSelectedMeal(null);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.welcomeSection}>
          <h1>کالری شمار هوشمند - مسیر شما به سلامتی و تناسب اندام</h1>
          <p className={styles.lead}>برنامه جامع کاهش وزن و تغذیه هوشمند</p>
        </div>

        <div className={styles.dailyTip}>
          <FontAwesomeIcon icon={faLightbulb} className={styles.me2} />
          <h4>نکته روز</h4>
          <p>{dailyTip}</p>
        </div>

        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.featureIcon} />
            <h3>محاسبه کالری</h3>
            <p>محاسبه دقیق کالری مورد نیاز روزانه بر اساس مشخصات فردی</p>
          </div>
          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.featureIcon} />
            <h3>ثبت وعده‌های غذایی</h3>
            <p>ثبت و محاسبه کالری وعده‌های غذایی روزانه</p>
          </div>
        </div>

        {/* User Information Form */}
        <UserInfoForm 
          userInfo={userInfo} 
          setUserInfo={setUserInfo} 
          setCalculationResults={setCalculationResults} 
        />

        {/* Results Display */}
        {calculationResults && <ResultsDisplay calculationResults={calculationResults} />}

        <div className={styles.healthWarning}>
          <h4>
            <FontAwesomeIcon icon={faExclamationTriangle} className={styles.me2} />
            توجه
          </h4>
          <p>قبل از شروع هر برنامه کاهش وزن، از شرایط سلامت خود مطلع باشید.</p>
        </div>

        {/* Fasting Timer */}
        <FastingTimer 
          isFasting={isFasting}
          setIsFasting={setIsFasting}
          fastingTime={fastingTime}
          setFastingTime={setFastingTime}
          fastingHours={fastingHours}
          setFastingHours={setFastingHours}
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          setShowMedicalModal={setShowMedicalModal}
        />

        {/* Meal Tracker */}
        <MealTracker 
          meals={meals}
          setMeals={setMeals}
          calculationResults={calculationResults}
          setSelectedMeal={setSelectedMeal}
          setShowFoodModal={setShowFoodModal}
        />

        {/* Nutrition Breakdown */}
        {calculationResults && (
          <NutritionBreakdown 
            meals={meals} 
            calculationResults={calculationResults} 
          />
        )}
      </div>

      {/* Modals */}
      <MedicalConditionsModal 
        isOpen={showMedicalModal} 
        onClose={() => setShowMedicalModal(false)} 
      />

      <FoodSearchModal
        isOpen={showFoodModal}
        onClose={() => {
          setShowFoodModal(false);
          setSelectedMeal(null);
        }}
        onFoodSelect={handleFoodSelect}
        foodDatabase={foodDatabase}
      />
    </div>
  );
}