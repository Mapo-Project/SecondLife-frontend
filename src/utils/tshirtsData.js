const newImgUrl = `${process.env.PUBLIC_URL}/assets/images/newCollectionImg/`;
const popularImgUrl = `${process.env.PUBLIC_URL}/assets/images/popularImg/`;

export const tshirtsData = [
  {
    id: 3,
    like_num: 5,
    size: "S",
    isLike: false,
    brand: "ZARA",
    name: "라임 브이넥 반팔 티셔츠",
    product_img_url: `${newImgUrl}sl_newitem10.png`,
    price: 4000,
    inCart: false,
  },

  {
    id: 6,
    like_num: 7,
    size: "M",
    isLike: false,
    brand: "ZARA",
    name: "스퀘어넥 반팔 퍼프 티셔츠",
    product_img_url: `${newImgUrl}sl_newitem16.png`,
    price: 8000,
    inCart: false,
  },
];
