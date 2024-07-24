import { CAREER_DATA } from './_resumeConstants';
import styles from './_style/workCareers.module.css';
import React from 'react';

export default function WorkCareers() {
  const careers = CAREER_DATA;
  return (
    <div className={styles.wrapper}>
      {careers.map(career => {
        return (
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <span>{career.period}</span>
              <hr />
              <span className={styles.skillName}>사용기술</span>
              <div className={styles.skill}>
                {career.skill.map(v => (
                  <span id={v}>‣ {v}</span>
                ))}
              </div>
            </div>

            <div className={styles.rightContainer}>
              <h3>{career.title}</h3>
              {career.content.map(({ title, body }) => {
                return (
                  <ul className={styles.careerTitle}>
                    <li>{title}</li>
                    {body?.map(item => {
                      return (
                        <ul className={styles.careerItem}>
                          <li>{item}</li>
                        </ul>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
