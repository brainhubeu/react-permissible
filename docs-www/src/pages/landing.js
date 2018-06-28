import React from 'react';
import Link from 'gatsby-link';

import styles from './landing.module.scss';

const LandingPage = () => (
  <div className={styles.landing}>
    <div>
      <h1 className={styles.landing__header}>react-permissible</h1>
      <p className={styles.landing__subheader}>Making the permission management for components easier.</p>
      <div className={styles.btn__wrapper}>
        <Link to="/docs/getting-started/overview" className={styles.landing__btn}>
          <span>Get started!</span>
        </Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
