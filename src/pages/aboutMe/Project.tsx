import { PROJECT_DATA } from './_resumeConstants';
import styles from './_style/project.module.scss';
import React from 'react';
import { GithubIcon, ClipIcon } from '@site/static/svg';

export default function Project() {
  return (
    <div className={styles.wrapper}>
      <h2>Side Project</h2>
      {PROJECT_DATA.map(project => {
        return (
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <span>{project.period}</span>
              <hr />
              {project.github && (
                <div className={styles.link}>
                  <GithubIcon />
                  <a href={project.github} target="_blank">
                    {project.github}
                  </a>
                </div>
              )}
              {project.deploy && (
                <div className={styles.link}>
                  <ClipIcon />
                  <a href={project.deploy} target="_blank">
                    {project.deploy}
                  </a>
                </div>
              )}
              <span className={styles.skillName}>사용기술</span>
              <div className={styles.skill}>
                {project.skill.map(v => (
                  <span id={v}>‣ {v}</span>
                ))}
              </div>
            </div>

            <div className={styles.rightContainer}>
              <h3>{project.title}</h3>
              {project.content.map(({ title }) => {
                return (
                  <ul className={styles.contentTitle}>
                    <li>{title}</li>
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
