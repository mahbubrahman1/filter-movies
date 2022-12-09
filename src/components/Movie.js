import React from 'react'
import { motion } from 'framer-motion'

const Movie = ({ popular }) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2>{popular.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + popular.backdrop_path} alt="" />
        </motion.div>
    )
}

export default Movie