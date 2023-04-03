import "./Content.css";

import { Route, Routes } from "react-router-dom";

import { Page1 } from "../PageOne/Page1";

export const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/page" element={<Page1 />}></Route>
      </Routes>
    </div>
  );
};
