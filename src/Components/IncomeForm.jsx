import React from "react";

const IncomeForm = ({
  addSource,
  incomeSource,
  incomeAmount,
  setIncomeSource,
  setIncomeAmount,
}) => {
  return (
    <div>
      <div className="section">
        <h3>Add New Income Source</h3>

        <form onSubmit={addSource}>
          <div className="mb-3">
            <label htmlFor="incomeName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="incomeName"
              value={incomeSource}
              onChange={(e) => {
                setIncomeSource(e.target.value);
              }}
              placeholder="Enter salary or other types of income"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="incomeCost" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="incomeCost"
              value={incomeAmount}
              onChange={(e) => {
                setIncomeAmount(e.target.value);
              }}
              placeholder="Enter amount"
            />
          </div>
          <button type="submit" className="btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncomeForm;
