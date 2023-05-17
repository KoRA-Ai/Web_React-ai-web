import React from 'react'
import css from './McdMenu.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import MenuInDesset from './MenuInDesset'
import MenuInSet from './MenuInSet'
import MenuInDrink from './MenuInDrink'
import MenuInDiscount from './MenuInDiscount'
export default function McdMenu() {

  //使用 useState 控制點擊button所出現的內容
  //use 'useState'to handle the content for each button
  const [showSets, setShowSets] = useState(true)
  const [showDst, setShowDst] = useState(false)
  const [showDrink, setShowDrink] = useState(false)
  const [showSpecial, setShowSpecial] = useState(false)
  

  //if click button01, only show the contents of button01
  const handleShowSets=()=>{
    setShowSets(true)
    setShowDst(false)
    setShowDrink(false)
    setShowSpecial(false)
  }

  const handleShowDst=()=>{
    setShowSets(false)
    setShowDst(true)
    setShowDrink(false)
    setShowSpecial(false)
  }

  const handleShowDrink=()=>{
    setShowSets(false)
    setShowDst(false)
    setShowDrink(true)
    setShowSpecial(false)
  }

  const handleShowSpecial=()=>{
    setShowSets(false)
    setShowDst(false)
    setShowDrink(false)
    setShowSpecial(true)
  }


  return (
    <div className={css.app}>
    
      <div className={css.title}>
          <h2>2023麥當勞菜單</h2>
      </div>

      <div className={css.menuNav}>
          <div className={css.btnDiv}>
              <button className={css.btn} onClick={handleShowSets}>
                套餐
              </button>
          </div>
          <div className={css.btnDiv}>
              <button className={css.btn} onClick={handleShowDst}>
                點心
              </button>
          </div>
          <div className={css.btnDiv}>
              <button className={css.btn} onClick={handleShowDrink}>
                飲料
              </button>
          </div>
          <div className={css.btnDiv}>
              <button className={css.btn} onClick={handleShowSpecial}>
                優惠組合
              </button>
          </div>
      </div>
      
      {showSets &&<div className={css.listDiv}>
      <h2>套餐</h2>
          <MenuInSet/>
        </div>
      }

      

      {showDst &&<div className={css.listDiv}>
      <div className={css.title}><h2>點心</h2></div>
        <MenuInDesset/> 
      </div>}

      {showDrink &&<div className={css.listDiv}>
      <div className={css.title}><h2>飲料</h2></div>
        <MenuInDrink/>
      </div>}

      {showSpecial &&<div className={css.listDiv}>
      <div className={css.title}><h2>優惠組合</h2></div>
        <MenuInDiscount/>
      </div>}
    </div>
  )
}
