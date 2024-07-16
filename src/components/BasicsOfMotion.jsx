import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
      
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:"50px",
        gap:"10px"
      }}
    >
      <div>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ scale: 0.95 }}
        className='example-button'>hide/show</motion.button>
      </div>
 
      <AnimatePresence  initial={false} mode='wait'>

        {isVisible && <motion.div
          initial={{
            rotate: '0deg',
            scale: 0
          }}
          animate={{
            rotate: '180deg',
            scale: 1
          }}
          exit={{
            rotate: '0deg',
            scale: 0
          }}

          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          style={{
            width: 150, height: 150, background: "black"
          }}>

        </motion.div>}

      </AnimatePresence>

    </div>
  )
}

export default BasicsOfMotion
