import React from 'react';
import { motion } from 'framer-motion';

const WorkItems = ({ item }) => {
  return (
    <motion.div
      className="work__card"
      key={item.id}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }} 
    >
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="work__button"
      >
        See More <i className="uil uil-arrow-right work__button-icon"> </i>
      </a>
    </motion.div>
  );
};

export default WorkItems;
