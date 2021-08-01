import React from "react";
import TrandsKeyword from "./trandskeyword";
import { FaSistrix } from "react-icons/fa";
const Trands = () => {
  return (
    <div className="trands">
      <div className="trands__search">
        <input
          type="text"
          className="trands__control"
          placeholder="Search Twitter"
        />
        <div className="trands__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrandsKeyword />
    </div>
  );
};

export default Trands;
