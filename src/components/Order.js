import React, { useEffect, useState } from 'react';
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
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }

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


const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {

    setTimeout(() => {
      setShowModal(true);
    }, 5000);

  }, [setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2
      >Thank you for your order
            <span role="img" aria-label="4">😊</span>
      </h2>

      <motion.p variants={childrenVariants} >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVariants} >
        {pizza.toppings.map(topping => <motion.div key={topping}>{topping}</motion.div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;