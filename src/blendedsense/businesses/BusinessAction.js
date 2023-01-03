import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import Businesses from "./Businesses";
export default function deleteIcon() {
  return (
    <div>
      <button
        className="ellipsisbtn"
        style={{ color: "black", fontWeight: 800, fontSize: "medium" }}
      >
        <EllipsisOutlined />
      </button>
      <Businesses />
    </div>
  );
}
