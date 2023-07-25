import React from "react";
import IncomeSource from "./IncomeSource";

const IncomeSourceList = ({ list, remove, total }) => {
  return (
    <div>
      <div className="section">
        <h3>All Income Information</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Income Source</th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((element) => {
                return (
                  <IncomeSource
                    key={element.id}
                    data={element}
                    remove={remove}
                  />
                );
              })}
            <tr>
              <td>Total Income: </td>
              <td>{total()}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeSourceList;
