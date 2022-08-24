import { useState } from "react";
import styled from "styled-components";
import CartTitle from "../components/CartTitle";

const FirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  .left-wrapper {
    display: flex;
  }
  .right-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const List = styled.div`
  table {
    width: 100%;
  }
  td {
    border: 1px solid black;
  }
`;
const imgUrl = `${process.env.PUBLIC_URL}/assets/images/cartImg/`;

const cartList = [
  {
    seller: "GoodSales",
    products: [
      {
        id: 1,
        imgUrl: `${imgUrl}product1.png`,
        name: "아디다스 저지 블루",
        size: "L",
        brand: "아디다스",
        color: "그레이, 브라운",
        condition: "매우좋음",
        point: "3P",
        price: "10000",
      },
      {
        id: 2,
        imgUrl: `${imgUrl}product2.png`,
        name: "블랙 로고 맨투맨",
        size: "L",
        brand: "none",
        color: "그레이, 브라운",
        condition: "매우좋음",
        point: "3P",
        price: "12000",
        sale_price: "7000",
      },
    ],
  },
  {
    seller: "Hello",
    products: [
      {
        id: 3,
        imgUrl: `${imgUrl}product3.png`,
        name: "브릭 체크 셔츠",
        size: "L",
        brand: "none ",
        color: "그레이, 브라운",
        condition: "매우좋음",
        point: "3P",
        price: "3000",
      },
    ],
  },
];

const cartListData = [];
cartList.forEach((elm) => {
  elm.products.forEach((product) =>
    cartListData.push({ seller: elm.seller, id: product.id })
  );
});

const CartList = () => {
  const [dataList, setDataList] = useState(cartList);
  const [checkItems, setCheckItems] = useState(cartListData);
  const handleAllCheck = (checked) => {
    if (checked) {
      cartList.forEach((item) => {
        item.products.forEach((elm) => {
          setCheckItems((prev) => [
            ...prev,
            {
              seller: item.seller,
              id: elm.id,
            },
          ]);
        });
      });
    } else {
      setCheckItems([]);
    }
  };
  const handleSellerCheck = (checked, seller) => {
    if (checked) {
      cartList.forEach((item) => {
        if (item.seller === seller) {
          let products = item.products;
          products.forEach((elm) => {
            setCheckItems((prev) => [...prev, { seller: seller, id: elm.id }]);
          });
        }
      });
    } else {
      setCheckItems(checkItems.filter((item) => item.seller !== seller));
    }
  };
  const handleProductCheck = (checked, seller, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, { seller, id }]);
    } else {
      setCheckItems(checkItems.filter((elm) => elm.id !== id));
    }
  };
  const checkProduct = (id) => {
    let idArray = checkItems.map((elm) => {
      return elm.id;
    });
    return idArray.includes(id);
  };
  const checkSeller = (seller) => {
    let checkItemsResult = [];
    let cartListResult = [];
    checkItems.forEach((item) => {
      if (item.seller === seller) {
        checkItemsResult.push(item);
      }
    });
    cartList.forEach((elm) => {
      if (elm.seller === seller) {
        cartListResult = elm.products.map((product) => product.id);
      }
    });
    if (checkItemsResult.length === cartListResult.length) {
      return true;
    } else {
      return false;
    }
  };
  const checkAll = () => {
    let cartListResult = [];
    cartList.forEach((elm) => {
      elm.products.forEach((product) => {
        cartListResult.push(product.id);
      });
    });
    if (cartListResult.length === checkItems.length) {
      return true;
    } else {
      return false;
    }
  };

  const handleCheckRemove = () => {
    let checkItemsResult = [];
    checkItemsResult = checkItems.map((elm) => elm.id);
    dataList.forEach((elm) => {
      elm.products.forEach((product) => console.log(product));
    });
  };

  // console.log("체크아이템즈", checkItems);

  return (
    <>
      <CartTitle title={"장바구니"} />
      <FirstWrapper>
        <div className="left-wrapper">
          <input
            type="checkbox"
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkAll()}
          />
          <h6>전체선택</h6>
        </div>
        <div className="right-wrapper">
          <h6 onClick={handleCheckRemove}>선택삭제</h6>
          <button>주문불가 삭제</button>
        </div>
      </FirstWrapper>
      <List>
        <table>
          {/* 반복되는 부분 */}
          {dataList.map((item) => {
            return (
              <>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleSellerCheck(e.target.checked, item.seller)
                      }
                      checked={checkSeller(item.seller)}
                    />
                  </td>
                  <td colSpan="4">{item.seller}</td>
                </tr>
                <tr>
                  <td colSpan="3">상품</td>
                  <td>그린포인트 적립금</td>
                  <td>가격</td>
                </tr>
                {item.products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            handleProductCheck(
                              e.target.checked,
                              item.seller,
                              product.id
                            )
                          }
                          checked={checkProduct(product.id)}
                        />
                      </td>
                      <td>
                        <img src={product.imgUrl} alt={`${product.name}`} />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.point}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
          {/* 반복되는 부분 */}
        </table>
      </List>
    </>
  );
};

export default CartList;
