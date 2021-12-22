import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

/**
 * This component is to display the Expense Items on the page
 * @param props.date Date - Date of expense
 * @param props.title string - Title of the Expense
 * @param props.amount number - Amount spent for this Expense
 * @constructor
 */
const ExpenseItem = (props: {
  id: string;
  date: Date;
  title: string;
  amount: number;
}) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
