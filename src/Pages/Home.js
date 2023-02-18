import React from 'react';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion"
const Home = () => {
  return (
<motion.div animate={{y:20, scale:1}} initial={{scale:0}} transition={{duration:0.6}}>
    <div className='home'>
<h1>A chacun son dessert</h1>
<p>Envi d'un bon dessert, c'est par ici que ça se passe !</p>
<p>Régale toi !</p>
    <Navigation />
   
   </div></motion.div>
      
  );
};

export default Home;
