import React from 'react';
import HeaderPancake from '../components/HeaderPancake/HeaderPancake';
import MainEtapePancake from '../components/MainEtapePancake/MainEtapePancake';
import MainPancake from '../components/MainPancake/MainPancake';
import { motion } from "framer-motion"

const RecettePancake = () => {
  return (
    <div>
      <motion.div animate={{x:50}}transition={{duration:0.5}}>
      <HeaderPancake />
      <MainPancake />
      <MainEtapePancake /> 
      </motion.div>
    </div>
  );
};

export default RecettePancake;
