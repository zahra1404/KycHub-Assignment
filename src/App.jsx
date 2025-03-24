import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompareProvider } from "./components/CompareContext";
import ProductsTable from "./components/ProductsTable";
import CompareProductsPage from "./components/CompareProductsPage";
import Sidebar from "./components/Sidebar";
import NavbarWithSidebar from "./components/Navbar";

const App = () => {
  return (
    <CompareProvider>
      <NavbarWithSidebar />
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ width: "80%", margin: "20px" }}>
            <Routes>
              <Route path="/" element={<ProductsTable />} />
              <Route path="/compare" element={<CompareProductsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CompareProvider>
  );
};

export default App;
