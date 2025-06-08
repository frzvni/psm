'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from '../calorie.module.css';
import { formatTime, updateFastingTime, calculateRemainingTime } from '../services/fastingService';

const FastingTimer = ({ 
  isFasting, 
  setIsFasting, 
  fastingTime, 
  setFastingTime, 
  fastingHours, 
  setFastingHours,
  remainingTime,
  setRemainingTime,
  setShowMedicalModal
}) => {
  const [showFastingModal, setShowFastingModal] = useState(false);
  const [tempFastingHours, setTempFastingHours] = useState(fastingHours);

  // Update fasting time
  useEffect(() => {
    const timer = setInterval(() => {
      if (isFasting) {
        setFastingTime(updateFastingTime(fastingTime));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isFasting, fastingTime, setFastingTime]);

  // Calculate remaining time
  useEffect(() => {
    if (fastingHours > 0) {
      const calculateTime = () => {
        setRemainingTime(calculateRemainingTime(fastingHours));
      };

      calculateTime();
      const timer = setInterval(calculateTime, 1000);

      return () => clearInterval(timer);
    }
  }, [fastingHours, setRemainingTime]);

  const toggleFasting = () => {
    if (!isFasting) {
      setFastingTime('00:00:00');
    }
    setIsFasting(!isFasting);
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

  return (
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

      {/* Fasting Hours Modal */}
      {showFastingModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h5>تنظیم ساعات فستینگ</h5>
              <button onClick={handleModalClose}>×</button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={handleFastingHoursSubmit}>
                <div className={styles.formGroup}>
                  <label>ساعات فستینگ:</label>
                  <input
                    type="number"
                    value={tempFastingHours}
                    onChange={(e) => setTempFastingHours(parseInt(e.target.value) || 0)}
                    min="1"
                    max="24"
                  />
                </div>
                <div className={styles.modalFooter}>
                  <button type="submit" className={styles.btnPrimary}>ثبت</button>
                  <button type="button" onClick={handleModalClose} className={styles.btnSecondary}>انصراف</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastingTimer;