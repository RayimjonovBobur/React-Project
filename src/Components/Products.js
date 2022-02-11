import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalAdd from "../Modal/Modal";
import Cart from "./Cart";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const [edit, setEdit] = useState("");
  const [istitle, setTitle] = useState(false);
  const [editData, setEditData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <div className="item1">
        <Cart
          data={products}
          setEdit={setEdit}
          title="Products"
          setEditData={setEditData}
          setIsModalVisible={setIsModalVisible}
          setTitle={setTitle}
        />
        {isModalVisible ? (
          <ModalAdd
            istitle={istitle}
            edit={edit}
            editData={editData}
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
