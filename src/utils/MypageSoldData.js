import "../css/ApexCharts.css";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/Mypage/sold/`;
const iconUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

export const MypageSoldData = [
  {
    id: 0,
    orderNo: "2064961230-221019",
    name: "스칼렛 레드 자켓",
    product_state: "배송준비중",
    price: 22800,
    price_state: "정산 대기중",
    purchaseYMD: "2022-10-19",
    url: `${imgUrl}sold0.png`,
  },
  {
    id: 1,
    orderNo: "2064961230-221001",
    name: "아디다스 모자",
    product_state: "배송완료",
    price: 166580,
    price_state: "정산 완료",
    purchaseYMD: "2022-10-01",
    url: `${imgUrl}sold1.png`,
  },
  {
    id: 2,
    orderNo: "2064961230-220930",
    name: "네온 부츠컷 팬츠",
    product_state: "배송완료",
    price: 15980,
    price_state: "정산 완료",
    purchaseYMD: "2022-09-30",
    url: `${imgUrl}sold2.png`,
  },
  {
    id: 3,
    orderNo: "2064961230-220929",
    name: "빈티지 레더 클러치백",
    product_state: "배송완료",
    price: 156000,
    price_state: "정산 완료",
    purchaseYMD: "2022-09-29",
    url: `${imgUrl}sold3.png`,
  },
  {
    id: 4,
    orderNo: "2064961230-220928",
    name: "숏 청자켓",
    product_state: "배송완료",
    price: 52800,
    price_state: "정산 완료",
    purchaseYMD: "2022-09-28",
    url: `${imgUrl}sold4.png`,
  },
  {
    id: 5,
    orderNo: "2064961230-220927",
    name: "아디다스 후드집업",
    product_state: "배송완료",
    price: 35700,
    price_state: "정산 완료",
    purchaseYMD: "2022-09-27",
    url: `${imgUrl}sold5.png`,
  },
];

const date = new Date(); //현재 날짜 및 시간
const dayDate = date.getDate();

//X축 한달
const month = [];
for (let i = 1; i <= 31; i++) {
  month.push(i);
}
//X축 1년
const year = [];
const monthDate = date.getMonth() + 1; //현재 월
for (let i = 1; i <= monthDate; i++) {
  year.push(i);
}
//한달 판매율
const salesRate = [
  5, 10, 0, 0, 4, 0, 3, 5, 0, 0, 0, 9, 2, 0, 5, 4, 0, 7, 1, 0, 10, 0, 0, 0, 0,
  5, 4, 8, 0, 0, 5,
];
const salesRate2 = [
  5, 10, 0, 0, 4, 0, 3, 5, 0, 0, 0, 9, 2, 0, 5, 4, 0, 7, 1, 0, 10, 0, 0, 0, 0,
  5, 4, 8, 0, 0, 5,
];
//1년간 판매율
const monthRate = [30, 42, 68, 12, 105, 77, 3, 99, 132];

//오늘 이후 판매율
for (let i = dayDate; i < 31; i++) {
  salesRate[i] = null;
}

//ApexCharts
export const Chart = {
  series: [
    {
      name: "판매갯수",
      data: salesRate,
      //data: salesRate2,
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
        autoSelected: "none",
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 500,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    theme: {
      // mode: "light",
      // palette: "palette5",
      monochrome: {
        enabled: true,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    stroke: {
      curve: "straight",
      // curve: "smooth",
      colors: "#000000",
      width: 1,
    },
    xaxis: {
      categories: month,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const date = new Date(); //현재 날짜 및 시간
        const monthDate = date.getMonth() + 1; //현재 월

        const today = w.globals.labels[dataPointIndex]; //마우스 오버
        const depositDay = w.globals.labels[dataPointIndex] + 7; //정산날짜(당일+7)

        let depositMonth = "";
        let depositDay2 = "";

        if (today >= 24) {
          depositDay2 = depositDay - 30;
          depositMonth = monthDate + 1;
        }

        // eslint-disable-next-line no-nested-ternary
        return series[seriesIndex][dataPointIndex] == null
          ? ""
          : depositDay > 30
          ? '<div class="arrow_box">' +
            `<span class="today">` +
            monthDate +
            "월 " +
            today +
            "일 " +
            "</span>" +
            `<span class="content">` +
            "판매: " +
            series[seriesIndex][dataPointIndex] +
            "개" +
            "</span>" +
            `<span class="content">` +
            "정산: " +
            depositMonth +
            "/" +
            depositDay2 +
            "</span>" +
            "</div>" +
            ""
          : '<div class="arrow_box">' +
            `<span class="today">` +
            monthDate +
            "월 " +
            today +
            "일 " +
            "</span>" +
            `<span class="content">` +
            "판매: " +
            series[seriesIndex][dataPointIndex] +
            "개" +
            "</span>" +
            `<span class="content">` +
            "정산: " +
            monthDate +
            "/" +
            depositDay +
            "</span>" +
            "</div>";
      },
    },
    markers: {
      colors: "#00FF85",
    },
  },
};

//월별 판매율
export const Chart2 = {
  series: [
    {
      name: "판매갯수",
      data: monthRate,
      //data: salesRate2,
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
        autoSelected: "none",
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 500,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    theme: {
      // mode: "light",
      // palette: "palette5",
      monochrome: {
        enabled: true,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    stroke: {
      curve: "straight",
      // curve: "smooth",
      colors: "#000000",
      width: 1,
    },
    xaxis: {
      categories: year,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const today = w.globals.labels[dataPointIndex]; //마우스 오버

        // eslint-disable-next-line no-nested-ternary
        return series[seriesIndex][dataPointIndex] == null
          ? ""
          : '<div class="arrow_box">' +
              `<span class="today">` +
              today +
              "월 " +
              "</span>" +
              `<span class="content">` +
              "판매: " +
              series[seriesIndex][dataPointIndex] +
              "개" +
              "</span>" +
              "</span>" +
              "</div>";
      },
    },
    markers: {
      colors: "#00FF85",
    },
  },
};

//판매율 데이터
export const SalesData = [
  {
    data1: "입금 대기",
    data2: "신규주문",
    data3: "오늘 정산",
    data1value: 122850,
    data2value: 7,
    data3value: 0,
    data1icon: `${iconUrl}circlegreen.png`,
    data2icon: `${iconUrl}circlegreen.png`,
    data3icon: `${iconUrl}circleblack.png`,
  },
  {
    data1: "배송준비",
    data2: "배송중",
    data3: "배송완료",
    data1value: 7,
    data2value: 8,
    data3value: 4,
    data1icon: `${iconUrl}circlegray.png`,
    data2icon: `${iconUrl}circlegray.png`,
    data3icon: `${iconUrl}circlegray.png`,
  },
  {
    data1: "댓글",
    data2: "좋아요",
    data3: "평균 별점",
    data1value: 21,
    data2value: 73,
    data3value: 4.5,
    data1icon: `${iconUrl}circlegray.png`,
    data2icon: `${iconUrl}circlegray.png`,
    data3icon: `${iconUrl}circlegray.png`,
  },
];
