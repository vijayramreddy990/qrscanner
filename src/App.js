import React from "react";
import QRCode from "react-qr-code";

const App = () => {
  return (
    <div>
      <h1>Hii I am going to be a qr scanner</h1>
      <QRCode value={"123456"} size={290} level="H" />
    </div>
  );
};

export default App;
