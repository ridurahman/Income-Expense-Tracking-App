import React from "react";
import ExpenseType from "./ExpenseType";

const ExpenseList = ({ list, remove, total }) => {
  return (
    <div>
      <div className="section">
        <h3>All Expense Information</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Expense Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((element) => {
                return (
                  <ExpenseType
                    key={element.id}
                    data={element}
                    remove={remove}
                  />
                );
              })}
            <tr>
              <td>Total Expense: </td>
              <td>{total()}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
