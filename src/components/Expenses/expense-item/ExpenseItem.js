import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../expense-date/ExpenseDate'
import Card from '../../UI/card/Card';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;