'use client'

import React,{ useState } from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
    const [menuopen,setMenuOpen]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a href='/' className={styles.title}>KNOW I</a>
        
        <div  className={styles.menu}>
            <img 
            className={styles.menuBtn}
              src={
                menuopen 
                ? "/closeIcon.png"
                : "/menuIcon.png"
              }
             onClick={()=>setMenuOpen(!menuopen)}
             />
            <ul className={`${styles.menuItems} ${menuopen && styles.menuOpen}`
        }onClick={()=>setMenuOpen(false)}>
                <li>
                    <a href='#'>HOME</a>
                </li>
                <li>
                    <a href='#aboutus'>ABOUT US</a>
                </li>
                <li>
                    <a href='#events'>EVENTS</a>
                </li>
                <li>
                    <a href='#teams'>TEAMS</a>
                </li>
                
            </ul>
        </div>
 
    </nav>
  )
}
