import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

/**
 * This component is to display the Expense Items on the page
 * @param props.date Date - Date of expense
 * @param props.title string - Title of the Expense
 * @param props.amount number - Amount spent for this Expense
 * @constructor
 */
function ExpenseItem(props: { date: Date; title: string; amount: number }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
