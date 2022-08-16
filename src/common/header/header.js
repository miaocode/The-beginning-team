import React from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { LOGIN_FORM } from "../../content/form";
import "./header.css";

const Header = ({ setVisible }) => {
  return (
    <div className="header-container">
      <h1 id="management">Management</h1>

      <div className="search-bar">
        <input placeholder="Search" />
      </div>
      <div className="signin-button">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          <UserOutlined />
          {LOGIN_FORM.SIGNIN}
        </Button>
      </div>
      <div className="cart-icon"></div>
      <div className="total-amount">
        <ShoppingCartOutlined />
        $0.00
      </div>
    </div>
  );
};

export default Header;
