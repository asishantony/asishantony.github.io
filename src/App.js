import React from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Main";
import UploadForm from "./Components/UploadImage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/upload" component={UploadForm} />
    </div>
  );
};

export default App;
