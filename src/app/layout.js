import './globals.css';
import Script from 'next/script';
import './fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export const metadata = {
  title: 'صدای بدنتو می‌شنوی؟',
  description: 'با ما همراه شو تا به صدای بدنت گوش بدی و زندگی سالم‌تری داشته باشی',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>صدای بدنتو می‌شنوی؟</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script id="animations" strategy="afterInteractive">
          {`
            function startNow() {
              const button = event.target;
              button.style.transform = 'scale(0.95)';
              setTimeout(() => {
                button.style.transform = 'scale(1)';
              }, 150);
              
              window.location.href = 'https://wa.me/989307840833?text=%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%85%20%D8%B5%D8%AF%D8%A7%DB%8C%20%D8%A8%D8%AF%D9%86%D9%85%20%D8%B1%D9%88%20%D8%A8%D8%B4%D9%86%D9%88%D9%85';
            }

            document.addEventListener('DOMContentLoaded', function() {
              const cards = document.querySelectorAll('.card');
              cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                  this.style.transform = 'translateY(-10px)';
                });
                card.addEventListener('mouseleave', function() {
                  this.style.transform = 'translateY(0)';
                });
              });

              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                  }
                });
              }, observerOptions);

              cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'all 0.8s ease-out';
                observer.observe(card);
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
