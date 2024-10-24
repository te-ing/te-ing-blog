import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

type FeatureItem = {
  id: string;
  title: string;
  previewLink: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    id: 'til',
    title: '개발 기술 정리',
    previewLink: (
      <Link className={styles.link} to="til/cra-to-vite-migration">
        빌드시간 개선을 위한 CRA to Vite Migration
      </Link>
    ),
    description: (
      <>
        <div>
          새롭게 알게 된 내용을 정리합니다.
          <br />
          더 잘 기억할 수 있도록 <br />
          그리고 다시 볼 수 있도록 씁니다.
        </div>
      </>
    ),
  },
  {
    id: 'problem',
    title: '문제 해결 과정 공유',
    description: (
      <>
        <div>
          겪었던 문제과 해결 과정을 공유합니다.
          <br />
          다른 개발자분들의 문제 해결에 <br />
          조금이나마 도움이 되었으면 합니다.
        </div>
      </>
    ),
    previewLink: (
      <Link
        className={styles.link}
        to="problem/2024/06/02/NextJS-14.0.2-Server-Action-로그인-시-cookie가-저장되지-않는-문제"
      >
        {'NextJS 14.0.2 Server Action 로그인 시\ncookie가 저장되지 않는 문제'}
      </Link>
    ),
  },
  {
    id: 'think',
    title: '생각과 회고',
    previewLink: (
      <Link
        className={styles.link}
        to="think/2024/10/23/개발자로%20취업한%20지%202년%20즈음이%20지난%20시점에서%20적는%20회고"
      >
        {'개발자로 취업한 지 2년 즈음이\n지난 시점에서 적는 회고'}
      </Link>
    ),
    description: (
      <>
        <div>
          느낌과 생각을 기록합니다.
          <br />
          한 개발자의 생각을 엿보는 마음으로 <br />
          가볍게 읽어주시길 바랍니다.
        </div>
      </>
    ),
  },
];

function Feature({ id, title, previewLink, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={id}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
      <p className="text--center margin--none text--bold">추천 포스팅</p>
      <div className="text--center">{previewLink}</div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
