// Food database
const foodDatabase = {
  "غلات و حبوبات": {
    "description": "منبع اصلی کربوهیدرات و فیبر",
    "recommended": "6-11 واحد در روز",
    "foods": [
      {
        "name": "برنج",
        "calories": 360,
        "unit": "100 گرم",
        "protein": 7,
        "carbs": 79,
        "total-fat": 0.6
      },
      {
        "name": "نان گندم",
        "calories": 250,
        "unit": "100 گرم",
        "protein": 9,
        "carbs": 45,
        "total-fat": 3
      },
      {
        "name": "ماکارونی پخته",
        "calories": 150,
        "unit": "یک لیوان",
        "protein": 5,
        "carbs": 30,
        "total-fat": 1
      },
      {
        "name": "عدس خام",
        "calories": 340,
        "unit": "100 گرم",
        "protein": 25,
        "carbs": 60,
        "total-fat": 1
      },
      {
        "name": "آرد ذرت",
        "calories": 370,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 81,
        "total-fat": 3.5
      },
      {
        "name": "آرد گندم",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 10,
        "carbs": 76,
        "total-fat": 1.5
      },
      {
        "name": "برنج پخته",
        "calories": 250,
        "unit": "یک کفگیر (~250 g)",
        "protein": 6.8,
        "carbs": 70,
        "total-fat": 0.8
      },
      {
        "name": "سوخاری (نان) (۱۰ g)",
        "calories": 35,
        "unit": "۱۰ گرم",
        "protein": 0.9,
        "carbs": 6,
        "total-fat": 0.7
      },
      {
        "name": "سویا (عدس سویا خشک) ۱۰۰ g",
        "calories": 380,
        "unit": "۱۰۰ گرم",
        "protein": 36,
        "carbs": 30,
        "total-fat": 20
      },
      {
        "name": "عدسی با کمی روغن (یک لیوان)",
        "calories": 185,
        "unit": "یک لیوان (~200 g)",
        "protein": 9,
        "carbs": 27,
        "total-fat": 3
      },
      {
        "name": "لوبیا چشم‌بلبلی پخته ۱۰۰ g",
        "calories": 80,
        "unit": "۱۰۰ گرم",
        "protein": 6.7,
        "carbs": 14,
        "total-fat": 0.5
      },
      {
        "name": "ماکارونی خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 12,
        "carbs": 75,
        "total-fat": 1.5
      },
      {
        "name": "ماکارونی پخته (یک لیوان)",
        "calories": 150,
        "unit": "یک لیوان (~200 g)",
        "protein": 5.5,
        "carbs": 30,
        "total-fat": 0.9
      },
      {
        "name": "نان (کف دست) ۳۰ g",
        "calories": 75,
        "unit": "۳۰ گرم",
        "protein": 2.4,
        "carbs": 14,
        "total-fat": 0.6
      },
      {
        "name": "نخود (یک دانه)",
        "calories": 1,
        "unit": "یک دانه (~0.1 g)",
        "protein": 0,
        "carbs": 0.2,
        "total-fat": 0
      },
      {
        "name": "نخود پخته ۱۰۰ g",
        "calories": 45,
        "unit": "۱۰۰ گرم",
        "protein": 2.4,
        "carbs": 7.6,
        "total-fat": 0.8
      },
      {
        "name": "نخود خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 60,
        "total-fat": 6
      },
      {
        "name": "نخود فرنگی ۱۰۰ g",
        "calories": 75,
        "unit": "۱۰۰ گرم",
        "protein": 5,
        "carbs": 14,
        "total-fat": 0.4
      },
      {
        "name": "آناناس ۱۰۰ g",
        "calories": 52,
        "unit": "۱۰۰ گرم",
        "protein": 0.5,
        "carbs": 13,
        "total-fat": 0.1
      },
      {
        "name": "آناناس (کمپوت) ۱۰۰ g",
        "calories": 90,
        "unit": "۱۰۰ گرم",
        "protein": 0.4,
        "carbs": 23,
        "total-fat": 0.1
      },
      {
        "name": "آناناس کنسرو (شربت) یک لیوان",
        "calories": 200,
        "unit": "یک لیوان (~240 g)",
        "protein": 0.8,
        "carbs": 50,
        "total-fat": 0.2
      },
      {
        "name": "برنج خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 80,
        "total-fat": 0.7
      },
      {
        "name": "برنج (نیم لیوان ~65 g خشک)",
        "calories": 234,
        "unit": "۶۵ گرم",
        "protein": 4.5,
        "carbs": 52,
        "total-fat": 0.4
      },
      {
        "name": "برنج (یک لیوان ~95 g خشک)",
        "calories": 342,
        "unit": "۹۵ گرم",
        "protein": 6.7,
        "carbs": 76,
        "total-fat": 0.6
      },
      {
        "name": "عدس خام ۱۰۰ g",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 60,
        "total-fat": 1.5
      },
      {
        "name": "لوبیا چشم‌بلبلی خام ۱۰۰ g",
        "calories": 230,
        "unit": "۱۰۰ گرم",
        "protein": 23,
        "carbs": 40,
        "total-fat": 2.7
      },
      {
        "name": "لوبیا سبز ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 2,
        "carbs": 7,
        "total-fat": 0.1
      },
      {
        "name": "لوبیا سفید ۱۰۰ g",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 21,
        "carbs": 60,
        "total-fat": 1.5
      },
      {
        "name": "لوبیا قرمز ۱۰۰ g",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 21,
        "carbs": 60,
        "total-fat": 1.5
      },
      {
        "name": "لوبیا قرمز پخته ۱۰۰ g",
        "calories": 110,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 20,
        "total-fat": 0.4
      },
      {
        "name": "لوبیا قرمز پخته (یک لیوان)",
        "calories": 200,
        "unit": "یک لیوان (~240 g)",
        "protein": 12,
        "carbs": 35,
        "total-fat": 0.8
      },
      {
        "name": "نان جو ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 46,
        "total-fat": 2.5
      },
      {
        "name": "نان خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 8,
        "carbs": 75,
        "total-fat": 3
      },
      {
        "name": "نان روغنی ۱۰۰ g",
        "calories": 450,
        "unit": "۱۰۰ گرم",
        "protein": 9,
        "carbs": 60,
        "total-fat": 18
      },
      {
        "name": "نان ساندویچی ۶۰ g",
        "calories": 150,
        "unit": "۶۰ گرم",
        "protein": 5,
        "carbs": 28,
        "total-fat": 3
      },
      {
        "name": "نان ساندویچی کوچک (۳۰ g)",
        "calories": 70,
        "unit": "۳۰ گرم",
        "protein": 2.5,
        "carbs": 13,
        "total-fat": 1.5
      },
      {
        "name": "نان سوخاری کوچک (یک عدد)",
        "calories": 50,
        "unit": "یک عدد (~15 g)",
        "protein": 1,
        "carbs": 10,
        "total-fat": 0.5
      },
      {
        "name": "نان سوخاری متوسط (۱۰ g)",
        "calories": 35,
        "unit": "۱۰ گرم",
        "protein": 0.7,
        "carbs": 7,
        "total-fat": 0.4
      },
      {
        "name": "نان سوخاری (کعک) یک عدد (~15 g)",
        "calories": 50,
        "unit": "یک عدد",
        "protein": 1,
        "carbs": 10,
        "total-fat": 0.6
      },
      {
        "name": "نان سیاه با سبوس ۱۰۰ g",
        "calories": 210,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 45,
        "total-fat": 2
      },
      {
        "name": "نان گندم ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 8,
        "carbs": 50,
        "total-fat": 2
      }
    ]
  },
  "لبنیات": {
    "description": "منبع کلسیم و پروتئین",
    "recommended": "2-3 واحد در روز",
    "foods": [
      {
        "name": "شیر",
        "calories": 110,
        "unit": "یک لیوان",
        "protein": 8,
        "carbs": 12,
        "total-fat": 5
      },
      {
        "name": "ماست",
        "calories": 55,
        "unit": "100 گرم",
        "protein": 3.5,
        "carbs": 4,
        "total-fat": 3
      },
      {
        "name": "پنیر پاستوریزه",
        "calories": 250,
        "unit": "100 گرم",
        "protein": 25,
        "carbs": 1,
        "total-fat": 15
      },
      {
        "name": "آش دوغ",
        "calories": 250,
        "unit": "یک لیوان (~250 g)",
        "protein": 12,
        "carbs": 35,
        "total-fat": 8
      },
      {
        "name": "بستنی پاستوریزه",
        "calories": 190,
        "unit": "۱۰۰ گرم",
        "protein": 3.5,
        "carbs": 24,
        "total-fat": 7
      },
      {
        "name": "چای شیرین (۴ حبه قند)",
        "calories": 40,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 10,
        "total-fat": 0
      },
      {
        "name": "شیرینی خشک ۱۰۰ g",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 4,
        "carbs": 70,
        "total-fat": 25
      },
      {
        "name": "کره (یک قاشق ~14 g)",
        "calories": 100,
        "unit": "یک قاشق",
        "protein": 0.12,
        "carbs": 0,
        "total-fat": 11
      },
      {
        "name": "کره حیوانی ۱۰۰ g",
        "calories": 750,
        "unit": "۱۰۰ گرم",
        "protein": 0.5,
        "carbs": 0.1,
        "total-fat": 82
      },
      {
        "name": "مارگارین (کره نبات) ۱۰۰ g",
        "calories": 850,
        "unit": "۱۰۰ گرم",
        "protein": 0.1,
        "carbs": 0.1,
        "total-fat": 94
      },
      {
        "name": "ماست ۱۰۰ g",
        "calories": 55,
        "unit": "۱۰۰ گرم",
        "protein": 3.5,
        "carbs": 4,
        "total-fat": 1.5
      },
      {
        "name": "ماست کم‌چرب (یک لیوان ~240 g)",
        "calories": 110,
        "unit": "یک لیوان",
        "protein": 7,
        "carbs": 8,
        "total-fat": 3
      },
      {
        "name": "ماست کیسه‌ای ۱۰۰ g",
        "calories": 154,
        "unit": "۱۰۰ گرم",
        "protein": 8,
        "carbs": 8,
        "total-fat": 9
      },
      {
        "name": "پنیر بلغاری ۱۰۰ g",
        "calories": 329,
        "unit": "۱۰۰ گرم",
        "protein": 17,
        "carbs": 4,
        "total-fat": 27
      },
      {
        "name": "پنیر پاستوریزه ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 3,
        "total-fat": 20
      },
      {
        "name": "پنیر محلی کم‌چرب ۱۰۰ g",
        "calories": 210,
        "unit": "۱۰۰ گرم",
        "protein": 16,
        "carbs": 2,
        "total-fat": 15
      },
      {
        "name": "پوره با شیر (بدون کره) یک لیوان",
        "calories": 140,
        "unit": "یک لیوان (~240 g)",
        "protein": 4,
        "carbs": 29,
        "total-fat": 1
      },
      {
        "name": "خامه سفت ۱۰۰ g",
        "calories": 350,
        "unit": "۱۰۰ گرم",
        "protein": 2.1,
        "carbs": 3,
        "total-fat": 35
      },
      {
        "name": "خامه شل ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 2,
        "carbs": 4,
        "total-fat": 25
      },
      {
        "name": "دوغ ۱۰۰ g",
        "calories": 27,
        "unit": "۱۰۰ گرم",
        "protein": 3.5,
        "carbs": 2,
        "total-fat": 0.5
      },
      {
        "name": "سیب (کنسرو شیرین) یک لیوان",
        "calories": 180,
        "unit": "یک لیوان (~240 g)",
        "protein": 0.5,
        "carbs": 48,
        "total-fat": 0.2
      },
      {
        "name": "شیر (یک لیوان ~240 ml)",
        "calories": 110,
        "unit": "یک لیوان",
        "protein": 8,
        "carbs": 12,
        "total-fat": 4.8
      },
      {
        "name": "شیر تصفیه‌شده (یک فنجان ~200 ml)",
        "calories": 90,
        "unit": "یک فنجان",
        "protein": 6.7,
        "carbs": 10,
        "total-fat": 4
      },
      {
        "name": "شیر خشک ۱۰۰ g",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 35,
        "total-fat": 27
      },
      {
        "name": "شیر غلیظ نستله ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 6.7,
        "carbs": 55,
        "total-fat": 9
      },
      {
        "name": "شیر گاو کم‌چرب ۱۰۰ g",
        "calories": 55,
        "unit": "۱۰۰ گرم",
        "protein": 3.4,
        "carbs": 5,
        "total-fat": 1.7
      },
      {
        "name": "شیر میش ۱۰۰ g",
        "calories": 95,
        "unit": "۱۰۰ گرم",
        "protein": 4.9,
        "carbs": 4.8,
        "total-fat": 6.7
      },
      {
        "name": "کیک بدون خامه ۱۰۰ g",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 5,
        "carbs": 48,
        "total-fat": 13
      },
      {
        "name": "لیمو شیرین ۱۰۰ g",
        "calories": 23,
        "unit": "۱۰۰ گرم",
        "protein": 0.6,
        "carbs": 6,
        "total-fat": 0.2
      }
    ]
  },
  "گوشت و پروتئین": {
    "description": "منبع اصلی پروتئین و آهن",
    "recommended": "2-3 واحد در روز",
    "foods": [
      {
        "name": "گوشت گوساله",
        "calories": 200,
        "unit": "100 گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 12
      },
      {
        "name": "گوشت مرغ",
        "calories": 200,
        "unit": "100 گرم",
        "protein": 31,
        "carbs": 0,
        "total-fat": 9
      },
      {
        "name": "ماهی",
        "calories": 100,
        "unit": "100 گرم",
        "protein": 20,
        "carbs": 0,
        "total-fat": 2
      },
      {
        "name": "بیفتیک (استیک گوشت گاو)",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 20
      },
      {
        "name": "تخم مرغ (زرده تنها)",
        "calories": 50,
        "unit": "یک عدد (~17 g)",
        "protein": 2.7,
        "carbs": 0.6,
        "total-fat": 4.5
      },
      {
        "name": "تخم مرغ (سفیده تنها)",
        "calories": 20,
        "unit": "یک عدد (~33 g)",
        "protein": 3.6,
        "carbs": 0.2,
        "total-fat": 0
      },
      {
        "name": "تخم مرغ آب‌پز (متوسط)",
        "calories": 70,
        "unit": "یک عدد (~50 g)",
        "protein": 6,
        "carbs": 0.6,
        "total-fat": 5
      },
      {
        "name": "تخم مرغ متوسط",
        "calories": 70,
        "unit": "یک عدد (~50 g)",
        "protein": 6,
        "carbs": 0.6,
        "total-fat": 5
      },
      {
        "name": "تخم مرغ نیمرو (کم‌روغن)",
        "calories": 130,
        "unit": "یک عدد",
        "protein": 6,
        "carbs": 1,
        "total-fat": 10
      },
      {
        "name": "جگر مرغ (۲۰ g)",
        "calories": 30,
        "unit": "۲۰ گرم",
        "protein": 3.8,
        "carbs": 0,
        "total-fat": 2.5
      },
      {
        "name": "جگر مرغ خام (۱۰۰ g)",
        "calories": 125,
        "unit": "۱۰۰ گرم",
        "protein": 17,
        "carbs": 1,
        "total-fat": 4
      },
      {
        "name": "سوسیس (۱۰۰ g)",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 13,
        "carbs": 2,
        "total-fat": 26
      },
      {
        "name": "سوسیس (یک عدد کوچک ~50 g)",
        "calories": 150,
        "unit": "۵۰ گرم",
        "protein": 6.5,
        "carbs": 1,
        "total-fat": 13
      },
      {
        "name": "گوشت گاو بدون چربی ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 10
      },
      {
        "name": "گوشت گوساله ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 10
      },
      {
        "name": "گوشت گوسفند با چربی ۱۰۰ g",
        "calories": 330,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 25
      },
      {
        "name": "گوشت ماهی ۱۰۰ g",
        "calories": 100,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 0,
        "total-fat": 3
      },
      {
        "name": "گوشت مرغ ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 9
      },
      {
        "name": "گوشت همبرگر بدون چربی ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 10
      },
      {
        "name": "ماهی (قطعه متوسط ~220 g)",
        "calories": 220,
        "unit": "۲۲۰ گرم",
        "protein": 44,
        "carbs": 0,
        "total-fat": 3
      },
      {
        "name": "تن ماهی (با روغن کم) ۱۰۰ g",
        "calories": 315,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 22
      },
      {
        "name": "دل مرغ ۱۰۰ g",
        "calories": 170,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 8
      },
      {
        "name": "ساندویچ همبرگر (یک عدد)",
        "calories": 500,
        "unit": "یک عدد (~200 g)",
        "protein": 25,
        "carbs": 45,
        "total-fat": 25
      },
      {
        "name": "سنگدان مرغ ۱۰۰ g",
        "calories": 113,
        "unit": "۱۰۰ گرم",
        "protein": 16,
        "carbs": 0,
        "total-fat": 5.5
      },
      {
        "name": "کالباس ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 16,
        "total-fat": 21
      },
      {
        "name": "گوشت بره با چربی ۱۰۰ g",
        "calories": 330,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 28
      },
      {
        "name": "گوشت خالص گوسفند ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 10
      },
      {
        "name": "گوشت گاو با چربی ۱۰۰ g",
        "calories": 350,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 30
      },
      {
        "name": "ماهی (کلی) ۱۰۰ g",
        "calories": 100,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 0,
        "total-fat": 3
      },
      {
        "name": "مرغ (بدون پوست) ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 0,
        "total-fat": 9
      },
      {
        "name": "آبگوشت کامل (کم‌چرب) یک لیوان",
        "calories": 320,
        "unit": "یک لیوان (~240 g)",
        "protein": 20,
        "carbs": 12,
        "total-fat": 25
      }
    ]
  },
  "میوه‌ها": {
    "description": "منبع ویتامین‌ها و فیبر",
    "recommended": "2-4 واحد در روز",
    "foods": [
      {
        "name": "سیب",
        "calories": 55,
        "unit": "100 گرم",
        "protein": 0.3,
        "carbs": 14,
        "total-fat": 0.2
      },
      {
        "name": "پرتقال",
        "calories": 40,
        "unit": "100 گرم",
        "protein": 0.9,
        "carbs": 9,
        "total-fat": 0.1
      },
      {
        "name": "موز",
        "calories": 95,
        "unit": "100 گرم",
        "protein": 1.1,
        "carbs": 23,
        "total-fat": 0.3
      },
      {
        "name": "آلبالو (کمپوت)",
        "calories": 90,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 22,
        "total-fat": 0.1
      },
      {
        "name": "آلبالو با هسته (تازه)",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 15,
        "total-fat": 0.3
      },
      {
        "name": "آلبالو تازه با هسته",
        "calories": 60,
        "unit": "یک لیوان (~100 g)",
        "protein": 1,
        "carbs": 15,
        "total-fat": 0.3
      },
      {
        "name": "انجیر (تازه یا خشک)",
        "calories": 25,
        "unit": "یک عدد (~50 g)",
        "protein": 0.8,
        "carbs": 12,
        "total-fat": 0.15
      },
      {
        "name": "انجیر (تازه)",
        "calories": 80,
        "unit": "۱۰۰ گرم",
        "protein": 0.8,
        "carbs": 19,
        "total-fat": 0.3
      },
      {
        "name": "انجیر خشک",
        "calories": 270,
        "unit": "۱۰۰ گرم",
        "protein": 3.6,
        "carbs": 63,
        "total-fat": 0.9
      },
      {
        "name": "انگور",
        "calories": 80,
        "unit": "۱۰۰ گرم",
        "protein": 0.7,
        "carbs": 17,
        "total-fat": 0.2
      },
      {
        "name": "انگور (آب)",
        "calories": 220,
        "unit": "یک لیوان (~240 g)",
        "protein": 2,
        "carbs": 26,
        "total-fat": 0.4
      },
      {
        "name": "پرتقال (آب)",
        "calories": 110,
        "unit": "یک لیوان (~240 g)",
        "protein": 2,
        "carbs": 26,
        "total-fat": 0.4
      },
      {
        "name": "خرما (یک عدد)",
        "calories": 20,
        "unit": "یک عدد (~8 g)",
        "protein": 0.2,
        "carbs": 5,
        "total-fat": 0
      },
      {
        "name": "خرما با هسته (۱۰۰ g)",
        "calories": 240,
        "unit": "۱۰۰ گرم",
        "protein": 1.8,
        "carbs": 60,
        "total-fat": 0.4
      },
      {
        "name": "خرما یک فنجان (~143 g)",
        "calories": 505,
        "unit": "۱۴۳ گرم",
        "protein": 7.1,
        "carbs": 80,
        "total-fat": 0.6
      },
      {
        "name": "خرمالو (یک عدد ~200 g)",
        "calories": 80,
        "unit": "یک عدد",
        "protein": 0.8,
        "carbs": 20,
        "total-fat": 0.4
      },
      {
        "name": "خرمای تازه (رطب) ۱۰۰ g",
        "calories": 163,
        "unit": "۱۰۰ گرم",
        "protein": 1.8,
        "carbs": 42,
        "total-fat": 0.2
      },
      {
        "name": "خرمای خشک ۱۰۰ g",
        "calories": 318,
        "unit": "۱۰۰ گرم",
        "protein": 2.5,
        "carbs": 75,
        "total-fat": 0.4
      },
      {
        "name": "سیب درختی ۱۰۰ g",
        "calories": 55,
        "unit": "۱۰۰ گرم",
        "protein": 0.3,
        "carbs": 14,
        "total-fat": 0.2
      },
      {
        "name": "سیب زمینی ۱۰۰ g",
        "calories": 75,
        "unit": "۱۰۰ گرم",
        "protein": 2,
        "carbs": 17,
        "total-fat": 0.1
      },
      {
        "name": "سیب زمینی کبابی ۱۰۰ g",
        "calories": 93,
        "unit": "۱۰۰ گرم",
        "protein": 2.5,
        "carbs": 20,
        "total-fat": 0.2
      },
      {
        "name": "گیلاس ۱۰۰ g",
        "calories": 70,
        "unit": "۱۰۰ گرم",
        "protein": 1.1,
        "carbs": 18,
        "total-fat": 0.3
      },
      {
        "name": "موز ۱۰۰ g",
        "calories": 95,
        "unit": "۱۰۰ گرم",
        "protein": 1.1,
        "carbs": 23,
        "total-fat": 0.3
      },
      {
        "name": "موز متوسط (یک عدد ~118 g)",
        "calories": 100,
        "unit": "یک عدد",
        "protein": 1.3,
        "carbs": 27,
        "total-fat": 0.3
      },
      {
        "name": "انار تازه (دانه) ۱۰۰ g",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 1.7,
        "carbs": 15,
        "total-fat": 1.2
      },
      {
        "name": "انار کامل با پوست ۱۰۰ g",
        "calories": 35,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 9,
        "total-fat": 0.3
      },
      {
        "name": "پوره سیب‌زمینی یک لیوان",
        "calories": 180,
        "unit": "یک لیوان (~240 g)",
        "protein": 4,
        "carbs": 38,
        "total-fat": 0.5
      },
      {
        "name": "توت تازه ۱۰۰ g",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 1.4,
        "carbs": 14,
        "total-fat": 0.3
      },
      {
        "name": "توت سفید خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 3,
        "carbs": 84,
        "total-fat": 0.5
      },
      {
        "name": "توت فرنگی ۱۰۰ g",
        "calories": 35,
        "unit": "۱۰۰ گرم",
        "protein": 0.7,
        "carbs": 8,
        "total-fat": 0.3
      },
      {
        "name": "چیپس سیب‌زمینی (ده عدد)",
        "calories": 130,
        "unit": "۱۰ عدد (~25 g)",
        "protein": 1.5,
        "carbs": 15,
        "total-fat": 7
      },
      {
        "name": "سیب زمینی (۱۱۰ g) (~یک عدد بزرگ)",
        "calories": 80,
        "unit": "۱۱۰ گرم",
        "protein": 1.8,
        "carbs": 17,
        "total-fat": 0.2
      },
      {
        "name": "چیپس سیب‌زمینی (۱۰۰ g)",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 62,
        "total-fat": 29
      },
      {
        "name": "سیب متوسط (یک عدد ~182 g)",
        "calories": 70,
        "unit": "یک عدد",
        "protein": 0.3,
        "carbs": 19,
        "total-fat": 0.2
      },
      {
        "name": "شربت پرتقال (یک لیوان)",
        "calories": 170,
        "unit": "یک لیوان",
        "protein": 0.5,
        "carbs": 42,
        "total-fat": 0.1
      },
      {
        "name": "کمپوت گیلاس (یک لیوان)",
        "calories": 190,
        "unit": "یک لیوان (~240 g)",
        "protein": 1.4,
        "carbs": 48,
        "total-fat": 0.2
      },
      {
        "name": "هلوی کمپوت (یک لیوان)",
        "calories": 200,
        "unit": "یک لیوان (~240 g)",
        "protein": 1.2,
        "carbs": 50,
        "total-fat": 0.3
      },
      {
        "name": "یک لیوان توت (~100 g)",
        "calories": 85,
        "unit": "۱۰۰ گرم",
        "protein": 1.4,
        "carbs": 20,
        "total-fat": 0.5
      },
      {
        "name": "هلوی تازه ۱۰۰ g",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 10,
        "total-fat": 0.2
      }
    ]
  },
  "سبزیجات": {
    "description": "منبع ویتامین‌ها، مواد معدنی و فیبر",
    "recommended": "3-5 واحد در روز",
    "foods": [
      {
        "name": "هویج",
        "calories": 40,
        "unit": "100 گرم",
        "protein": 0.9,
        "carbs": 9,
        "total-fat": 0.2
      },
      {
        "name": "خیار",
        "calories": 15,
        "unit": "100 گرم",
        "protein": 0.7,
        "carbs": 3.6,
        "total-fat": 0.1
      },
      {
        "name": "گوجه فرنگی",
        "calories": 15,
        "unit": "100 گرم",
        "protein": 0.9,
        "carbs": 3.2,
        "total-fat": 0.2
      },
      {
        "name": "خیار شور",
        "calories": 12,
        "unit": "۱۰۰ گرم",
        "protein": 0.6,
        "carbs": 2,
        "total-fat": 0.1
      },
      {
        "name": "سوپ گوجه‌فرنگی",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 1.2,
        "carbs": 5,
        "total-fat": 0.3
      },
      {
        "name": "فلفل سبز یا قرمز ۱۰۰ g",
        "calories": 22,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 4.6,
        "total-fat": 0.2
      },
      {
        "name": "کلم پخته (یک لیوان ~100 g)",
        "calories": 40,
        "unit": "یک لیوان",
        "protein": 2.3,
        "carbs": 6,
        "total-fat": 0.2
      },
      {
        "name": "کلم پیشخوان (کلم سفید) ۱۰۰ g",
        "calories": 22,
        "unit": "۱۰۰ گرم",
        "protein": 1.3,
        "carbs": 5,
        "total-fat": 0.1
      },
      {
        "name": "گل‌کلم خام ۱۰۰ g",
        "calories": 10,
        "unit": "۱۰۰ گرم",
        "protein": 1.9,
        "carbs": 2,
        "total-fat": 0.1
      },
      {
        "name": "پیاز (یک عدد ~110 g)",
        "calories": 5,
        "unit": "یک عدد (~110 g)",
        "protein": 0.9,
        "carbs": 10,
        "total-fat": 0.1
      },
      {
        "name": "پیازچه (یک عدد ~15 g)",
        "calories": 3,
        "unit": "یک عدد",
        "protein": 0.3,
        "carbs": 0.7,
        "total-fat": 0
      },
      {
        "name": "کاهو ۱۰۰ g",
        "calories": 17,
        "unit": "۱۰۰ گرم",
        "protein": 1.1,
        "carbs": 3.3,
        "total-fat": 0.2
      },
      {
        "name": "کاهو (یک برگ ~10 g)",
        "calories": 4,
        "unit": "یک برگ",
        "protein": 0.4,
        "carbs": 0.7,
        "total-fat": 0.03
      },
      {
        "name": "کلم خام (یک لیوان ~70 g)",
        "calories": 25,
        "unit": "یک لیوان",
        "protein": 1.1,
        "carbs": 5,
        "total-fat": 0.1
      },
      {
        "name": "کلم فندقی ۱۰۰ g",
        "calories": 24,
        "unit": "۱۰۰ گرم",
        "protein": 0.8,
        "carbs": 5,
        "total-fat": 0.1
      },
      {
        "name": "کلم قرمز ۱۰۰ g",
        "calories": 28,
        "unit": "۱۰۰ گرم",
        "protein": 1.3,
        "carbs": 7,
        "total-fat": 0.1
      },
      {
        "name": "گوجه‌درختی رسیده ۱۰۰ g",
        "calories": 50,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 10,
        "total-fat": 0.4
      },
      {
        "name": "گوجه سبز ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 0.7,
        "carbs": 7,
        "total-fat": 0.2
      },
      {
        "name": "گوجه‌فرنگی ۱۰۰ g",
        "calories": 15,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 3,
        "total-fat": 0.2
      },
      {
        "name": "گوجه‌فرنگی (رب) ۱۰۰ g",
        "calories": 80,
        "unit": "۱۰۰ گرم",
        "protein": 3,
        "carbs": 18,
        "total-fat": 0.4
      },
      {
        "name": "گوجه‌فرنگی (رب) یک لیوان",
        "calories": 150,
        "unit": "یک لیوان (~240 g)",
        "protein": 4,
        "carbs": 36,
        "total-fat": 0.8
      },
      {
        "name": "گوجه‌فرنگی (سس) ۱۰۰ g",
        "calories": 100,
        "unit": "۱۰۰ گرم",
        "protein": 1.5,
        "carbs": 20,
        "total-fat": 1.5
      },
      {
        "name": "هویج ایرانی ۱۰۰ g",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 10,
        "total-fat": 0.2
      },
      {
        "name": "هویج فرنگی ۱۰۰ g",
        "calories": 35,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 8,
        "total-fat": 0.1
      }
    ]
  },
  "چربی‌ها": {
    "description": "منبع چربی‌های سالم و پروتئین",
    "recommended": "1-2 واحد در روز",
    "foods": [
      {
        "name": "بادام",
        "calories": 612,
        "unit": "100 گرم",
        "protein": 21,
        "carbs": 22,
        "total-fat": 53
      },
      {
        "name": "پسته",
        "calories": 340,
        "unit": "100 گرم",
        "protein": 20,
        "carbs": 28,
        "total-fat": 27
      },
      {
        "name": "گردو",
        "calories": 625,
        "unit": "100 گرم",
        "protein": 15,
        "carbs": 14,
        "total-fat": 65
      },
      {
        "name": "آجیل (مخلوط)",
        "calories": 750,
        "unit": "یک لیوان (~100 g)",
        "protein": 20,
        "carbs": 20,
        "total-fat": 60
      },
      {
        "name": "آجیل درهم",
        "calories": 650,
        "unit": "۱۰۰ گرم",
        "protein": 18,
        "carbs": 22,
        "total-fat": 55
      },
      {
        "name": "بادام بوداده",
        "calories": 666,
        "unit": "۱۰۰ گرم",
        "protein": 21,
        "carbs": 22,
        "total-fat": 60
      },
      {
        "name": "بادام بو‌نده (خام)",
        "calories": 612,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 23,
        "total-fat": 58
      },
      {
        "name": "بادام درشت",
        "calories": 10,
        "unit": "یک عدد (~1 g)",
        "protein": 0.2,
        "carbs": 0.2,
        "total-fat": 0.6
      },
      {
        "name": "بادام زمینی (بی‌پوست)",
        "calories": 560,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 16,
        "total-fat": 50
      },
      {
        "name": "پسته (یک عدد)",
        "calories": 8,
        "unit": "یک عدد (~1 g)",
        "protein": 0.06,
        "carbs": 0.3,
        "total-fat": 0.6
      },
      {
        "name": "پسته با پوست",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 28,
        "total-fat": 45
      },
      {
        "name": "تخم کدو",
        "calories": 600,
        "unit": "۱۰۰ گرم",
        "protein": 30,
        "carbs": 10,
        "total-fat": 49
      },
      {
        "name": "تخم هندوانه",
        "calories": 590,
        "unit": "۱۰۰ گرم",
        "protein": 28,
        "carbs": 8,
        "total-fat": 47
      },
      {
        "name": "تخمه آفتابگردان",
        "calories": 580,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 20,
        "total-fat": 56
      },
      {
        "name": "روغن مایع (زیتون)",
        "calories": 120,
        "unit": "یک قاشق (~14 g)",
        "protein": 0,
        "carbs": 0,
        "total-fat": 14
      },
      {
        "name": "روغن نباتی (مایع)",
        "calories": 900,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 0,
        "total-fat": 100
      },
      {
        "name": "زیتون خام سبز (یک عدد)",
        "calories": 5,
        "unit": "یک عدد (~4 g)",
        "protein": 0.03,
        "carbs": 0.3,
        "total-fat": 0.5
      },
      {
        "name": "شکوفه ذرت (بدون روغن) یک لیوان",
        "calories": 95,
        "unit": "۱۰۰ گرم",
        "protein": 3.5,
        "carbs": 18,
        "total-fat": 1.2
      },
      {
        "name": "فندق (یک عدد ~1 g)",
        "calories": 10,
        "unit": "یک عدد (~1 g)",
        "protein": 0.13,
        "carbs": 0.8,
        "total-fat": 0.7
      },
      {
        "name": "فندق با پوست ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 42,
        "total-fat": 30
      },
      {
        "name": "گردو (یک عدد ~5 g)",
        "calories": 25,
        "unit": "یک عدد",
        "protein": 0.6,
        "carbs": 0.5,
        "total-fat": 2
      },
      {
        "name": "گردو با پوست ۱۰۰ g",
        "calories": 240,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 14,
        "total-fat": 20
      },
      {
        "name": "مغز گردو ۱۰۰ g",
        "calories": 625,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 13,
        "total-fat": 65
      },
      {
        "name": "باقلوا با پسته ۱۰۰ g",
        "calories": 540,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 50,
        "total-fat": 35
      },
      {
        "name": "تخم آفتابگردان ۱۰۰ g",
        "calories": 580,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 20,
        "total-fat": 56
      },
      {
        "name": "حلیم بدون روغن (یک لیوان)",
        "calories": 180,
        "unit": "یک لیوان (~240 g)",
        "protein": 12,
        "carbs": 28,
        "total-fat": 2
      },
      {
        "name": "ذرت بو‌داده (روغن‌دار) ۱۰۰ g",
        "calories": 470,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 42,
        "total-fat": 30
      },
      {
        "name": "روغن حیوانی ۱۰۰ g",
        "calories": 890,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 0,
        "total-fat": 100
      },
      {
        "name": "زیتون خام سیاه ۱۰۰ g",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 6,
        "total-fat": 20
      },
      {
        "name": "زیتون خام سیاه (یک عدد)",
        "calories": 7,
        "unit": "یک عدد (~4 g)",
        "protein": 0.05,
        "carbs": 0.3,
        "total-fat": 0.5
      },
      {
        "name": "مغز پسته ۱۰۰ g",
        "calories": 680,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 24,
        "total-fat": 63
      },
      {
        "name": "مغز فندق ۱۰۰ g",
        "calories": 630,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 16,
        "total-fat": 63
      }
    ]
  },
  "نوشیدنی‌ها": {
    "description": "منبع آب و مواد معدنی",
    "recommended": "6-8 لیوان در روز",
    "foods": [
      {
        "name": "آب",
        "calories": 0,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 0,
        "total-fat": 0
      },
      {
        "name": "چای",
        "calories": 2,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 0,
        "total-fat": 0
      },
      {
        "name": "قهوه",
        "calories": 2,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 0,
        "total-fat": 0
      },
      {
        "name": "چای تلخ (بدون شکر)",
        "calories": 0,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 0,
        "total-fat": 0
      },
      {
        "name": "چغندر آب‌پز",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 1.6,
        "carbs": 10,
        "total-fat": 0.1
      },
      {
        "name": "گریپ‌فروت (آب) یک لیوان",
        "calories": 80,
        "unit": "یک لیوان (~240 g)",
        "protein": 1.7,
        "carbs": 20,
        "total-fat": 0.2
      },
      {
        "name": "لیمو (آب) یک قاشق (~15 g)",
        "calories": 4,
        "unit": "یک قاشق",
        "protein": 0.1,
        "carbs": 1.4,
        "total-fat": 0
      },
      {
        "name": "نوشابه (یک لیوان ~240 ml)",
        "calories": 100,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 26,
        "total-fat": 0
      },
      {
        "name": "نوشابه طعم میوه ۱۰۰ g",
        "calories": 115,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 29,
        "total-fat": 0
      },
      {
        "name": "شربت (یک لیوان ~240 g)",
        "calories": 55,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 14,
        "total-fat": 0
      },
      {
        "name": "شربت یخ (یک لیوان)",
        "calories": 140,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 35,
        "total-fat": 0
      },
      {
        "name": "آب طالبی (بدون شکر) یک لیوان",
        "calories": 45,
        "unit": "یک لیوان (~240 ml)",
        "protein": 0.6,
        "carbs": 11,
        "total-fat": 0.1
      },
      {
        "name": "قهوه تلخ (یک فنجان)",
        "calories": 2,
        "unit": "یک فنجان (~240 ml)",
        "protein": 0.3,
        "carbs": 0.2,
        "total-fat": 0
      },
      {
        "name": "کاکائو (یک قاشق چای‌خوری)",
        "calories": 10,
        "unit": "یک قاشق (~5 g)",
        "protein": 0.7,
        "carbs": 0.8,
        "total-fat": 0.8
      },
      {
        "name": "لیمو ترش (آب) ۱۰۰ g",
        "calories": 26,
        "unit": "۱۰۰ گرم",
        "protein": 0.4,
        "carbs": 9,
        "total-fat": 0.2
      },
      {
        "name": "مخمر آبجو/فرنگی خشک ۱۰۰ g",
        "calories": 285,
        "unit": "۱۰۰ گرم",
        "protein": 45,
        "carbs": 28,
        "total-fat": 9
      }
    ]
  },
  "متفرقه": {
    "description": "سایر مواد غذایی",
    "recommended": "با توجه به نیاز",
    "foods": [
      {
        "name": "آش جو",
        "calories": 250,
        "unit": "یک لیوان (~250 g)",
        "protein": 10,
        "carbs": 40,
        "total-fat": 6
      },
      {
        "name": "آش رشته",
        "calories": 250,
        "unit": "یک لیوان (~250 g)",
        "protein": 12,
        "carbs": 45,
        "total-fat": 5
      },
      {
        "name": "بادنجان",
        "calories": 17,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 6,
        "total-fat": 0.2
      },
      {
        "name": "به",
        "calories": 57,
        "unit": "۱۰۰ گرم",
        "protein": 0.4,
        "carbs": 15,
        "total-fat": 0.1
      },
      {
        "name": "بیسکویت (بدون کرم)",
        "calories": 370,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 70,
        "total-fat": 15
      },
      {
        "name": "پاچه (بدون چربی)",
        "calories": 130,
        "unit": "۱۰۰ گرم",
        "protein": 17,
        "carbs": 0,
        "total-fat": 7
      },
      {
        "name": "ترب",
        "calories": 25,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 3,
        "total-fat": 0.1
      },
      {
        "name": "تربچه (یک عدد)",
        "calories": 2,
        "unit": "یک عدد (~5 g)",
        "protein": 0.1,
        "carbs": 0.8,
        "total-fat": 0
      },
      {
        "name": "ترخون",
        "calories": 45,
        "unit": "۱۰۰ گرم",
        "protein": 2.1,
        "carbs": 7.3,
        "total-fat": 0.7
      },
      {
        "name": "جگر سفید (کال جی)",
        "calories": 160,
        "unit": "۱۰۰ گرم",
        "protein": 10,
        "carbs": 0,
        "total-fat": 11
      },
      {
        "name": "جگر یک سیخ (۵۰ g)",
        "calories": 70,
        "unit": "۵۰ گرم",
        "protein": 8.5,
        "carbs": 0.5,
        "total-fat": 2
      },
      {
        "name": "جو (گندم چاودار) خشک",
        "calories": 349,
        "unit": "۱۰۰ گرم",
        "protein": 12,
        "carbs": 73,
        "total-fat": 2.3
      },
      {
        "name": "چاشنی مایونز",
        "calories": 720,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 1,
        "total-fat": 75
      },
      {
        "name": "چغندر خام",
        "calories": 45,
        "unit": "۱۰۰ گرم",
        "protein": 1.6,
        "carbs": 10,
        "total-fat": 0.1
      },
      {
        "name": "دسر (ژلاتین)",
        "calories": 180,
        "unit": "یک لیوان (~200 g)",
        "protein": 7,
        "carbs": 35,
        "total-fat": 2
      },
      {
        "name": "ریحان",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 3,
        "carbs": 7,
        "total-fat": 0.6
      },
      {
        "name": "ریواس",
        "calories": 15,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 3,
        "total-fat": 0.1
      },
      {
        "name": "زبان گوساله",
        "calories": 130,
        "unit": "۱۰۰ گرم",
        "protein": 15,
        "carbs": 0,
        "total-fat": 7
      },
      {
        "name": "زبان گوسفند",
        "calories": 260,
        "unit": "۱۰۰ گرم",
        "protein": 18,
        "carbs": 0,
        "total-fat": 20
      },
      {
        "name": "زردآلو تازه ۱۰۰ g",
        "calories": 50,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 11,
        "total-fat": 0.3
      },
      {
        "name": "زردآلو (برگه خشک) ۱۰۰ g",
        "calories": 290,
        "unit": "۱۰۰ گرم",
        "protein": 3.4,
        "carbs": 75,
        "total-fat": 1
      },
      {
        "name": "زردآلو (کمپوت) یک لیوان",
        "calories": 250,
        "unit": "~۱۵۰ گرم",
        "protein": 1.5,
        "carbs": 60,
        "total-fat": 0.5
      },
      {
        "name": "سوپ سبزیجات",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 1.5,
        "carbs": 5,
        "total-fat": 0.5
      },
      {
        "name": "شکر ۱۰۰ g",
        "calories": 400,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 100,
        "total-fat": 0
      },
      {
        "name": "شکر (یک پیمانه ~10 g)",
        "calories": 40,
        "unit": "۱۰ گرم",
        "protein": 0,
        "carbs": 10,
        "total-fat": 0
      },
      {
        "name": "شکلات ۱۰۰ g",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 60,
        "total-fat": 30
      },
      {
        "name": "شکلات قلمی (یک عدد ~4 g)",
        "calories": 20,
        "unit": "یک عدد",
        "protein": 0.3,
        "carbs": 2.4,
        "total-fat": 1.2
      },
      {
        "name": "شلغم ۱۰۰ g",
        "calories": 25,
        "unit": "۱۰۰ گرم",
        "protein": 1.2,
        "carbs": 5.8,
        "total-fat": 0.1
      },
      {
        "name": "شلیل ۱۰۰ g",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 15,
        "total-fat": 0.3
      },
      {
        "name": "شنبلیله ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 4,
        "carbs": 5,
        "total-fat": 0.5
      },
      {
        "name": "شوید (شبد) ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 3.3,
        "carbs": 7.1,
        "total-fat": 0.5
      },
      {
        "name": "عسل ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 0.3,
        "carbs": 82,
        "total-fat": 0
      },
      {
        "name": "عسل (غذاخوری ~21 g)",
        "calories": 63,
        "unit": "یک قاشق (~21 g)",
        "protein": 0.1,
        "carbs": 17,
        "total-fat": 0
      },
      {
        "name": "عسل (مرباخوری ~7 g)",
        "calories": 20,
        "unit": "یک قاشق (~7 g)",
        "protein": 0.02,
        "carbs": 5,
        "total-fat": 0
      },
      {
        "name": "فرنی (یک لیوان ~240 g)",
        "calories": 200,
        "unit": "یک لیوان",
        "protein": 7,
        "carbs": 38,
        "total-fat": 2.5
      },
      {
        "name": "قارچ ۱۰۰ g",
        "calories": 27,
        "unit": "۱۰۰ گرم",
        "protein": 3.1,
        "carbs": 4.3,
        "total-fat": 0.3
      },
      {
        "name": "قره‌قوروت ۱۰۰ g",
        "calories": 340,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 12,
        "total-fat": 20
      },
      {
        "name": "کدو حلوایی ۱۰۰ g",
        "calories": 35,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 9,
        "total-fat": 0.1
      },
      {
        "name": "کدو خورشتی ۱۰۰ g",
        "calories": 28,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 6.5,
        "total-fat": 0.1
      },
      {
        "name": "کرفس ۱۰۰ g",
        "calories": 13,
        "unit": "۱۰۰ گرم",
        "protein": 1.2,
        "carbs": 3,
        "total-fat": 0.2
      },
      {
        "name": "کشک خشک ۱۰۰ g",
        "calories": 380,
        "unit": "۱۰۰ گرم",
        "protein": 40,
        "carbs": 20,
        "total-fat": 16
      },
      {
        "name": "کشک غلیظ (یک قاشق ~15 g)",
        "calories": 60,
        "unit": "یک قاشق",
        "protein": 6,
        "carbs": 3,
        "total-fat": 3.5
      },
      {
        "name": "کشمش ۱۰۰ g",
        "calories": 290,
        "unit": "۱۰۰ گرم",
        "protein": 3.1,
        "carbs": 79,
        "total-fat": 0.5
      },
      {
        "name": "کیک شکلاتی ۱۰۰ g",
        "calories": 400,
        "unit": "۱۰۰ گرم",
        "protein": 5,
        "carbs": 55,
        "total-fat": 18
      },
      {
        "name": "کیک یزدی (متوسط ~45 g)",
        "calories": 160,
        "unit": "یک عدد",
        "protein": 2,
        "carbs": 24,
        "total-fat": 7
      },
      {
        "name": "گریپ‌فروت ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 0.8,
        "carbs": 8,
        "total-fat": 0.1
      },
      {
        "name": "گز ۱۰۰ g",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 10,
        "carbs": 55,
        "total-fat": 28
      },
      {
        "name": "گلابی ۱۰۰ g",
        "calories": 55,
        "unit": "۱۰۰ گرم",
        "protein": 0.4,
        "carbs": 15,
        "total-fat": 0.1
      },
      {
        "name": "گندم خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 12,
        "carbs": 77,
        "total-fat": 2
      },
      {
        "name": "لپه (خشک) ۱۰۰ g",
        "calories": 348,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 60,
        "total-fat": 2.7
      },
      {
        "name": "لپه پخته ۱۰۰ g",
        "calories": 115,
        "unit": "۱۰۰ گرم",
        "protein": 9,
        "carbs": 20,
        "total-fat": 0.5
      },
      {
        "name": "مارتادلا ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 14,
        "carbs": 2,
        "total-fat": 28
      },
      {
        "name": "مارچوبه ۱۰۰ g",
        "calories": 20,
        "unit": "۱۰۰ گرم",
        "protein": 2.2,
        "carbs": 3.9,
        "total-fat": 0.2
      },
      {
        "name": "مارگارین (یک قاشق ~14 g)",
        "calories": 110,
        "unit": "یک قاشق",
        "protein": 0,
        "carbs": 0,
        "total-fat": 12.6
      },
      {
        "name": "میگو ۱۰۰ g",
        "calories": 91,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 0,
        "total-fat": 1.2
      },
      {
        "name": "نارگیل (پودر) ۱۰۰ g",
        "calories": 550,
        "unit": "۱۰۰ گرم",
        "protein": 6.7,
        "carbs": 25,
        "total-fat": 30
      },
      {
        "name": "نارگیل (مغز) ۱۰۰ g",
        "calories": 345,
        "unit": "۱۰۰ گرم",
        "protein": 3.3,
        "carbs": 15,
        "total-fat": 33
      },
      {
        "name": "نارگیل تازه ۱۰۰ g",
        "calories": 156,
        "unit": "۱۰۰ گرم",
        "protein": 3.3,
        "carbs": 6,
        "total-fat": 15
      },
      {
        "name": "نارنج ۱۰۰ g",
        "calories": 20,
        "unit": "۱۰۰ گرم",
        "protein": 0.5,
        "carbs": 4,
        "total-fat": 0.1
      },
      {
        "name": "نارنگی ۱۰۰ g",
        "calories": 52,
        "unit": "۱۰۰ گرم",
        "protein": 0.8,
        "carbs": 13,
        "total-fat": 0.3
      },
      {
        "name": "آلوی زرد ۱۰۰ g",
        "calories": 75,
        "unit": "۱۰۰ گرم",
        "protein": 0.6,
        "carbs": 20,
        "total-fat": 0.3
      },
      {
        "name": "آلوی قرمز ۱۰۰ g",
        "calories": 45,
        "unit": "۱۰۰ گرم",
        "protein": 0.7,
        "carbs": 11,
        "total-fat": 0.3
      },
      {
        "name": "اسفناج خام ۱۰۰ g",
        "calories": 25,
        "unit": "۱۰۰ گرم",
        "protein": 2.9,
        "carbs": 3.6,
        "total-fat": 0.4
      },
      {
        "name": "آلو بخارا (یک عدد ~~6 g)",
        "calories": 15,
        "unit": "یک عدد",
        "protein": 0.2,
        "carbs": 4,
        "total-fat": 0.03
      },
      {
        "name": "انبه هندی ۱۰۰ g",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 0.8,
        "carbs": 15,
        "total-fat": 0.4
      },
      {
        "name": "باقلا (یک عدد)",
        "calories": 5,
        "unit": "یک عدد (~1 g)",
        "protein": 0.3,
        "carbs": 0.9,
        "total-fat": 0
      },
      {
        "name": "باقلای خشک ۱۰۰ g",
        "calories": 360,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 50,
        "total-fat": 2
      },
      {
        "name": "باقلای سبز ۱۰۰ g",
        "calories": 108,
        "unit": "۱۰۰ گرم",
        "protein": 7.6,
        "carbs": 20,
        "total-fat": 0.4
      },
      {
        "name": "بامیه (سبز) ۱۰۰ g",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 1.9,
        "carbs": 9,
        "total-fat": 0.2
      },
      {
        "name": "برگ چغندر ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 1.6,
        "carbs": 7,
        "total-fat": 0.1
      },
      {
        "name": "برگ مو ۱۰۰ g",
        "calories": 60,
        "unit": "۱۰۰ گرم",
        "protein": 3.1,
        "carbs": 10,
        "total-fat": 0.6
      },
      {
        "name": "پفک ۱۰۰ g",
        "calories": 520,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 59,
        "total-fat": 27
      },
      {
        "name": "پیتزا ۱۰۰ g",
        "calories": 250,
        "unit": "۱۰۰ گرم",
        "protein": 10,
        "carbs": 30,
        "total-fat": 10
      },
      {
        "name": "تره ۱۰۰ g",
        "calories": 25,
        "unit": "۱۰۰ گرم",
        "protein": 1.8,
        "carbs": 5,
        "total-fat": 0.2
      },
      {
        "name": "تمبر هندی با دانه ۱۰۰ g",
        "calories": 115,
        "unit": "۱۰۰ گرم",
        "protein": 2.8,
        "carbs": 29,
        "total-fat": 0.4
      },
      {
        "name": "تمبر هندی بدون دانه ۱۰۰ g",
        "calories": 240,
        "unit": "۱۰۰ گرم",
        "protein": 4,
        "carbs": 64,
        "total-fat": 1
      },
      {
        "name": "تمشک سیاه یا قرمز ۱۰۰ g",
        "calories": 73,
        "unit": "۱۰۰ گرم",
        "protein": 1.4,
        "carbs": 17,
        "total-fat": 0.3
      },
      {
        "name": "جعفری ۱۰۰ g",
        "calories": 25,
        "unit": "۱۰۰ گرم",
        "protein": 3,
        "carbs": 4,
        "total-fat": 0.4
      },
      {
        "name": "جگر سرخ‌کرده ۱۰۰ g",
        "calories": 330,
        "unit": "۱۰۰ گرم",
        "protein": 17,
        "carbs": 2,
        "total-fat": 27
      },
      {
        "name": "حلوا ۱۰۰ g",
        "calories": 400,
        "unit": "۱۰۰ گرم",
        "protein": 6,
        "carbs": 40,
        "total-fat": 25
      },
      {
        "name": "حلوا ارده ۱۰۰ g",
        "calories": 500,
        "unit": "۱۰۰ گرم",
        "protein": 16,
        "carbs": 12,
        "total-fat": 35
      },
      {
        "name": "خاویار ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 24,
        "carbs": 5,
        "total-fat": 20
      },
      {
        "name": "خربزه ۱۰۰ g",
        "calories": 46,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 11,
        "total-fat": 0.2
      },
      {
        "name": "خربزه بدون شکر (یک لیوان)",
        "calories": 90,
        "unit": "یک لیوان (~150 g)",
        "protein": 1.3,
        "carbs": 22,
        "total-fat": 0.3
      },
      {
        "name": "خردل ۱۰۰ g",
        "calories": 80,
        "unit": "۱۰۰ گرم",
        "protein": 4,
        "carbs": 9,
        "total-fat": 4
      },
      {
        "name": "دل گوسفند ۱۰۰ g",
        "calories": 239,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 15
      },
      {
        "name": "دلمه (متوسط یک عدد)",
        "calories": 150,
        "unit": "یک عدد (~200 g)",
        "protein": 6,
        "carbs": 20,
        "total-fat": 4
      },
      {
        "name": "ذرت خام ۱۰۰ g",
        "calories": 75,
        "unit": "۱۰۰ گرم",
        "protein": 3.4,
        "carbs": 16,
        "total-fat": 1.2
      },
      {
        "name": "ذرت شکوفه (پفیلای بدون نمک) ۱۰۰ g",
        "calories": 370,
        "unit": "۱۰۰ g",
        "protein": 13,
        "carbs": 78,
        "total-fat": 4
      },
      {
        "name": "ذرت دانه درشت ۱۰۰ g",
        "calories": 85,
        "unit": "۱۰۰ گرم",
        "protein": 3.2,
        "carbs": 19,
        "total-fat": 1.2
      },
      {
        "name": "رطب ۱۰۰ g",
        "calories": 150,
        "unit": "۱۰۰ گرم",
        "protein": 2.5,
        "carbs": 40,
        "total-fat": 0.15
      },
      {
        "name": "ژله (پودر) ۱۰۰ g",
        "calories": 370,
        "unit": "۱۰۰ گرم",
        "protein": 7,
        "carbs": 85,
        "total-fat": 0
      },
      {
        "name": "ژله (پودر) (یک قاشق ~10 g)",
        "calories": 55,
        "unit": "یک قاشق",
        "protein": 1.3,
        "carbs": 12,
        "total-fat": 0
      },
      {
        "name": "سالاد بدون سس (یک نفره)",
        "calories": 30,
        "unit": "یک نفره (~100 g)",
        "protein": 1.5,
        "carbs": 5,
        "total-fat": 0.2
      },
      {
        "name": "سرکه (یک لیوان ~240 ml)",
        "calories": 33,
        "unit": "یک لیوان",
        "protein": 0,
        "carbs": 1,
        "total-fat": 0
      },
      {
        "name": "سمنو (یک لیوان ~200 g)",
        "calories": 180,
        "unit": "یک لیوان",
        "protein": 6,
        "carbs": 40,
        "total-fat": 2
      },
      {
        "name": "سنجد ۱۰۰ g",
        "calories": 130,
        "unit": "۱۰۰ گرم",
        "protein": 1,
        "carbs": 30,
        "total-fat": 0.5
      },
      {
        "name": "سیر ۱۰۰ g",
        "calories": 120,
        "unit": "۱۰۰ گرم",
        "protein": 6.4,
        "carbs": 21,
        "total-fat": 0.5
      },
      {
        "name": "سیرابی ۱۰۰ g",
        "calories": 130,
        "unit": "۱۰۰ گرم",
        "protein": 18,
        "carbs": 0,
        "total-fat": 5
      },
      {
        "name": "شاهی ۱۰۰ g",
        "calories": 20,
        "unit": "۱۰۰ گرم",
        "protein": 2.1,
        "carbs": 3.6,
        "total-fat": 0.2
      },
      {
        "name": "صدف دریایی ۱۰۰ g",
        "calories": 65,
        "unit": "۱۰۰ گرم",
        "protein": 7.1,
        "carbs": 4,
        "total-fat": 1
      },
      {
        "name": "طالبی ۱۰۰ g",
        "calories": 30,
        "unit": "۱۰۰ گرم",
        "protein": 0.9,
        "carbs": 8,
        "total-fat": 0.1
      },
      {
        "name": "قلوه گوسفند ۱۰۰ g",
        "calories": 170,
        "unit": "۱۰۰ گرم",
        "protein": 25,
        "carbs": 0,
        "total-fat": 7
      },
      {
        "name": "قند ۱۰۰ g",
        "calories": 400,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 100,
        "total-fat": 0
      },
      {
        "name": "کباب برگ (یک سیخ ~100 g)",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 27,
        "carbs": 0,
        "total-fat": 10
      },
      {
        "name": "کباب کوبیده (یک سیخ ~100 g)",
        "calories": 270,
        "unit": "۱۰۰ گرم",
        "protein": 20,
        "carbs": 2,
        "total-fat": 20
      },
      {
        "name": "کتلت (~قطعه10×10×1cm)",
        "calories": 200,
        "unit": "یک قطعه (~100 g)",
        "protein": 10,
        "carbs": 20,
        "total-fat": 8
      },
      {
        "name": "کله‌پاچه ۱۰۰ g",
        "calories": 190,
        "unit": "۱۰۰ گرم",
        "protein": 12,
        "carbs": 0,
        "total-fat": 14
      },
      {
        "name": "کنجد ۱۰۰ g",
        "calories": 580,
        "unit": "۱۰۰ گرم",
        "protein": 18,
        "carbs": 23,
        "total-fat": 50
      },
      {
        "name": "کوفته (یک عدد ~~100 g)",
        "calories": 200,
        "unit": "یک عدد (~100 g)",
        "protein": 15,
        "carbs": 15,
        "total-fat": 10
      },
      {
        "name": "انواع کولا ۱۰۰ g",
        "calories": 40,
        "unit": "۱۰۰ گرم",
        "protein": 0,
        "carbs": 10,
        "total-fat": 0
      },
      {
        "name": "کیک (‌یک برش ~100 g)",
        "calories": 350,
        "unit": "۱۰۰ گرم",
        "protein": 4,
        "carbs": 50,
        "total-fat": 14
      },
      {
        "name": "لیمو تازه با پوست ۱۰۰ g",
        "calories": 23,
        "unit": "۱۰۰ گرم",
        "protein": 0.6,
        "carbs": 6,
        "total-fat": 0.2
      },
      {
        "name": "لیمو ترش ۱۰۰ g",
        "calories": 42,
        "unit": "۱۰۰ گرم",
        "protein": 1.1,
        "carbs": 13,
        "total-fat": 0.2
      },
      {
        "name": "مربا ۱۰۰ g",
        "calories": 300,
        "unit": "۱۰۰ گرم",
        "protein": 0.3,
        "carbs": 75,
        "total-fat": 0.1
      },
      {
        "name": "مربا (یک قاشق ~15 g)",
        "calories": 55,
        "unit": "یک قاشق",
        "protein": 0.15,
        "carbs": 13,
        "total-fat": 0.05
      },
      {
        "name": "مغز حیوان ۱۰۰ g",
        "calories": 130,
        "unit": "۱۰۰ گرم",
        "protein": 16,
        "carbs": 0,
        "total-fat": 7.5
      },
      {
        "name": "مغز دانه آفتابگردان ۱۰۰ g",
        "calories": 560,
        "unit": "۱۰۰ گرم",
        "protein": 26,
        "carbs": 20,
        "total-fat": 50
      },
      {
        "name": "هندوانه ۱۰۰ g",
        "calories": 23,
        "unit": "۱۰۰ گرم",
        "protein": 0.6,
        "carbs": 6,
        "total-fat": 0.2
      },
      {
        "name": "هندوانه با پوست ۱۰۰ g",
        "calories": 12,
        "unit": "۱۰۰ گرم",
        "protein": 0.3,
        "carbs": 3,
        "total-fat": 0.1
      },
      {
        "name": "یک سیخ برگ (~100 g)",
        "calories": 200,
        "unit": "۱۰۰ گرم",
        "protein": 27,
        "carbs": 0,
        "total-fat": 10
      }
    ]
  }
};

export default foodDatabase;