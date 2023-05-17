import React from 'react'
import css from './MenuInDiscount.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MenuInDiscount() {
  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL+'50.jpg'} className={css.img}/><br/>
        <img src={process.env.PUBLIC_URL+'89.png'} className={css.img}/>
      </div>
    </div>
  )
}
