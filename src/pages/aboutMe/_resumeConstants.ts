interface WorkCareersProp {
  title: string;
  period: string;
  skill: string[];
  content: {
    title: string;
    body?: string[];
  }[];
}

export const CAREER_DATA: WorkCareersProp[] = [
  {
    title: '백오피스 거래 생성 기능 구현',
    period: '2023.02 ~ 2023.04',
    skill: ['React', 'SCSS', 'Recoil'],
    content: [
      {
        title:
          '재사용성이 높은 컴포넌트를 구현하여 백오피스 시스템의 UI/UX 통일성을 높였습니다.',
        body: [
          '기업마다 달라지는 데이터 생성 폼을 관리하기 위해 전역상태관리 라이브러리를 사용했습니다.',
          '전역상태관리로 인해 컴포넌트 간 의존성을 낮춰 가독성이 향상되었고, 각각의 검증을 구현할 수 있었습니다.',
        ],
      },
    ],
  },
  {
    title: '앱 내 쿠폰 구매 기능 웹뷰 구현',
    period: '2023.08 ~ 2023.10',
    skill: ['React', 'React-query', 'Protobuf'],
    content: [
      {
        title:
          '반복되는 무거운 작업에 대해 캐싱과 추상화를 진행하여 개발 성능과 효율을 높였습니다.',
        body: [
          '시간이 많이 소요되는 웹앱 인터페이스 과정을 react-query의 캐싱을 사용하여 최소화하였습니다.\n웹앱 인터페이스와 의존성이 높은 비즈니스 로직을 커스텀 훅으로 만들어 가독성과 재사용성을 향상시켰습니다.',
        ],
      },
      {
        title:
          '웹뷰에서 발생하는 예기치 못한 오류에 대한 에러처리를 구현했습니다.',
        body: [
          '다양한 환경에서 실행되는 웹뷰의 예기치 못한 오류 상황을 대처하기 위해 Error Boundaries 를 사용하여 에러페이지를 구현하였습니다.\n또한 오류 발생 시 로깅 웹앱 인터페이스를 추가하여 원활한 디버깅 환경을 구축하였습니다.',
        ],
      },
    ],
  },
  ,
  {
    title: '출퇴근 관리 서비스 구현',
    period: '2023.12 ~ 2024.01',
    skill: ['Next.JS', 'Mysql', 'Docker', 'PWA'],
    content: [
      {
        title:
          '사무실 이전으로 인한 출퇴근 시스템 부재를 해결하기 위해 출퇴근 관리 서비스를 직접 기획하고 개발 및 도입하였습니다.',
        body: [
          'NextJS를 사용하여 서버를 구현하였고, Geolocation API 와 카카오 지도 API를 사용하여 GPS 기반 출퇴근을 구현하였습니다.',
          '광고를 전공했던 경험을 살려, 서비스 사용 제안 프레젠테이션을 진행하여 사내 출퇴근 관리 시스템으로 도입하였습니다.',
        ],
      },
    ],
  },
];

export const EDUCATION_DATA = [
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
