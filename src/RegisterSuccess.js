import React from "react";

const RegisterSuccess = ({ data }) => {
  return (
    <div>
      <h4>Succefully Registred</h4>
      <h4>{data.fname}</h4>
      <h4>{data.lname}</h4>
      <h4>{data.email}</h4>
    </div>
  );
};

export default RegisterSuccess;
