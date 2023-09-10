import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredAmount,setEnteredAmount] = useState('');
    const[enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData =  {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(formData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');      
    }


    return <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='text' value={enteredAmount} min='0.02' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onChange}>cancle</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    </div>
}

export default ExpenseForm