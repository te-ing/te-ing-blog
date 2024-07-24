import { EmailIcon, VelogIcon, GithubIcon } from '@site/static/svg';
import styles from './_style/intro.module.css';

export default function Intro(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <h2>About Me</h2>
        <ul>
          <li>안녕하세요. 같이 일하고 싶은 개발자 김태중입니다.</li>
          <li>
            2022년 8월부터 개인정보 활용 서비스 스타트업에서 백오피스와 웹뷰를
            개발하였습니다.
          </li>
          <li>
            리액트, 타입스크립트, SCSS를 주로 사용하며, 새로운 기술을 사용하는
            것을 즐깁니다.
          </li>
        </ul>
      </div>

      <div className={styles.rightContainer}>
        <ul>
          <li>
            <EmailIcon />
            <a href="mailto:hi2177@naver.com">hi2177@naver.com</a>
          </li>
          <li>
            <GithubIcon />
            <a target="_blank" href="https://github.com/te-ing">
              https://github.com/te-ing
            </a>
          </li>
          <li>
            <VelogIcon />
            <a target="_blank" href="https://velog.io/@te-ing">
              https://velog.io/@te-ing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
