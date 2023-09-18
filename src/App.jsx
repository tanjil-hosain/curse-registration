
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  const [cards, setCards]= useState([]);
  const [totalCost, setTotalCost]= useState(0);
  const [totalCredit, setTotalCredit]= useState(0);
  const [totalHourRemaining, setTotalHourRemaining]= useState(0);

  const  handleBtnCard=( blog )=>{
    console.log(blog)
  const isExist = cards.find(item =>item.id===blog.id);
  let cost = blog.price;
  let totalCreditHour= blog.credit;
  let totalRemaining= 20 - blog.credit;
  

  if (isExist){
    toast.success("You have already selected this curse", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    cards.forEach(item =>{
      cost += item.price;
      totalCreditHour += item.credit;
      totalRemaining = 20 - totalCreditHour;
    })

    if (totalCreditHour > 20){
      toast.success("Total credit  20 is not acceptable", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    else if (totalRemaining < 0){
      toast.success("Sorry total credit below zero(0) are not acceptable", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setCards([...cards, blog]);
      setTotalCost(cost);
      setTotalCredit(totalCreditHour);
      setTotalHourRemaining(totalRemaining);
      
    }

  }

 
  }

  return (
    <>
    <ToastContainer></ToastContainer>
     <Header></Header>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row'>
      <Blogs  handleBtnCard={ handleBtnCard}></Blogs>
      <Card cards={cards} totalCredit={totalCredit} totalHourRemaining={totalHourRemaining} totalCost={totalCost}>

      </Card>
     
      </div>
        
    </>
  )
}

export default App
