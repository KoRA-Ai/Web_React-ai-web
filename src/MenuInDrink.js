import React from 'react'
import css from './MenuInSet.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MenuInDrink() {
    let [drinkList, setDrinkList] = useState([])
    
    useEffect(()=>{
        fetch(
          'https://kora-ai.github.io/react-mcdonald_menu/drinkList.json'
        )
          .then(response => response.json())
          .then(data => setDrinkList(data))
        console.log(drinkList)

      }, [])
    
  return (
    <div>
        <table className={css.table}>
            <thead>
                <tr >
                    <th>名稱</th>
                    <th>小杯</th>
                    <th>中杯</th>
                </tr>
            </thead>
        {drinkList.map((item)=>(
            <tbody key={item.id}>
                <tr >
                    <td >{item.name}</td>
                    <td className={css.itemName}>$ {item.small}</td>
                    <td className={css.itemName}>$ {item.mid}</td></tr>
            </tbody>
        ))} 
        
        </table>
    </div>
  )
}
