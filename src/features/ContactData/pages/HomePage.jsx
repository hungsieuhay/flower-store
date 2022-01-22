import { Drawer, Table } from "antd";
import React, { useState } from "react";
import ContactForm from "../components/Form";

const contactData = [
  {
    key: "1",
    id: 1,
    name: "John",
    age: "20",
    address: "London",
  },
  {
    key: "2",
    id: 2,
    name: "Lisa",
    age: "18",
    address: "Turkey",
  },
  {
    key: "3",
    id: 3,
    name: "Rose",
    age: "22",
    address: "Germany",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
function HomePage(props) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <button onClick={showDrawer}>ADD</button>
      <Table dataSource={contactData} columns={columns} />
      <Drawer
        title="Contact Form"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <ContactForm contactForm={columns} />
      </Drawer>
    </div>
  );
}

export default HomePage;
