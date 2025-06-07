'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHome, faChartLine, faUtensils, faRunning } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.navbarBrand}>
          <FontAwesomeIcon icon={faHeartbeat} className={styles.me2} />
          مراقب سلامت هوشمند
        </Link>
        <button className={styles.navbarToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className={styles.navbarTogglerIcon}></span>
        </button>
        <div className={styles.collapse} id="navbarNav">
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                <FontAwesomeIcon icon={faHome} className={styles.me1} /> خانه
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                <FontAwesomeIcon icon={faChartLine} className={styles.me1} /> گزارش‌ها
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                <FontAwesomeIcon icon={faUtensils} className={styles.me1} /> تغذیه
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                <FontAwesomeIcon icon={faRunning} className={styles.me1} /> ورزش
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 