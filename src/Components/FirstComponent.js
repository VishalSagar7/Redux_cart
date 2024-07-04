import React from 'react'
import {useSelector} from 'react-redux'

const FirstComponent = () => {

    const cart = useSelector(store => store.items);
    console.log(cart);
  return (
    <div className='h-1/2 w-1/2 border-2 border-black'>
      <h1>First component</h1>
      <div className='w-full flex flex-wrap gap-[5px]'>
        {
            cart.map((item)=> (
                <div className='border border-black p-[3px]'>
                    <h1>{item.item}</h1>
                    <h1>{item.model}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default FirstComponent;
