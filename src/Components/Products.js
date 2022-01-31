import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalAdd from "../Modal/Modal";
import Cart from "./Cart";

const Products = () => {
  // const { values } = useSelector((state) => state.values);
  const { products } = useSelector((state) => state.products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <div className="item1">
        <button className="btn btn-danger">Add</button>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-success">Delete</button>
        <Cart
          data={products}
          title="Products"
          setIsModalVisible={setIsModalVisible}
        />
        {isModalVisible ? (
          <ModalAdd
            // dataIt={values}
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
