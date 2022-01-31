import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalAdd from "../Modal/Modal";
import Cart from "./Cart";

const Category = () => {
  const { categoryes } = useSelector((state) => state.categoryes);
  // const { values } = useSelector((state) => state.values);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="item1">
        <Cart
          data={categoryes}
          isCategory={true}
          title="Categoryes"
          setIsModalVisible={setIsModalVisible}
        />
        {isModalVisible ? (
          <ModalAdd
            title="Categoryes"
            data={categoryes}
            // dataIt={values}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Category;
