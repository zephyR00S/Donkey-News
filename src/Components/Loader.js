import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div>
      <center>
        <img src={loading} alt="loading" height={"80px"} margin={"170px"} />
      </center>
    </div>
  );
};

export default Loader;
