'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAppleWhole, 
  faDumbbell, 
  faChartLine, 
  faClock, 
  faExclamationTriangle,
  faSun,
  faCoffee,
  faUtensils,
  faCookie,
  faMoon,
  faCalculator,
  faLightbulb,
  faPlus,
  faTimes,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import styles from './calorie.module.css';
import Navbar from '../components/Navbar';
import MedicalConditionsModal from './components/MedicalConditionsModal';
import FoodSearchModal from './components/FoodSearchModal';
import foodDatabase from './foodDatabase';

// Daily tips
const dailyTips = [
  "آب کافی بنوشید! حداقل 8 لیوان آب در روز برای کاهش وزن ضروری است.",
  "وعده‌های غذایی را منظم مصرف کنید تا متابولیسم بدن تنظیم شود.",
  "ورزش منظم را فراموش نکنید. حداقل 30 دقیقه پیاده‌روی روزانه توصیه می‌شود.",
  "خواب کافی داشته باشید. 7-8 ساعت خواب شبانه برای کاهش وزن ضروری است.",
  "از مصرف قند و شکر پرهیز کنید و به جای آن از میوه‌های تازه استفاده کنید.",
  "برای کاهش وزن، مصرف پروتئین ضروری است. پروتئین‌ها به عنوان منبع انرژی موثر هستند.",
  "کمبود ویتامین D و B12 باعث کاهش متابولیسم پایه می‌شود"
];

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'کمبود وزن';
  if (bmi < 25) return 'وزن نرمال';
  if (bmi < 30) return 'اضافه وزن';
  if (bmi < 35) return 'چاقی درجه 1';
  if (bmi < 40) return 'چاقی درجه 2';
  return 'چاقی درجه 3';
};

export default function CaloriePage() {
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
  const [maxCalories, setMaxCalories] = useState(0);
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  const [showFastingModal, setShowFastingModal] = useState(false);
  const [fastingHours, setFastingHours] = useState(16);
  const [remainingTime, setRemainingTime] = useState(0);
  const [tempFastingHours, setTempFastingHours] = useState(16);
  const [selectedFood, setSelectedFood] = useState(null);
  const [showFoodDropdown, setShowFoodDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);

  const activityLevels = [
    { value: 'sedentary', label: 'کم‌تحرک (Sedentary) - کار اداری یا نشسته، تحرک خیلی کم' },
    { value: 'light', label: 'کمابیش فعال (Lightly active) - فعالیت سبک ۱–۳ روز/هفته' },
    { value: 'moderate', label: 'فعال متوسط (Moderately active) - ورزش یا کار فیزیکی ملایم ۳–۵ روز/هفته' },
    { value: 'active', label: 'فعال زیاد (Very active) - ورزش شدید ۶–۷ روز/هفته' },
    { value: 'very_active', label: 'فوق‌العاده فعال (Extra active) - ورزش خیلی سنگین یا فعالیت دو شیفت' }
  ];

  const selectedActivity = activityLevels.find(level => level.value === userInfo.activityLevel);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isFasting) {
        const [hours, minutes, seconds] = fastingTime.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        setFastingTime(
          `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isFasting, fastingTime]);

  useEffect(() => {
    if (fastingHours > 0) {
      const calculateRemainingTime = () => {
        const now = new Date();
        const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const elapsedSeconds = Math.floor((now - startTime) / 1000);
        const totalSeconds = fastingHours * 3600;
        const remaining = Math.max(0, totalSeconds - elapsedSeconds);
        setRemainingTime(remaining);
      };

      calculateRemainingTime();
      const timer = setInterval(calculateRemainingTime, 1000);

      return () => clearInterval(timer);
    }
  }, [fastingHours]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate BMR using Mifflin-St Jeor Equation
    const bmr = userInfo.gender === 'male'
      ? 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age + 5
      : 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age - 161;

    // Apply activity multiplier to get TDEE
    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    }[userInfo.activityLevel];

    const tdee = bmr * activityMultiplier;

    // Adjust calorie goal based on user's goal
    let recommendedCalories;
    if (userInfo.goal === 'lose') {
      recommendedCalories = tdee - 500; // 500 calorie deficit for weight loss
    } else if (userInfo.goal === 'gain') {
      recommendedCalories = tdee + 500; // 500 calorie surplus for weight gain
    } else {
      recommendedCalories = tdee; // maintenance
    }

    // Calculate macronutrient distribution (15% protein, 30% fat, 55% carbs)
    const proteinCalories = recommendedCalories * 0.15;
    const fatCalories = recommendedCalories * 0.30;
    const carbsCalories = recommendedCalories * 0.55;

    // Convert calories to grams (protein: 4 kcal/g, fat: 9 kcal/g, carbs: 4 kcal/g)
    const targetProtein = Math.round(proteinCalories / 4);
    const targetFat = Math.round(fatCalories / 9);
    const targetCarbs = Math.round(carbsCalories / 4);
    const targetFiber = 25; // Recommended minimum fiber intake in grams

    // Calculate BMI
    const heightInMeters = userInfo.height / 100;
    const bmi = userInfo.weight / (heightInMeters * heightInMeters);

    setCalculationResults({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        recommendedCalories: Math.round(recommendedCalories),
      targetProtein,
      targetCarbs,
      targetFat,
      targetFiber,
      bmi: bmi
    });
  };

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    // Calculate calorie goal based on user info
    // This is a simplified calculation
    const bmr = userInfo.gender === 'male' 
      ? 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age + 5
      : 10 * userInfo.weight + 6.25 * userInfo.height - 5 * userInfo.age - 161;

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    }[userInfo.activityLevel];

    setCalorieGoal(Math.round(bmr * activityMultiplier));
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const toggleFasting = () => {
    if (!isFasting) {
      setFastingTime('00:00:00');
    }
    setIsFasting(!isFasting);
  };

  const handleAddFood = (mealType, food) => {
    console.log('Adding food to meal:', mealType, food);
    if (!mealType || !food) return;

    // Normalize food data
    const normalizedFood = {
      ...food,
      fat: food.fat || food["total-fat"] || 0,
      portion: food.portion || 100,
      calories: food.calories || 0,
      protein: food.protein || 0,
      carbs: food.carbs || 0
    };

    setMeals(prevMeals => {
      const currentMeal = prevMeals[mealType] || [];
      const updatedMeals = {
        ...prevMeals,
        [mealType]: [...currentMeal, normalizedFood]
      };
      console.log('Updated meals:', updatedMeals);
      return updatedMeals;
    });
    setShowFoodModal(false);
    setSelectedMeal(null);
  };

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
      // Force re-render by updating state
      setTimeout(() => {
        const total = totalCaloriesConsumed();
        console.log('Updated total calories after removal:', total);
      }, 0);
      return updatedMeals;
    });
  };

  const calculateMealCalories = (mealType) => {
    if (!mealType || !meals[mealType]) return 0;
    const foods = Array.isArray(meals[mealType]) ? meals[mealType] : [];
    return foods.reduce((total, food) => {
      if (!food || typeof food.calories !== 'number' || typeof food.portion !== 'number') return total;
      // Calculate calories based on portion (100g is the base)
      const portionRatio = food.portion / 100;
      return total + (food.calories * portionRatio);
    }, 0);
  };

  const totalCaloriesConsumed = () => {
    if (!meals) return 0;
    return Object.keys(meals).reduce((total, mealType) => {
      return total + calculateMealCalories(mealType);
    }, 0);
  };

  const calculateRemainingCalories = () => {
    if (!calculationResults?.recommendedCalories) return 0;
    return calculationResults.recommendedCalories - totalCaloriesConsumed();
  };

  // Calculate target macronutrients based on recommended calories
  const targetProtein = calculationResults?.recommendedCalories ? Math.round(calculationResults.recommendedCalories * 0.3 / 4) : 0;
  const targetCarbs = calculationResults?.recommendedCalories ? Math.round(calculationResults.recommendedCalories * 0.55 / 4) : 0;
  const targetFat = calculationResults?.recommendedCalories ? Math.round(calculationResults.recommendedCalories * 0.15 / 9) : 0;
  const targetFiber = 25; // Standard daily fiber target

  // Calculate consumed macronutrients
  const consumedProtein = Object.values(meals || {}).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.protein || 0), 0) : 0), 0);

  const consumedCarbs = Object.values(meals || {}).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.carbs || 0), 0) : 0), 0);

  const consumedFat = Object.values(meals || {}).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.fat ?? food?.["total-fat"] ?? 0), 0) : 0), 0);

  const consumedFiber = Object.values(meals || {}).reduce((total, meal) => 
    total + (Array.isArray(meal) ? meal.reduce((mealTotal, food) => mealTotal + (food?.fiber || 0), 0) : 0), 0);

  const handleSaveMeal = (mealType, foods) => {
    if (!mealType || !foods) return;

    const foodsArray = Array.isArray(foods) ? foods : [foods];
    setMeals(prev => {
      const currentMeal = prev[mealType] || [];
      const updatedMeals = {
        ...prev,
        [mealType]: [...currentMeal, ...foodsArray]
      };
      // Force re-render by updating state
      setTimeout(() => {
        const total = totalCaloriesConsumed();
        console.log('Updated total calories:', total);
      }, 0);
      return updatedMeals;
    });
    setShowFoodModal(false);
  };

  const handleMealUpdate = (mealType, foods) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [mealType]: foods
    }));
  };

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

  const renderMealCard = (mealType, title) => {
    const mealCalories = calculateMealCalories(mealType);
    const mealTarget = calculationResults?.mealTargets?.[mealType] || 0;

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

  const handleFastingHoursSubmit = (e) => {
    e.preventDefault();
    setFastingHours(tempFastingHours);
    setShowFastingModal(false);
  };

  const handleModalClose = () => {
    setTempFastingHours(fastingHours);
    setShowFastingModal(false);
  };

  const handleCategorySelect = (category) => {
    if (category && typeof category === 'string') {
      setSelectedCategory(category);
    }
  };

  const handleClickOutside = (e) => {
    if (e && e.target && !e.target.closest(`.${styles.foodSelect}`)) {
      setShowFoodDropdown(false);
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, []);

  const renderFoodDropdown = () => {
    if (!showFoodDropdown) return null;

    return (
      <div className={styles.selectOptions}>
        {Object.keys(foodDatabase).map((category) => (
          <div
            key={category}
            className={styles.selectOption}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCategorySelect(category);
            }}
          >
            {category}
          </div>
        ))}
        {selectedCategory && foodDatabase[selectedCategory] && (
          <div className={styles.foodSubOptions}>
            {foodDatabase[selectedCategory].foods.map((food) => (
              <div
                key={food.id}
                className={styles.selectOption}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleFoodSelect(food);
                }}
              >
                {food.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
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
            <FontAwesomeIcon icon={faCalculator} className={styles.featureIcon} />
            <h3>محاسبه کالری</h3>
            <p>محاسبه دقیق کالری مورد نیاز روزانه بر اساس مشخصات فردی</p>
          </div>
          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faUtensils} className={styles.featureIcon} />
            <h3>ثبت وعده‌های غذایی</h3>
            <p>ثبت و محاسبه کالری وعده‌های غذایی روزانه</p>
          </div>
        </div>

      <div className={styles.formSection}>
        <h2 className="mb-4">اطلاعات شخصی</h2>
          <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.col}>
                <label>شماره موبایل</label>
              <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
            <div className={styles.col}>
                <label>سن</label>
              <input
                  type="number"
                  value={userInfo.age}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
                <label>جنسیت</label>
              <select
                value={userInfo.gender}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, gender: e.target.value }))}
                required
              >
                <option value="">انتخاب کنید</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
              <div className={styles.col}>
                <label>قد (سانتی‌متر)</label>
                <input
                  type="number"
                  value={userInfo.height}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, height: e.target.value }))}
                  required
                />
              </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
                <label>وزن فعلی (کیلوگرم)</label>
              <input
                type="number"
                  value={userInfo.weight}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, weight: e.target.value }))}
                required
              />
            </div>
            <div className={styles.col}>
                <label>وزن ایده‌آل (کیلوگرم)</label>
              <input
                type="number"
                  value={userInfo.targetWeight}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, targetWeight: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>سطح فعالیت فیزیکی</label>
              <div className={styles.customSelect}>
                <div 
                  className={styles.selectHeader}
                  onClick={() => setShowActivityDropdown(!showActivityDropdown)}
                >
                  {selectedActivity ? selectedActivity.label : 'انتخاب کنید'}
                </div>
                {showActivityDropdown && (
                  <div className={styles.selectOptions}>
                    {activityLevels.map((level) => (
                      <div
                        key={level.value}
                        className={styles.selectOption}
                        onClick={() => {
                          setUserInfo(prev => ({ ...prev, activityLevel: level.value }));
                          setShowActivityDropdown(false);
                        }}
                      >
                        {level.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
              <div className={styles.col}>
                <label>هدف</label>
                <div className={styles.customSelect}>
                  <div 
                    className={styles.selectHeader}
                    onClick={() => setShowGoalDropdown(!showGoalDropdown)}
                  >
                    {userInfo.goal ? (
                      userInfo.goal === 'lose' ? 'کاهش وزن' :
                      userInfo.goal === 'maintain' ? 'حفظ وزن' :
                      'افزایش وزن'
                    ) : 'انتخاب کنید'}
                  </div>
                  {showGoalDropdown && (
                    <div className={styles.selectOptions}>
                      <div
                        className={styles.selectOption}
                        onClick={() => {
                          setUserInfo(prev => ({ ...prev, goal: 'lose' }));
                          setShowGoalDropdown(false);
                        }}
                      >
                        کاهش وزن
                      </div>
                      <div
                        className={styles.selectOption}
                        onClick={() => {
                          setUserInfo(prev => ({ ...prev, goal: 'maintain' }));
                          setShowGoalDropdown(false);
                        }}
                      >
                        حفظ وزن
                      </div>
                      <div
                        className={styles.selectOption}
                        onClick={() => {
                          setUserInfo(prev => ({ ...prev, goal: 'gain' }));
                          setShowGoalDropdown(false);
                        }}
                      >
                        افزایش وزن
                      </div>
                    </div>
                  )}
                </div>
              </div>
          </div>
            <button type="submit" className={styles.btnPrimary}>ثبت اطلاعات</button>
        </form>

          {calculationResults && (
            <div className={styles.results}>
              <h3>نتایج محاسبات</h3>
              <div className={styles.miniResultsRow}>
                <div className={styles.miniResultBox}>
                  <h5>شاخص توده بدنی (BMI)</h5>
                  <div>{typeof calculationResults.bmi === 'number' ? calculationResults.bmi.toFixed(1) : '-'}</div>
                  <div className={styles.miniResultLabel}>
                    {typeof calculationResults.bmi === 'number' ? (
                      calculationResults.bmi < 18.5 ? 'کمبود وزن' :
                      calculationResults.bmi < 25 ? 'وزن نرمال' :
                      calculationResults.bmi < 30 ? 'اضافه وزن' : 'چاقی'
                    ) : ''}
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
          )}
      </div>

        <div className={styles.healthWarning}>
                <h4>
            <FontAwesomeIcon icon={faExclamationTriangle} className={styles.me2} />
            توجه
                </h4>
          <p>قبل از شروع هر برنامه کاهش وزن، از شرایط سلامت خود مطلع باشید.</p>
        </div>

        <div className={styles.fastingTimer}>
          <h3>زمان‌سنج فستینگ</h3>
          {fastingHours > 0 ? (
            <>
              <div className={styles.fastingHours}>
                <span className={styles.hourIndicator}>⏰</span>
                {fastingHours} ساعت
              </div>
              <div className={styles.fastingButtons}>
                <button 
                  className={styles.btnLight} 
                  onClick={() => {
                    setTempFastingHours(fastingHours);
                    setShowFastingModal(true);
                  }}
                >
                  ثبت ساعات فستینگ
                </button>
                <button 
                  className={styles.checkConditionsBtn}
                  onClick={() => setShowMedicalModal(true)}
                >
                  بررسی شرایط پزشکی برای فستینگ
                </button>
              </div>
            </>
          ) : (
            <div className={styles.noFasting}>
              هنوز ساعات فستینگ ثبت نشده است
            </div>
          )}
        </div>

        <div className={styles.calorieCounter}>
          <h3>ثبت وعده‌های غذایی</h3>
          <div className={styles.mealCategories}>
            {renderMealCard('breakfast', 'صبحانه')}
            {renderMealCard('morning_snack', 'میان وعده صبح')}
            {renderMealCard('lunch', 'ناهار')}
            {renderMealCard('afternoon_snack', 'میان وعده عصر')}
            {renderMealCard('dinner', 'شام')}
          </div>
          {/* Progress Bar Section */}
          {calculationResults && (
          <div className={styles.progressSection}>
              <div className={styles.progressHeader}>
                <h3>کالری دریافتی تا این لحظه</h3>
                <div className={styles.progressStats}>
                  <div className={styles.progressStat}>
                    <span className={styles.progressLabel}>کالری مصرف شده:</span>
                    <span className={styles.consumed}>
                      {totalCaloriesConsumed().toLocaleString('fa-IR')}
              </span>
            </div>
                  <div className={styles.progressStat}>
                    <span className={styles.progressLabel}>کالری باقیمانده:</span>
                    <span className={styles.remaining}>
                      {(calculationResults.recommendedCalories - totalCaloriesConsumed()).toLocaleString('fa-IR')}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.progressBar}>
              <div
                  className={`
                    ${styles.progressFill}
                    ${totalCaloriesConsumed() > calculationResults?.recommendedCalories ? styles.warning : ''}
                  `}
                style={{
                    width: `${Math.min(100, (totalCaloriesConsumed() / calculationResults?.recommendedCalories) * 100)}%` 
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
                      {totalCaloriesConsumed().toLocaleString('fa-IR')} کالری
      </div>
                    <div className={styles.mealBreakdownTarget}>
                      از {calculationResults?.recommendedCalories.toLocaleString('fa-IR')} کالری
                    </div>
                    <div className={`${styles.mealBreakdownExcess} ${totalCaloriesConsumed() > calculationResults?.recommendedCalories ? styles.visible : ''}`}>
                      <span className={styles.mealBreakdownExcessValue}>
                        {Math.max(0, totalCaloriesConsumed() - calculationResults?.recommendedCalories).toLocaleString('fa-IR')}
                      </span> کالری اضافه
                    </div>
                    <div className={styles.mealBreakdownProgress}>
                      <div 
                        className={`
                          ${styles.mealBreakdownProgressFill}
                          ${totalCaloriesConsumed() > calculationResults?.recommendedCalories ? styles.warning : ''}
                        `}
                        style={{ width: `${Math.min(100, (totalCaloriesConsumed() / calculationResults?.recommendedCalories) * 100)}%` }}
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
          )}
        </div>
      </div>
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
