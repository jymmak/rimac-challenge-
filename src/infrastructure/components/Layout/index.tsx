import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="wrapper_page">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
