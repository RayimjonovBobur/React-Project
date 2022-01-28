import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { delet_category } from "../redux/cateory_reducer";
import { delet_product } from "../redux/product_reducer";

const Cart = ({ data, title, setIsModalVisible }) => {
  const [item, setItems] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    data.map((element) => setItems(element));
  });
  return (
    <Card
      title={title}
      style={{ marginTop: -50, alignItems: "center", textAlign: "center" }}
    >
      <table class="table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            {item.name ? <th scope="col">Name</th> : null}
            {item.price ? <th scope="col">Pirce</th> : null}
            {item?.category_id ? <th scope="col">Category_id</th> : null}
            {item?.img ? <th scope="col ">Image</th> : null}
            {/* <Button type="primary">Add</Button> */}
            <button
              className="btn btn-outline-primary mx-2 my-2"
              onClick={() => setIsModalVisible(true)}
            >
              Add
            </button>
          </tr>
        </thead>{" "}
        <tbody>
          {data.map((item) => (
            <tr>
              {/* {item.id ? <th scope="row">{item.id}</th> : null} */}
              {item.name ? <td>{item.name}</td> : null}
              {item.price ? <td>{item.price}</td> : null}
              {item.category_id ? <td>{item.category_id}</td> : null}
              {item.img ? (
                <td>
                  {" "}
                  <img src={item.img} alt={item.name} className="img" />
                </td>
              ) : null}
              <button
                className="btn btn-outline-danger my-2 mx-2"
                onClick={() =>
                  dispatch(delet_category(item)) &&
                  dispatch(delet_product(item))
                }
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Cart;
