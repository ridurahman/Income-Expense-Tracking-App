import React from "react";
import Menu from "../Components/Menu/Menu";
import { useState } from "react";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";
const ExpensePage = () => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  let listExpense = {
    id: "",
    type: "",
    amount: 0,
  };
  const [allItems, setAllItems] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();
    (listExpense = {
      id: Date.now(),
      type: expenseType,
      amount: expenseAmount,
    }),
      setAllItems([...allItems, listExpense]);

    setExpenseType("");
    setExpenseAmount("");
  };

  const removeFromList = (id) => {
    const remainingSources = allItems.filter((list) => list.id !== id);
    setAllItems([...remainingSources]);
  };

  const calculateExpense = (e) => {
    return allItems.reduce((total, currentValue) => {
      return total + parseInt(currentValue.amount);
    }, 0);
  };
  return (
    <div>
      <Menu />
      <ExpenseForm
        addExpense={addExpense}
        expenseType={expenseType}
        expenseAmount={expenseAmount}
        setExpenseType={setExpenseType}
        setExpenseAmount={setExpenseAmount}
      />
      <ExpenseList
        list={allItems}
        remove={removeFromList}
        total={calculateExpense}
      />
    </div>
  );
};

export default ExpensePage;
