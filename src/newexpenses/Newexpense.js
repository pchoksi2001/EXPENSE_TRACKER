import './Newexpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const Newexpense = (props) => {

    const[isEditing, setIsEditing] = useState(false);

    const saveExpanseDataHandler = (enteredExpenseData) => {
        const formData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(formData);
        console.log(formData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
        return <div className="new-expense">
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           { isEditing && <ExpenseForm onSaveExpenseData = {saveExpanseDataHandler} onChange={stopEditingHandler} />}
        </div>
}

export default Newexpense