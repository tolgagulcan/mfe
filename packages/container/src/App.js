import { mount } from "marketing/MarketingApp";
import React from "react";
import MarketingApp from "./components/MarketingApp";

const el = document.createElement("div");

mount(el);

console.log(el);

const App = () => {
  return (
    <>
      <h1>Hi there!</h1>
      <hr/>
      <MarketingApp/>
    </>
  );
};

export default App;
