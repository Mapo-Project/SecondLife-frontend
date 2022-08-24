import styled from "styled-components";

const ProductList = () => {
  const TopWrapper = styled.div`
    table {
      width: 100%;
    }
    td {
      border: 1px solid black;
    }
  `;
  return <TopWrapper></TopWrapper>;
};

export default ProductList;
