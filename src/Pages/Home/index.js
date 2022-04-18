import React from 'react'
import TopFold from '../../Components/topfold/topfold';
import Expense from '../../Components/expense-list/expense-list';
import './home.css'
function Home() {
  return (
    <div className='home'>
    <TopFold/>
    <Expense/>
    </div>
  )
}

export default Home;