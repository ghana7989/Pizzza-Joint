import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }

}
const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        opacity: 1,
        y: "-50%",
        x: "-50%",
        transition: { delay: 0.5 }
    }
}
const Modal = ({ showModal, setShowModal }) => {


    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <motion.div
                        variants={backdropVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="backdrop">
                        <motion.div
                            variants={modalVariants}
                            className="modal">
                            <p>Want to make another order?</p>
                            <Link to="/">
                                <button onClick={() => setShowModal(false)}>Start Again</button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal;