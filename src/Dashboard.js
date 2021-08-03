import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Dashboard = () => {
  const { regUsers } = useContext(GlobalContext);
  return (
    <div>
      <h1>{regUsers}</h1>
      <p>Registered</p>
    </div>
  );
};

export default Dashboard;
