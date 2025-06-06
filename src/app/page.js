"use client";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-heartbeat me-2"></i>
            صدای بدنتو می‌شنوی؟
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-home me-1"></i> خانه</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="calorie-counter.html"><i className="fas fa-calculator me-1"></i> کالری شمار</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="floating-elements">
        <div className="floating-heart">💚</div>
        <div className="floating-heart">🌿</div>
        <div className="floating-heart">✨</div>
        <div className="floating-heart">🎯</div>
        <div className="floating-heart">🌈</div>
      </div>

      <div className="container">
        <div className="header">
          <h1 className="main-title">🌿 تو صدای بدنتو می‌شنوی؟</h1>
          <p className="subtitle">
            بعضی وقتا یه چیزی توی بدنمون زمزمه می‌کنه... یه خستگی بی‌دلیل، یه بی‌حوصلگیِ مداوم، یه دل‌شوره‌ی مبهم... ولی چون زندگی پر سر و صداست، صداشو نمی‌شنویم.
          </p>
        </div>

        <div className="card">
          <p className="text-content">
            تا یه روزی بدنمون <span className="highlight">بلند داد می‌زنه...</span><br />
            ولی اگر قبلش یاد می‌گرفتیم گوش بدیم، شاید هیچ‌وقت کار به اونجا نمی‌کشید...
          </p>
          <div className="section-title">
            <span className="emoji">🎯</span>
            ما اینجاییم برای همون لحظه‌ی قبل از "دیر شدن"
          </div>
          <p className="text-content">
            ما یک برنامه ساختیم: یک <span className="highlight">برنامه پایش سلامت هوشمند و شخصی‌سازی‌شده</span> که کمک می‌کنه <span className="highlight">بدن و روانتو بهتر بشناسی،</span> نشونه‌ها رو <span className="highlight">زودتر بفهمی،</span> و <span className="highlight">سریع‌تر، آسون‌تر، و بدون ترس برای بهتر شدن</span> کاری کنی.
          </p>
        </div>

        <div className="card">
          <div className="section-title">
            <span className="emoji">💚</span>
            این برنامه برای تو طراحی شده اگر:
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <p>بارها علائمی مثل خستگی، بی‌خوابی، اضطراب، تپش قلب، دردهای پراکنده یا بی‌حوصلگی رو تجربه کردی ولی نمی‌دونستی جدی هستن یا نه</p>
            </div>
            <div className="benefit-item">
              <p>دلت می‌خواد یاد بگیری هر علامت چی می‌گه و چطور با یه تغییر کوچیک حالت بهتر بشه</p>
            </div>
            <div className="benefit-item">
              <p>دوست داری کسی هر روز یک نکته کوچیک و کاربردی مخصوص شرایط خودت برات بفرسته – نه یه نسخه‌ی عمومی برای همه</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <span className="emoji">📲</span>
            چطور کار می‌کنه؟
          </div>
          <div className="steps">
            <div className="step">
              <strong>یک فرم ساده و محرمانه</strong> پر می‌کنی (فقط چند دقیقه وقت می‌بره)
            </div>
            <div className="step">
              ما اطلاعاتتو تحلیل می‌کنیم: <strong>دقیق، علمی، ولی با زبانی ساده و صمیمی</strong>
            </div>
            <div className="step">
              از فردای اون روز، <strong>هر صبح یا شب توی واتساپ</strong>:
              <ul style={{ marginTop: '15px', paddingRight: '20px' }}>
                <li>یه پیام از طرف کسی که واقعا حواسش به تو هست</li>
                <li>یه نکته درباره‌ی خودت، بدنت، حال دلت</li>
                <li>یه پیشنهاد ساده و کاربردی برای بهتر شدن (مخصوص خودت – نه کلیشه‌ای و ترسناک)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <span className="emoji">🌈</span>
            این فقط یه برنامه نیست، یک همراه سلامتیه که:
          </div>
          <div className="features-list">
            <div className="feature">
              <span className="check-icon">✅</span>
              <span>کمک می‌کنه بفهمی چرا این‌طور حس می‌کنی</span>
            </div>
            <div className="feature">
              <span className="check-icon">✅</span>
              <span>توضیح می‌ده چی پشت اون نشونه‌ها پنهانه</span>
            </div>
            <div className="feature">
              <span className="check-icon">✅</span>
              <span>راه‌هایی پیشنهاد می‌ده که هم علمی‌ان، هم قابل اجرا با زندگی واقعی تو</span>
            </div>
            <div className="feature">
              <span className="check-icon">✅</span>
              <span>مخصوص خودته – بر اساس سن، جنسیت، شرایط روحی، جسمی و خانوادگی‌ات</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="section-title">
            <span className="emoji">🧠</span>
            مناسب برای کسانی که:
          </div>
          <div className="text-content">
            <ul style={{ paddingRight: '20px', lineHeight: '2' }}>
              <li>دلشون می‌خواد بدونن <strong>علائم بدن و ذهنشون از چی خبر می‌ده</strong></li>
              <li>باور دارن آگاهی از بدن و روان یعنی قدرت انتخاب بهتر</li>
              <li>حاضرن فقط چند دقیقه در روز برای خودِ خودشون وقت بذارن</li>
              <li>دنبال راه‌حل‌های واقعی، کاربردی و <strong>شخصی‌سازی‌شده</strong> برای بهبود سلامتشون هستن – بدون ترس، بدون تبلیغات دارویی، و بدون شعارهای خالی</li>
            </ul>
          </div>
        </div>

        <div className="gift-banner">
          <div className="gift-text">
            <span className="emoji">🎁</span>
            هدیه‌ی شروع: تحلیل اولیه سلامت + پیام‌های روزانه مخصوص خودت، کاملاً رایگان برای صد نفر اول
          </div>
        </div>

        <div className="cta-section">
          <div className="section-title" style={{ color: 'white', justifyContent: 'center' }}>
            <span className="emoji">🎁</span>
            شروعش آسونه:
          </div>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            👣 فقط یک قدم، فقط یک پیام… بنویس:
          </p>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '15px', margin: '20px 0' }}>
            <strong style={{ fontSize: '1.3rem' }}>"می‌خوام صدای بدنم رو بشنوم"</strong>
          </div>
          <p style={{ marginBottom: '30px' }}>به این شماره واتساپ: <strong>09307840833</strong></p>
          <button className="cta-button" onClick={() => {
            const button = event.target;
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
              button.style.transform = 'scale(1)';
            }, 150);
            window.location.href = 'https://wa.me/989307840833?text=%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%85%20%D8%B5%D8%AF%D8%A7%DB%8C%20%D8%A8%D8%AF%D9%86%D9%85%20%D8%B1%D9%88%20%D8%A8%D8%B4%D9%86%D9%88%D9%85';
          }}>
            همین الان شروع کن! 🚀
          </button>
        </div>

        <div className="hashtags">
          <span className="hashtag">#صدای_بدن_تو</span>
          <span className="hashtag">#پایش_هوشمند</span>
          <span className="hashtag">#زندگی_آگاهانه</span>
          <span className="hashtag">#حال_خوب_ممکنه</span>
        </div>
      </div>
    </>
  );
} 