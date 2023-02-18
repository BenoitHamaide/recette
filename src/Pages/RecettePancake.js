import React from 'react';
import HeaderPancake from '../components/HeaderPancake/HeaderPancake';
import MainEtapePancake from '../components/MainEtapePancake/MainEtapePancake';
import MainPancake from '../components/MainPancake/MainPancake';
import Navigation from '../components/Navigation';

const RecettePancake = () => {
  return (
    <div>
      <Navigation />
      <HeaderPancake />
      <MainPancake />
      <MainEtapePancake />
    </div>
  );
};

export default RecettePancake;