import React from 'react'
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirtComponent from './ThirtComponent';
import FourthComponent from './FourthComponent';
import {useSelector} from 'react-redux'

const Body = () => {

    const cart = useSelector(store => store.items)

    // console.log(cart);

  return (
    <>
    <div className='h-[100px] w-full border-2 border-black'>
        <h1 className=' mt-[25px] ml-[50px] text-2xl font-semibold'>Length of the Cart {cart.length}</h1>
    </div>
     <div className='w-full h-[100vh] bg-gray-300 flex flex-wrap'>
      <FirstComponent/>
      <SecondComponent/>
      <ThirtComponent/>
      <FourthComponent/>
    </div>
    </>
  )
}

export default Body;
