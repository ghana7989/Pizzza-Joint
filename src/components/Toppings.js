import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ------------variants-------------
const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visibile: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }

  }
}
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  }
}
// ------------variants-------------end

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariant}
      initial="hidden"
      animate="visibile"
      exit="exit"
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.4, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="toppings-button"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;