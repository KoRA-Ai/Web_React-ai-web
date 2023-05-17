import React from 'react'
import css from './MenuInSet.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MenuInDesset() {
    let [iceList, setIceList] = useState([])
    let [dessertList, setDessertList] = useState([])
    
    useEffect(()=>{
        fetch(
          'https://kora-ai.github.io/react-mcdonald_menu/iceList.json'
        )
          .then(response => response.json())
          .then(data => setIceList(data))
        console.log(iceList)
  
        fetch(
          'https://kora-ai.github.io/react-mcdonald_menu/dessertList.json'
        )
          .then(response => response.json())
          .then(data => setDessertList(data))
        console.log(dessertList)
      }, [])
    
    return(
        <div>
            <table className={css.table}>
                <thead>
                    <tr >
                        <th>名稱</th>
                        <th>價錢</th>
                    </tr>
                </thead>
            {dessertList.map((item)=>(
                <tbody>
                    <tr >
                        <td className={css.item3Name}>{item.name}</td>
                        <td className={css.item3Name}>$ {item.single}</td></tr>
                </tbody>
            ))} 
            
            </table>
            <br/><hr/><br/>

            <table className={css.table}>
                <thead>
                    <tr >
                        <th>名稱</th>
                        <th>價錢</th>
                    </tr>
                </thead>
            {iceList.map((item)=>(
                <tbody>
                    <tr >
                        <td className={css.item3Name}>{item.name}</td>
                        <td className={css.item3Name}>$ {item.single}</td></tr>
                </tbody>
            ))} 
            
            </table>
        </div>
    )
  
}
