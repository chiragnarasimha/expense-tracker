import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

/**
 * Will take all the details of expenses and them display them on the page
 * @param props.expenses Object that contains all the details of the expenses
 * @constructor
 */
function Expenses(props: {
  expenses: { id: string; title: string; amount: number; date: Date }[];
}) {
  return (
    <div className="expenses">
      {props.expenses.map((mapItem) => {
        return (
          <ExpenseItem
            date={mapItem.date}
            title={mapItem.title}
            amount={mapItem.amount}
          />
        );
      })}
    </div>
  );
}

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
