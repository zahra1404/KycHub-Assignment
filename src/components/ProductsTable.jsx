import React, { useEffect, useState, useContext } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { CompareContext } from "./CompareContext";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCompare, compareProducts } = useContext(CompareContext);

  const navigate = useNavigate();

  const handleCompare = (product) => {
    addToCompare(product);
    navigate("/compare");
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Check if a product is already added for comparison
  const isProductCompared = (productId) => {
    return compareProducts.some((product) => product.id === productId);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount (%)",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (url) => <img src={url} alt="Product" width={50} height={50} />,
    },
    {
      title: "Compare Product",
      key: "compare",
      render: (_, record) => (
        <Button
          onClick={() => handleCompare(record)}
          disabled={isProductCompared(record.id)}
        >
          {isProductCompared(record.id) ? "Added" : "Compare"}
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 20 }}
    />
  );
};

export default ProductsTable;
