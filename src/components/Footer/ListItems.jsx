import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ listTitle, listLinks }) => {
  return (
    <div className="payBillContaim my-6 w-[48%] lg:w-[15%] text-[#2A2E33] ">
      <h3 className="font-bold mb-2 text-base tracking-widest leading-loose">
        {listTitle}
      </h3>
      {listLinks?.map((item, key) => (
        <a
          key={key}
          href="#"
          className="text-[14px] block my-5 tracking-wider leading-loose"
        >
          {item?.name}
        </a>
      ))}
    </div>
  );
};

export default ListItems;
