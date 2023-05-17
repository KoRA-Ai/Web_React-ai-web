import React from 'react'
import css from './Home.module.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className={css.app}>
        <div className={css.ul}>
            <ul >
                <li>
                    <Link to="/mcd-menu">McDonald Menu</Link>
                </li>
            </ul>
        </div>
  
    </div>
  )
}
