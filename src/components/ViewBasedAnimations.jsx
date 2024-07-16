import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
const ViewBasedAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <>
            <div style={{ height: "150vh" }} />
            <motion.div
                style={{ height: "100vh", background: "black" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
        <div
        ref={ref}
        style={{
          height: "100vh",
           background: isInView ? "blue" : "red",
          transition: "2s background",
        }}
      />
        </>
 
  ) 
}

export default ViewBasedAnimations
