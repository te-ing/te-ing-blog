import { getYearMonthDifference } from '@site/src/util/dateUtil';
import styles from './work.module.css';
import React from 'react';
import WorkCareers from './WorkCareers';

const Work = () => {
  return (
    <section className={styles.wrapper}>
      <Company />
    </section>
  );
};

export default Work;

const Company = () => {
  return (
    <div className={styles.companyContainer}>
      <h2>Work Experience</h2>
      <div className={styles.company}>
        <div className={styles.companyHeader}>
          <h3>SNPLAB</h3>
          {`2022.08 ~ 재직중 (약 ${getYearMonthDifference(new Date('2022-08-01'))})`}
        </div>
        <span className={styles.subTitle}>
          개인정보 마이데이터 서비스 스타트업
        </span>
        <WorkCareers />
      </div>
    </div>
  );
};
