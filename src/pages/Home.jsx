import React from "react";
import Menu from "../Components/Menu/Menu";
import TotalIncome from "../Components/TotalIncome";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="row section">
        <TotalIncome />

        <div className="col-4">
          <div className="card card-body">
            <p className="card-text">Total Expense: </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card card-body">
            <p className="card-text">Savings: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
