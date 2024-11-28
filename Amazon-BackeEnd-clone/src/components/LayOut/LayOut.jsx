import React from "react";
import Header from "../Header/Header";

function LayOut({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default LayOut;
