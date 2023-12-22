import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);

    const {expenses, Currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (newBudget) => {
        if(newBudget > 20000) {
            alert("The value cannot exceed the limit value of 20000£")
            return;
        }

        if(newBudget < totalExpenses) {
            alert("you cannot reduce the budget value lower than the expending");
            return;
        }
        dispatch({ type: 'SET_BUDGET', payload: Number(newBudget)});
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input type="number" step="10" value={budget} onChange={(e) => handleBudgetChange(e.target.value)}></input>
</div>
    );
};
export default Budget;
