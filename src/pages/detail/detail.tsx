import React from "react";
import { Outlet } from "react-router-dom";

function Detail() {
  return (
    <div>
      Detail
      <Outlet />
    </div>
  );
}

export default Detail;
