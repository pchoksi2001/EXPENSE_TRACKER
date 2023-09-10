import React, {useState} from 'react';
import Card from '../UI/Card';
import Expenseitem from './Expenseitem';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import './NewExpenseItem.css';

const NewExpenseItem = (props) =>{
  

    const [filterChange, setFilterChange] = useState('2021');

      const onChangeHandler = (selectedyear) => {
        setFilterChange(selectedyear);
      }

      const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === filterChange);
      });

    return (      
        <Card className='expenses'>
        <ExpensesFilter selected={filterChange} onFilterChange={onChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default NewExpenseItem;

