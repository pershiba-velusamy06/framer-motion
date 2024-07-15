import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Parent = () => {
    const navigate = useNavigate()
  return (
    <div style={{marginTop:"20px"}}>
        <motion.button
        onClick={()=>navigate('/Basics')}
    style={{
        marginRight:"20px"
    }}
        className='example-button'>Basics</motion.button>
        <motion.button
      onClick={()=>navigate('/Gestures')}
        className='example-button'>Gesture</motion.button>
    </div>
  )
}

export default Parent
