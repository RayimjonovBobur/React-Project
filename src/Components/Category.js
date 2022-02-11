import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalAdd from "../Modal/Modal";
import Cart from "./Cart";

const Category = () => {
  const { categoryes } = useSelector((state) => state.categoryes);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState("");
  const [editData, setEditData] = useState("");
  const [istitle, setTitle] = useState(false);

  return (
    <div>
      <div className="item1">
        <Cart
          data={categoryes}
          isCategory={true}
          title="Categoryes"
          setEdit={setEdit}
          setEditData={setEditData}
          setIsModalVisible={setIsModalVisible}
          setTitle={setTitle}
        />
        {isModalVisible ? (
          <ModalAdd
            istitle={istitle}
            edit={edit}
            editData={editData}
            title="Categoryes"
            data={categoryes}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Category;
