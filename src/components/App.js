import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "./Home";
import Loading from "./Loading";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./Dynamic"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dynamic" element={<AsyncDynamicPAge />} />
        <Route path="*" element={<AsyncNoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
