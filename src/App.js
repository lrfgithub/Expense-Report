import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Printer',
    amount: 150,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New Dining Table', amount: 1000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Fitness',
    amount: 300,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Car',
    amount: 9000,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;