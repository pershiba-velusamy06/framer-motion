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
      <motion.button  
        onClick={() => navigate('/ScrollCarosole')}
        className='example-button'>ScrollCarosole</motion.button>
      <motion.button  
        onClick={() => navigate('/MultiLayerParallax')}
        className='example-button'>MultiLayerParallax</motion.button>
      <motion.button  
        onClick={() => navigate('/CustomKanban')}
        className='example-button'>CustomKanban</motion.button>
      <motion.button  
        onClick={() => navigate('/CustomAnnimation')}
        className='example-button'>CustomAnnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/BasicUseAnimate')}
        className='example-button'>BasicUseAnimate</motion.button>
      <motion.button  
        onClick={() => navigate('/ScrollAnimation')}
        className='example-button'>ScrollAnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/UseInViewnimation')}
        className='example-button'>UseInViewnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/UseScrollBasicAnimation')}
        className='example-button'>UseScrollBasicAnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/UseScrollAdvancedAnimation')}
        className='example-button'>UseScrollAdvancedAnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/UseScrollWithContainerAnimation')}
        className='example-button'>UseScrollWithContainerAnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/AuroraHero')}
        className='example-button'>AuroraHero</motion.button>
      <motion.button  
        onClick={() => navigate('/TextParallaxContentExample')}
        className='example-button'>TextParallaxContentExample</motion.button>
      <motion.button  
        onClick={() => navigate('/RevealLinks')}
        className='example-button'>RevealLinks</motion.button>
      <motion.button  
        onClick={() => navigate('/TiltCard')}
        className='example-button'>TiltCard</motion.button>
      <motion.button  
        onClick={() => navigate('/SwipeCarousel')}
        className='example-button'>SwipeCarousel</motion.button>
      <motion.button  
        onClick={() => navigate('/ShiftingDropDown')}
        className='example-button'>ShiftingDropDown</motion.button>
      <motion.button  
        onClick={() => navigate('/FlyoutLinkFile')}
        className='example-button'>FlyoutLinkFile</motion.button>
      <motion.button  
        onClick={() => navigate('/SlideTabsExample')}
        className='example-button'>SlideTabsExample</motion.button>
      <motion.button  
        onClick={() => navigate('/GridAnimation')}
        className='example-button'>Grid Animation</motion.button>
      <motion.button  
        onClick={() => navigate('/HoverImageLinks')}
        className='example-button'>Hover ImageLinks</motion.button>
      <motion.button  
        onClick={() => navigate('/ClipPathLinks')}
        className='example-button'>ClipPath Links Animation</motion.button>
      <motion.button  
        onClick={() => navigate('/ButtonWrapper')}
        className='example-button'>Button Animation</motion.button>
      <motion.button  
        onClick={() => navigate('/AnimatedHamburgerButton')}
        className='example-button'>Animated Hamburger Button</motion.button>
      <motion.button  
        onClick={() => navigate('/SquishyCardButton')}
        className='example-button'>SquishyCard</motion.button>
      <motion.button  
        onClick={() => navigate('/DragCloseDrawer')}
        className='example-button'>DragCloseDrawerPage</motion.button>
      <motion.button  
        onClick={() => navigate('/FloatingPhoneAnimation')}
        className='example-button'>FloatingPhoneAnimation</motion.button>
      <motion.button  
        onClick={() => navigate('/DragCards')}
        className='example-button'>DragCards Animation</motion.button>
      <motion.button  
        onClick={() => navigate('/BubbleText')}
        className='example-button'>BubbleText Animation</motion.button>
    </div>
  )
}

export default Parent
