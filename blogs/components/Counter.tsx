'use client'

import { useState } from "react";


export default function Counter() {

var[count, setCount] = useState(0)  

const incrementHandler = () =>
{
  setCount(count+1)
    console.log( count)
}

const decrementHandler = () =>
{
  setCount(count-1)
    console.log(count)
}

  return (
    <>


<button onClick={incrementHandler} className="bg-green-400 px-4 py-2 cursor-pointer hover:bg-lime-500 text-3xl font-bold" > +</button>
      <h2 className="text-5xl font-bold"> {count} </h2>
     
      <button onClick={decrementHandler} className="bg-green-400 px-4 py-2 cursor-pointer hover:bg-lime-500 text-3xl font-bold" > - </button>
    </>
  );
}
