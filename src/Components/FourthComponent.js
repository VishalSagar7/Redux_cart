import React from "react";
import {useDispatch} from 'react-redux'
import { removeFromCart } from "../Actions";

const FourthComponent = () => {
    const dispatch = useDispatch()

    const handleRemove =()=> {
        dispatch(removeFromCart())
    }
  return (
    <div className="h-1/2 w-1/2 border-2 border-black relative">
      <h1>Fourth Component</h1>

      <button
        onClick={() => handleRemove()}
        className="h-[50px] bg-red-500 text-white font-semibold active:bg-red-600 w-[400px] border-2 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        Remove Item form cart
      </button>
    </div>
  );
};

export default FourthComponent;
