import React from 'react';
import { motion } from 'framer-motion';


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
      when: "beforeChildren",
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
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map(topping => <motion.div key={topping}>{topping}</motion.div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;