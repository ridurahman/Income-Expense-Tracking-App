import React from "react";

const IncomeSource = (props) => {
  const { id, amount, sources } = props.data;
  const { remove } = props;

  return (
    <tr>
      <td>{sources}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => remove(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default IncomeSource;
