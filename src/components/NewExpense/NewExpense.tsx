import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

/**
 * This is the parent component that will house the form where the users can enter the new expenses
 * @param props.onAddExpense This is the data extracted from ExpenseForm.tsx and will be fed through to the App.jsx
 * @constructor
 */
const NewExpense = (props: {
  onAddExpense: Function; // This function is used to the expense data back to App.tsx
}) => {
  /**
   * This function is used to extract the data from the ExpenseForm child component to the parent NewExpense Component
   * @param enteredExpenseData This is the data entered by the user for a new expense
   */
  const onSaveExpenseDataHandler = (enteredExpenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };
    console.log(`NewExpense`, expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  /* This use state will allow the user to toggle the new expense form only when the Add New Expense button is pressed  */
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
