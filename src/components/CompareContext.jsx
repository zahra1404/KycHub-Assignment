import React, { createContext, useState } from "react";
import { Modal } from "antd";

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToCompare = (product) => {
    if (compareProducts.length < 4) {
      setCompareProducts([...compareProducts, product]);
    } else {
      setIsModalVisible(true);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareProducts(compareProducts.filter((p) => p.id !== productId));
  };

  return (
    <CompareContext.Provider value={{ compareProducts, addToCompare, removeFromCompare }}>
      {children}



      <Modal
        title="Comparison Limit Reached"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        okText="OK"
      >
        <p>You can only compare up to 4 products.</p>
      </Modal>
    </CompareContext.Provider>
  );
};
