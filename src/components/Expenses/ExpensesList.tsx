import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

/**
 * This component will check if the expenses list if empty. If it is empty, then it will display an appropriate error message to the user
 * @param props.expenses Object that contains all the details of the expenses
 * @constructor
 */
const ExpensesList = (props: {
  expenses: { id: string; title: string; amount: number; date: Date }[];
}) => {
  let expensesContent = props.expenses.map(
    (expenseItem: {
      amount: number;
      date: Date;
      id: string;
      title: string;
    }) => {
      return (
        <ExpenseItem
          key={expenseItem.id} // In react, when we are creating an item in a list, key is necessary to overcome the warning message -> Each child in a list should have a unique "key" prop
          // id={expenseItem.id}
          date={expenseItem.date}
          title={expenseItem.title}
          amount={expenseItem.amount}
        />
      );
    }
  );

  /* Condition to display the correct error message to the user*/
  if (props.expenses.length === 0) {
    return (
      <h2 key={Math.random()} className={"expenses-list__fallback"}>
        No Expense Found!
      </h2>
    );
  } else {
    return <ul className={"expenses-list"}>{expensesContent}</ul>;
  }
};

export default ExpensesList;
