import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componets/App";
// import StarRating from "./componets/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} size={30} /> */}
  </React.StrictMode>
);
