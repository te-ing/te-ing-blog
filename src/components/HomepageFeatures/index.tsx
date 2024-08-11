import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

type FeatureItem = {
  id: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    id: 'til',
    title: '개발 기술 정리',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
  },
  {
    id: 'think',
    title: '생각과 회고',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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

function Feature({ id, title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={id}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
