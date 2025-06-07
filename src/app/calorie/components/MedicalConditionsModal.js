'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from '../calorie.module.css';

export default function MedicalConditionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const medicalConditions = [
    {
      category: 'نورولوژیک - سردرد',
      conditions: 'میگرن، تنشن هدک',
      allowed: '🚫 غیرمجاز یا با احتیاط بالا',
      notes: 'افت قند، کم‌آبی و حذف کافئین از عوامل تحریک حمله‌اند'
    },
    {
      category: 'نورولوژیک - سرگیجه',
      conditions: 'سرگیجه وضعیتی، اضطرابی',
      allowed: '⚠️ با نظارت پزشک',
      notes: 'خطر تشدید علائم به‌ویژه در افت فشار یا گرسنگی'
    },
    // Add more conditions as needed
  ];

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h5>شرایط پزشکی و فستینگ</h5>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.alert}>
            <FontAwesomeIcon icon={faExclamationTriangle} className={styles.me2} />
            قبل از شروع فستینگ، لطفاً شرایط پزشکی خود را بررسی کنید.
          </div>
          <div className={styles.tableResponsive}>
            <table className={styles.medicalConditionsTable}>
              <thead>
                <tr>
                  <th>گروه بیماری/شرایط</th>
                  <th>نمونه بیماری/وضعیت</th>
                  <th>آیا فستینگ مجاز است؟</th>
                  <th>توضیحات و ملاحظات پزشکی</th>
                </tr>
              </thead>
              <tbody>
                {medicalConditions.map((condition, index) => (
                  <tr key={index}>
                    <td><strong>{condition.category}</strong></td>
                    <td>{condition.conditions}</td>
                    <td>
                      <span className={
                        condition.allowed.includes('🚫') ? styles.allowedBadge + ' ' + styles.danger :
                        condition.allowed.includes('⚠️') ? styles.allowedBadge + ' ' + styles.warning :
                        styles.allowedBadge + ' ' + styles.success
                      }>
                        {condition.allowed}
                      </span>
                    </td>
                    <td>{condition.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.btnSecondary}>بستن</button>
        </div>
      </div>
    </div>
  );
} 