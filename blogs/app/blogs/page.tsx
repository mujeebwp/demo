'use client'

import React from 'react'
import { useEffect, useState } from 'react'

export default function blog() {
  
    const [state, setState] = useState([] as any[]);

  async function getData() {
    const res = await fetch('https://fakestoreapi.com/products?limit=100');
    const data = await res.json();
    setState(data);
  }
  console.log('i am:',state);
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='inline-block '>
      {
        state.map((e) => (


 
 <div className="lg:w-1/4 md:w-1/2 p-2 m-1 w-full inline-block bg-indigo-950 align-top rounded-2xl">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={e.image}/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{e.title}</h2>
          <p className="mt-1">${e.price}</p>
          <p>{e.description}</p>
        </div>
      

  </div>

))}


</div>

   </> )}
