import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// ------------variants-------------
const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      // when takes beforeChildren and afterChildren it means when to start the animation
      when: "beforeChildren",
      // staggerChildren to make a delay in between children 
      staggerChildren: 0.4
    }
  }
}
const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

  }
}
// ------------variants-------------end


const Order = ({ pizza }) => {

  const [showTitle, setShowTitle] = useState(true)
  setTimeout(() => {
    setShowTitle(false)
  }, 4000);



  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {
          showTitle &&
          <motion.h2
            exit={{ scale: 350 }}
            transition={{ duration: 2.8, type: "tween" }}
          >Thank you for your order
            <span role="img" aria-label="4">😊</span>
          </motion.h2>

        }
      </AnimatePresence>

      <motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map(topping => <motion.div key={topping}>{topping}</motion.div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;