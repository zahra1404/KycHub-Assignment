import React, { useContext } from "react";
import { Card, Button, Row, Col } from "antd";
import { CompareContext } from "./CompareContext";
import { useNavigate } from "react-router-dom";
const CompareProductsPage = () => {
  const { compareProducts, removeFromCompare } = useContext(CompareContext);
  const router = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{textAlign:"center"}}>Compare Products</h2>

      <Button 
        onClick={() => router("/")}
        style={{width:"4cm" , margin:"15px"}}
      >
        Add More +
      </Button>
      {compareProducts.length > 0 ? (
        <Row gutter={[16, 16]} justify="center">
          {compareProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ textAlign: "center", borderRadius: "10px", padding: "15px" }}
                cover={
                  <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width={70}
                      height={70}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                }
              >
                <h3>{product.title}</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>{product.description}</p>
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Price:</b> ${product.price}</p>
                <p>
                  <b>Discounted Price:</b> ${(
                    product.price - (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </p>
                <Button danger onClick={() => removeFromCompare(product.id)}>
                  Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No products selected for comparison.</p>
      )}
    </div>
  );
};

export default CompareProductsPage;
