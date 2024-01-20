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
    <div>
      <h1> Welcome to My blog gallery ssg</h1>
      <div>
      {
        state.map((e) => (
            <a key={e.id}>
            <h2> {e.title} &rarr;</h2>
            <img src={e.image} width={250} height={200}/>
            <p>{e.description}</p>
            <h3>${e.price}</h3>
        </a>
        ))
        }
      </div>    
    </div>
  )
}