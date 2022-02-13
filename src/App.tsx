import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  /**
   * This function is used to extract the data from the NewExpense Child component and then append that data to the
   * expenses object
   * @param expense The new expense entered by the users.
   */
  const addExpenseHandler = (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => {
    console.log(`App.tsx`, expense);
    setExpenses(
      (
        prevExpense: {
          id: string;
          title: string;
          amount: number;
          date: Date;
        }[]
      ) => {
        return [expense, ...prevExpense];
      }
    );
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
