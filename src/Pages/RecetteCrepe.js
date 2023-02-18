import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import MainEtape from '../components/MainEtape/MainEtape';
import { motion } from "framer-motion"

const RecetteCrepe = () => {

  return (
    
    <div>
<motion.div animate={{x: 50}} transition={{duration:0.5}}>
      <Header />
      <Main />
      <MainEtape />
      </motion.div>
    </div>
    
  );
};
export default RecetteCrepe;


