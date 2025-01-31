import { motion } from 'framer-motion';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for the title and subtitle
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="skills section"
      id="skills"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={sectionVariants}
    >
      <motion.h2 className="section__title" variants={textVariants}>
        Skills
      </motion.h2>
      <motion.span className="section__subtitle" variants={textVariants}>
        My technical level
      </motion.span>

      <motion.div
        className="skills__container container grid"
        variants={sectionVariants}
      >
        <Frontend />
        <Backend />
      </motion.div>
    </motion.section>
  );
};

export default Skills;
