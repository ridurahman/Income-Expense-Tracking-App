import Menu from "../Components/Menu/Menu";
import { useState } from "react";
import IncomeSourceList from "../Components/IncomeSourceList";
import IncomeForm from "../Components/IncomeForm";
const IncomePage = () => {
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  let listIncome = {
    id: "",
    sources: "",
    amount: 0,
  };
  const [allItems, setAllItems] = useState([]);

  const addSource = (e) => {
    e.preventDefault();
    (listIncome = {
      id: Date.now(),
      sources: incomeSource,
      amount: incomeAmount,
    }),
      setAllItems([...allItems, listIncome]);

    setIncomeSource("");
    setIncomeAmount("");
  };

  const removeFromList = (id) => {
    const remainingSources = allItems.filter((list) => list.id !== id);
    setAllItems([...remainingSources]);
  };

  const calculateIncome = (e) => {
    return allItems.reduce((total, currentValue) => {
      return total + parseInt(currentValue.amount);
    }, 0);
  };

  return (
    <div>
      <Menu />
      <IncomeForm
        addSource={addSource}
        incomeSource={incomeSource}
        incomeAmount={incomeAmount}
        setIncomeSource={setIncomeSource}
        setIncomeAmount={setIncomeAmount}
      />

      <IncomeSourceList
        list={allItems}
        remove={removeFromList}
        total={calculateIncome}
      />
      {/* <IncomeForm addSource={addToIncome} saveInput={IncomeOnChange} /> */}
    </div>
  );
};

export default IncomePage;
