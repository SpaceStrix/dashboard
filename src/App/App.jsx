// CSS
import "./App.css";

import { Route, Routes } from "react-router-dom";

// Components
import { Menu } from "../Menu/Menu";
import { Content } from "../Content/Content";

export const App = () => {
  return (
    <div className="main">
      <Menu />
      <Content />
    </div>
  );
};
