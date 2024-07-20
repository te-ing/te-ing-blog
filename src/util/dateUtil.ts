export const getMonthDifference = (startDate: Date, endDate = new Date()) => {
  // 두 날짜의 년도와 월을 얻습니다.
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // 년도와 월을 바탕으로 차이를 계산합니다.
  const yearDifference = endYear - startYear;
  const monthDifference = endMonth - startMonth;

  // 전체 월 차이를 계산합니다.
  return yearDifference * 12 + monthDifference;
};

export const getYearMonthDifference = (
  startDate: Date,
  endDate = new Date()
) => {
  // 두 날짜의 년도와 월을 얻습니다.
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // 년도와 월을 바탕으로 차이를 계산합니다.
  const yearDifference = endYear - startYear;
  const monthDifference = endMonth - startMonth;

  // 전체 월 차이를 계산합니다.
  const dateDifference = yearDifference * 12 + monthDifference;

  return `${Math.floor(dateDifference / 12)}년${dateDifference % 12 ? ` ${dateDifference % 12}개월` : ''}`;
};
