import React from "react";

const ExpenseForm = ({
  addExpense,
  expenseType,
  expenseAmount,
  setExpenseType,
  setExpenseAmount,
}) => {
  return (
    <div>
      <div className="section">
        <h3>Add New Expense Type</h3>
        <form onSubmit={addExpense}>
          <div className="mb-3">
            <label htmlFor="expenseName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="expenseName"
              value={expenseType}
              onChange={(e) => {
                setExpenseType(e.target.value);
              }}
              placeholder="Enter expense name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="incomeCost" className="form-label">
              Another label
            </label>
            <input
              type="text"
              className="form-control"
              id="incomeCost"
              value={expenseAmount}
              onChange={(e) => {
                setExpenseAmount(e.target.value);
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

export default ExpenseForm;
