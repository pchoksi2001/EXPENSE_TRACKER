import React from "react";

import Expenseitem from "./Expenseitem";
import './ExpenseList.css';


const ExpenseList = (props) => {

    if(props.items.length === 0 ){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

   
        return ( <ul className="expenses-list">
            {props.items.map((product) => 
            (<Expenseitem 
            key={product.id}
            title={product.title} 
            amount={product.amount} 
            date={product.date}
            />
            ))};
        </ul>
        );
}

export default ExpenseList;