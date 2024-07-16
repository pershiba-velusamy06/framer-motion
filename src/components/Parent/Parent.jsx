import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './parent.css'
const Parent = () => {
  const navigate = useNavigate()
  return (
    <div  className='buttonWrapper'>
      <motion.button
        onClick={() => navigate('/Basics')}
     
        className='example-button'>Basics</motion.button>
      <motion.button    
        onClick={() => navigate('/Gestures')}
        className='example-button'>Gesture</motion.button>
      <motion.button  
        onClick={() => navigate('/AnimationControls')}
        className='example-button'>AnimationControls</motion.button>
      <motion.button  
        onClick={() => navigate('/ViewBasedAnimations')}
        className='example-button'>ViewBasedAnimations</motion.button>
      <motion.button  
        onClick={() => navigate('/ScrollAnimations')}
        className='example-button'>ScrollAnimations</motion.button>
    </div>
  )
}

export default Parent
