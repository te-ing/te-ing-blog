import styles from './education.module.css';
import React from 'react';

const Education = () => {
  const EDUCATION_DATA = [
    {
      title: '프로그래머스 웹 데브코스',
      period: '2021.07 ~ 2021.12',
      body: ['부트캠프 프론트엔드 과정'],
    },
    {
      title: '홍익대학교',
      period: '2015.03 ~ 2021.08',
      body: ['광고홍보학부 전공'],
    },
  ];
  return (
    <section className={styles.wrapper}>
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
                  <ul className={styles.title}>
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
