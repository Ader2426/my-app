import React from 'react'
import { motion } from "framer-motion";
const Navigation = () => {
  return (
      <>
    <div className=' navbar bg-light pt-2  shadow-sm rounded  '>
        <motion.h1 animate={{x:100, scale:1}} initial={{scale:0}}  className='logo '>Logo</motion.h1>
        <ul className=''>
            <li ><a href="" >Acceuil</a></li>
            <li><a href="" >Contact</a></li>
            <li><a href="" >A propos</a></li>
            <li><a href="" >Recettes</a></li>
            
        </ul>
        

    </div>
    
    </>
  )
}

export default Navigation