import React from 'react'
import css from './MenuInSet.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
export default function MenuInSet() {
    let [showMorning, setShowMorning] = useState(true);
    let [showNight, setShowNight] = useState(false);
    
    const handleShowMor=()=>{
      setShowMorning(true)
      setShowNight(false)
    }
  
    const handleShowNight=()=>{
      setShowMorning(false)
      setShowNight(true)
    }
    let [morList, setMorList] = useState([])
    let [nightList, setNightList] = useState([])
   //get data
   useEffect(() => {
      fetch(
        'https://kora-ai.github.io/react-mcdonald_menu/morningSet.json'
      )
        .then(response => response.json())
        .then(data => setMorList(data))
      console.log(morList)

      fetch(
        'https://kora-ai.github.io/react-mcdonald_menu/nightSet.json'
      )
        .then(response => response.json())
        .then(data => setNightList(data))
      console.log(nightList)
    }, [])


  
    return (
     <div >
         
      <div className={css.listBtnDiv}>
        <button onClick={handleShowMor} className={css.listBtn}>早餐</button>
        <button onClick={handleShowNight} className={css.listBtn}>全餐</button>
      </div>
      
      <div >
  
      {showMorning&& 
        <table className={css.table}>
          <thead>
            <tr >
              <th>主餐</th>
              <th>單點</th>
              <th>搭配 $38指定飲料</th>
              <th>搭配經典美式咖啡</th>
              <th>薯餅配餐</th>
              <th>雞塊配餐</th>
            </tr>
          </thead>
          {morList.map((item)=>(
            <tbody key={item.id}>
                <tr >
                  <td>{item.name}</td>
                  <td className={css.itemName}>$ {item.single}</td>
                  <td className={css.itemName}>$ {item.set1Price}</td>
                  <td className={css.itemName}>$ {item.set2Price}</td>
                  <td className={css.itemName}>$ {item.set3Price}</td>
                  <td className={css.itemName}>$ {item.set4Price}</td>
                </tr>
            </tbody>
                
          ))} 
          
        </table>}
       </div>
  
      {showNight &&
        <div>
        <table className={css.table}>
            <thead>
                <tr >
                    <th>名稱</th>
                    <th>附餐內容</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td className={css.item3Name}>A<br/>經典配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、中薯</td></tr>
                <tr >  
                    <td className={css.item3Name}>B<br/>清爽配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、四季沙拉 (大)</td></tr>
                <tr > 
                    <td className={css.item3Name}>C<br/>勁脆配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、麥脆雞腿</td></tr>

                <tr >  
                    <td className={css.item3Name}>D<br/>炫冰配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、小薯、冰炫風</td></tr>
                <tr >  
                    <td className={css.item3Name}>E<br/>豪吃配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、小薯、麥克雞塊 (6塊)</td></tr>
            </tbody>
            <tfoot>
                <tr >   
                    <td className={css.item3Name}>F<br/>地瓜配餐</td>
                    <td className={css.item3Name}>$38 冷/熱飲、金黃地瓜條</td></tr>
            </tfoot>
        </table>
        <br/><hr/><br/>
        <table className={css.table}>
        <thead>
          <tr >
            <th>主餐</th>
            <th>單點</th>
            <th>A<br/>經典配餐</th>
            <th>B<br/>清爽配餐</th>
            <th>C<br/>勁脆配餐</th>
            <th>D<br/>炫冰配餐</th>
            <th>E<br/>豪吃配餐</th>
            <th>F<br/>地瓜配餐</th>
          </tr>
        </thead>

        {nightList.map((item)=>(
          <tbody key={item.id}>
              <tr >
                <td>{item.name}</td>
                <td className={css.item2Name}>$ {item.single}</td>
                <td className={css.item2Name}>$ {item.set1Price}</td>
                <td className={css.item2Name}>$ {item.set2Price}</td>
                <td className={css.item2Name}>$ {item.set3Price}</td>
                <td className={css.item2Name}>$ {item.set4Price}</td>
                <td className={css.item2Name}>$ {item.set5Price}</td>
                <td className={css.item2Name}>$ {item.set6Price}</td>
              </tr>
          </tbody>
              
        ))} 
        
      </table> 
      </div>}
      
   
  </div>
    )
}
