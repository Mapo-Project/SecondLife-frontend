const minusBagNumChange = (size, num) => {
    let result = 0;
    if (num > 0) {
      result = num - 1;
    }
    setGreenBagNum({ ...greenBagNum, [size]: result });
  };

  const plusBagNumChange = (size, num) => {
    let result = 0;
    if (num < 3) {
      result = num + 1;
    } else {
      result = 3;
    }
    setGreenBagNum({ ...greenBagNum, [size]: result });
  };

<BagCounter>
  <img
    src={
      medium > 0
        ? `${imgUrl}icons/bag_minus_active.png`
        : `${imgUrl}icons/bag_minus.png`
    }
    alt="minus"
    className="minus"
    onClick={() => minusBagNumChange("medium", medium)}
  />
  <p>{greenBagNum.medium} 개</p>
  <img
    src={`${imgUrl}icons/bag_plus.png`}
    alt="plus"
    className="plus"
    onClick={() => plusBagNumChange("medium", medium)}
  />
</BagCounter>;
