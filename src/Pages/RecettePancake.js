import React from 'react';
import HeaderPancake from '../components/HeaderPancake/HeaderPancake';
import MainEtapePancake from '../components/MainEtapePancake/MainEtapePancake';
import MainPancake from '../components/MainPancake/MainPancake';


const RecettePancake = () => {
  return (
    <div>
      <HeaderPancake />
      <MainPancake />
      <MainEtapePancake /> 
    </div>
  );
};

export default RecettePancake;
