const newImgUrl = `${process.env.PUBLIC_URL}/assets/images/newCollectionImg/`;
const popularImgUrl = `${process.env.PUBLIC_URL}/assets/images/popularImg/`;

export const topItemsData = [
  {
    id: 1,
    like_num: 15,
    size: "XS",
    isLike: false,
    brand: "ZARA",
    name: "그레이 크롭 나시",
    product_img_url: `${newImgUrl}sl_newitem1.png`,
    price: 6000,
    inCart: false,
  },
  {
    id: 2,
    like_num: 6,
    size: "M",
    isLike: false,
    brand: "SPO",
    name: "스카이 조거 트레이닝",
    product_img_url: `${newImgUrl}sl_newitem2.png`,
    price: 12000,
    inCart: false,
  },
  {
    id: 200,
    like_num: 20,
    size: "250",
    isLike: false,
    brand: "NEW BALANCE",
    name: "뉴발란스 화이트 슈즈",
    product_img_url: `${popularImgUrl}popularitem2.png`,
    price: 41000,
    inCart: false,
  },
  {
    id: 3,
    like_num: 17,
    size: "S",
    isLike: false,
    brand: "ZARA",
    name: "딥브이넥 탑 ",
    product_img_url: `${popularImgUrl}popularitem3.png`,
    price: 13000,
    inCart: false,
  },
];
