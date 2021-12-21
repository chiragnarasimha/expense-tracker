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
      {props.expenses.map(({ id, title, amount, date }) => {
        return <ExpenseItem date={date} title={title} amount={amount} />;
      })}
    </div>
  );
}

export default Expenses;
