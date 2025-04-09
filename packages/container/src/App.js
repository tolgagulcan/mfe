import { mount } from "marketing/MarketingApp";
import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const el = document.createElement("div");

mount(el);

console.log(el);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
