import React from "react";
import ReactDom from "react-dom";
import MyApp from "./App.js";

import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

ReactDom.render(
  <RoomProvider>
    <Router>
      <MyApp />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
