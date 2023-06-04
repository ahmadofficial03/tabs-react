import React from "react";
import ReactLoading from "react-loading";

const loaderStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Loader = ({ type, color }) => (
  <div className="loader" style={loaderStyle}>
    <ReactLoading type={type} color={color} height={267} width={175} />
  </div>
);

Loader.defaultProps = {
  type: "balls",
  color: "#86D9D1",
};

export default Loader;
