import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";

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
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selectedYear={filteredYear}
      />
      {props.expenses.map(
        (expenseItem: {
          amount: number;
          date: Date;
          id: string;
          title: string;
        }) => {
          return (
            <div key={Math.random()}>
              <ExpenseItem
                key={Math.random()} // In react, when we are creating an item in a list, key is necessary to overcome the warning message -> Each child in a list should have a unique "key" prop
                id={expenseItem.id}
                date={expenseItem.date}
                title={expenseItem.title}
                amount={expenseItem.amount}
              />
            </div>
          );
        }
      )}
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
