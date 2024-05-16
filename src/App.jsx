import React from "react";
import Pages from "./component/Pages/Pages";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
  );
};

export default App;
