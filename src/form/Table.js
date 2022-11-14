import React from "react";

const Table = ({ data }) => {
  return (
    <div className="containerr">
      Username : {data.username}
      <br></br>
      E-mail : {data.email}
      <br></br>
      DOB : {data.dob}
    </div>
  );
};

export default Table;
