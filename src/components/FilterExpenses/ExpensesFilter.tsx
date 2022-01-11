import React, { ChangeEvent } from "react";
import "./ExpensesFilter.css";

/**
 * This components will allow the users to filter their expenses based on the input year
 * @param props.onChangeFilter Will allow the value selected by the user to be passed to the parent element
 * @constructor
 */
const ExpensesFilter = (props: {
  onChangeFilter: Function;
  selectedYear: string;
}) => {
  const dropdownChangeHandler = (event: ChangeEvent<{ value: string }>) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
