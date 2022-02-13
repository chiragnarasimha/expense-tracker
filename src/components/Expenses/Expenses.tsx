import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

/**
 * Will take all the details of expenses and them display them on the page
 * @param props.expenses Object that contains all the details of the expenses
 * @constructor
 */
const Expenses = (props: {
  expenses: { id: string; title: string; amount: number; date: Date }[];
}) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expenseItem: {
      amount: number;
      date: Date;
      id: string;
      title: string;
    }) => {
      return expenseItem.date.getFullYear().toString() === filteredYear;
    }
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

// /**
//  * The below function is an explanation of what the .map is doing
//  * @param props
//  * @constructor
//  */
// function ExpensesForLoop(props: {
//   expenses: { id: string; title: string; amount: number; date: Date }[];
// }) {
//   let expenseObject = [];
//   for (let i = 0; i < props.expenses.length; i++) {
//     expenseObject.push(
//       <ExpenseItem
//         date={props.expenses[i].date}
//         title={props.expenses[i].title}
//         amount={props.expenses[i].amount}
//       />
//     );
//   }
//   return <div className="expenses">{expenseObject}</div>;
// }
