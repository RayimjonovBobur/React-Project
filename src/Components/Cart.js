import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { delet_category } from "../redux/cateory_reducer";
import { delet_product } from "../redux/product_reducer";

const Cart = ({
  data,
  title,
  setIsModalVisible,
  setEdit,
  setEditData,
  setTitle,
}) => {
  const [item, setItems] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    data.map((element) => setItems(element));
  });

  return (
    <Card
      title={title}
      style={{ marginTop: -50, alignItems: "center", textAlign: "center" }}
      key={item.id}
    >
      <table class="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            {item.name ? <th scope="col">Name</th> : null}
            {item.price ? <th scope="col">Pirce</th> : null}
            {item.category_id ? <th scope="col">Category_id</th> : null}
            {item?.img ? <th scope="col ">Image</th> : null}
            <th scope="col">
              <button
                className="btn btn-primary mx-2 my-2"
                onClick={() => setIsModalVisible(true)}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td> 
            <td>{item.price}$</td> 
            <td>{item.category_id}</td> 
              {item.img ? (
                <td>
                  <img src={item.img} alt={item.name} className="img" />
                </td>
              ) : null}
              <div className="d-flex">
                <button
                  className="btn btn-outline-success my-2 mx-2"
                  onClick={() => {
                    setEdit(item);
                    setEditData([...data]);
                    setIsModalVisible(true);
                    setTitle(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger my-2 mx-2"
                  onClick={() =>
                    dispatch(delet_category(item)) &&
                    dispatch(delet_product(item))
                  }
                >
                  Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
export default Cart;
