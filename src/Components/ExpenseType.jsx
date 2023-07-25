import React from "react";

const ExpenseType = (props) => {
  const { id, amount, type } = props.data;
  const { remove } = props;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => remove(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default ExpenseType;
