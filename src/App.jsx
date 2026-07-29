import React, { useState } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import TransactionTable from "./component/TransactionTable";
import ContentArea from "./component/ContentArea";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContentArea />
    </>
  );
}

export default App;
