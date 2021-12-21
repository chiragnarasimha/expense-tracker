import "./ExpenseDate.css";
/**
 * This component is for the date when the expense was incurred
 * @param props Input the date of the expense as a Date object
 * @constructor
 */
function ExpenseDate(props: { date: Date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
    </div>
  );
}
export default ExpenseDate;
