import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { add_category } from "../redux/cateory_reducer";
import { add_product, edit_products } from "../redux/product_reducer";

const ModalAdd = ({
  data,
  title,
  isModalVisible,
  setIsModalVisible,
  edit,
  editData,
  istitle,
}) => {
  const dispatch = useDispatch();
  const current_url = window.location.href.split("/")[3];
  const { categoryes } = useSelector((state) => state.categoryes);
  const [item, setItem] = useState({});
  const { values } = useSelector((state) => state.values);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (values) {
      setName(values.name);
      setPrice(values.price);
      setImg(values.img);
      setCategoryID(values.category_id);
    }
  }, [values]);

  useEffect(() => {
    data.forEach((obj) => setItem(obj));
    if (edit) {
      setName(edit.name);
      setPrice(edit.price);
      setImg(edit.img);
    }
  }, [edit]);

  const [name, setName] = useState(item.name);
  const [id] = useState(item.id);
  const [price, setPrice] = useState(item.price);
  const [img, setImg] = useState(item.img);
  const [category_id, setCategoryID] = useState(item.category_id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = {
      id: edit.id,
      name,
      price,
      category_id: "naxnax",
      img,
    };

    const product = {
      name,
      id,
      price,
      img,
      category_id,
    };
    const category = {
      name,
      id,
    };
    if (current_url === "categoryes") {
      dispatch(add_category(category));
    }

    if (current_url === "products") {
      dispatch(add_product(product));
    } else {
      editData.splice(title.id - 1, 1, title);
      dispatch(edit_products(editData));
    }
  };

  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Modal
        isModalVisible={isModalVisible}
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ borderRadius: "15px" }}
        footer={null}
      >
        <form className="from">
          <div className="row">
            <div className="col-lg-6">
              <label className="form-label">Name</label>
              <Input
                type="text"
                name="name"
                className="form-control "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="name"
              />
            </div>

            <div className="col-lg-6">
              <label className="form-label">Categorys</label>
              <select
                name="category"
                onChange={(e) => setCategoryID(e.target.value)}
                required
                className="form-select"
              >
                <option value="" hidden>
                  None
                </option>{" "}
                {categoryes.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-6 mt-3">
              <label className="form-label">Pirce</label>
              <Input
                type="number"
                name="price"
                className="form-control "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <div className="file-input">
                <input
                  type="file"
                  name="img"
                  id="file-input"
                  className="file-input__input"
                  onChange={handleChange}
                  placeholder="img"
                  required
                />
                <label className="file-input__label" for="file-input">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="upload"
                    className="svg-inline--fa fa-upload fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Upload file</span>
                </label>
              </div>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <button
                className="btn btn-danger mx-2 my-4 w-100"
                onClick={handleCancel}
              >
                Close
              </button>
            </div>
            <div className="col-lg-6 ">
              <button
                type="submit"
                className="btn my-2 mx-2 mt-4 btn-success w-100"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalAdd;
