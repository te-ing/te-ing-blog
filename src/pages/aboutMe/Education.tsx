import { EDUCATION_DATA } from './_resumeConstants';
import styles from './_style/education.module.scss';
import React from 'react';

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {EDUCATION_DATA.map(({ title, period, body }) => {
        return (
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <span>{period}</span>
            </div>
            <div className={styles.rightContainer}>
              <h3>{title}</h3>
              {body.map(content => {
                return (
                  <ul>
                    <li>{content}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
