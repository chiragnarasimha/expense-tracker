import React, { useState, ChangeEvent, FormEvent } from "react";
import "./ExpenseForm.css";

/**
 * This component will render the add new expense form on the page
 * @param props.onSaveExpenseData This prop is used to pass the expense data from the user to the NewExpense parent
 * component
 * @constructor
 */
const ExpenseForm = (props: {
  onSaveExpenseData: Function;
  onCancel: React.MouseEventHandler;
}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  /**
   * Change the title in the expense form
   * @param event ChangeEvent Handler
   */
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  /**
   * Change the amount in the expense form
   * @param event ChangeEvent Handler
   */
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  /**
   * Change the date in the expense form
   * @param event ChangeEvent Handler
   */
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  /**
   * Handler to help with form submission
   * @param event FormEvent Handler
   */
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    /* Clear the form data after the user has input their details */
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label>Title</label>
          <input
            type={"text"}
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={"new-expense__control"}>
          <label>Amount</label>
          <input
            type={"number"}
            value={enteredAmount}
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={"new-expense__control"}>
          <label>Date</label>
          <input
            type={"date"}
            value={enteredDate}
            min={"2019-01-01"}
            max={new Date().toLocaleDateString()}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={"new-expense__actions"}>
        <button type={"button"} onClick={props.onCancel}>
          Cancel
        </button>
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
