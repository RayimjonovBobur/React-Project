import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalAdd from "../Modal/Modal";
import Cart from "./Cart";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <div className="item1">
        <Cart
          data={products}
          title="Products"
          setIsModalVisible={setIsModalVisible}
        />
        {isModalVisible ? (
          <ModalAdd
            data={products}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Products;
