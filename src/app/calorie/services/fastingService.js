/**
 * Service for fasting timer functionality
 */

// Format time in seconds to HH:MM:SS format
export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// Update fasting time by adding one second
export const updateFastingTime = (fastingTime) => {
  const [hours, minutes, seconds] = fastingTime.split(':').map(Number);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
  const newHours = Math.floor(totalSeconds / 3600);
  const newMinutes = Math.floor((totalSeconds % 3600) / 60);
  const newSeconds = totalSeconds % 60;
  
  return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
};

// Calculate remaining time for fasting
export const calculateRemainingTime = (fastingHours) => {
  if (fastingHours <= 0) return 0;
  
  const now = new Date();
  const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const elapsedSeconds = Math.floor((now - startTime) / 1000);
  const totalSeconds = fastingHours * 3600;
  return Math.max(0, totalSeconds - elapsedSeconds);
};

// Daily tips for fasting and nutrition
export const dailyTips = [
  "آب کافی بنوشید! حداقل 8 لیوان آب در روز برای کاهش وزن ضروری است.",
  "وعده‌های غذایی را منظم مصرف کنید تا متابولیسم بدن تنظیم شود.",
  "ورزش منظم را فراموش نکنید. حداقل 30 دقیقه پیاده‌روی روزانه توصیه می‌شود.",
  "خواب کافی داشته باشید. 7-8 ساعت خواب شبانه برای کاهش وزن ضروری است.",
  "از مصرف قند و شکر پرهیز کنید و به جای آن از میوه‌های تازه استفاده کنید.",
  "برای کاهش وزن، مصرف پروتئین ضروری است. پروتئین‌ها به عنوان منبع انرژی موثر هستند.",
  "کمبود ویتامین D و B12 باعث کاهش متابولیسم پایه می‌شود"
];

// Get a random daily tip
export const getRandomTip = () => {
  const randomIndex = Math.floor(Math.random() * dailyTips.length);
  return dailyTips[randomIndex];
};