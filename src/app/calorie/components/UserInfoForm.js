'use client';

import { useState } from 'react';
import styles from '../calorie.module.css';
import { calculateNutrition } from '../services/calorieCalculationService';

const activityLevels = [
  { value: 'sedentary', label: 'کم‌تحرک (Sedentary) - کار اداری یا نشسته، تحرک خیلی کم' },
  { value: 'light', label: 'کمابیش فعال (Lightly active) - فعالیت سبک ۱–۳ روز/هفته' },
  { value: 'moderate', label: 'فعال متوسط (Moderately active) - ورزش یا کار فیزیکی ملایم ۳–۵ روز/هفته' },
  { value: 'active', label: 'فعال زیاد (Very active) - ورزش شدید ۶–۷ روز/هفته' },
  { value: 'very_active', label: 'فوق‌العاده فعال (Extra active) - ورزش خیلی سنگین یا فعالیت دو شیفت' }
];

const UserInfoForm = ({ userInfo, setUserInfo, setCalculationResults }) => {
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);

  const selectedActivity = activityLevels.find(level => level.value === userInfo.activityLevel);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateNutrition(userInfo);
    setCalculationResults(results);
  };

  return (
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
    </div>
  );
};

export default UserInfoForm;