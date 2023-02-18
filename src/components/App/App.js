// == Import

import './styles.scss';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home';
import RecetteCrepe from '../../Pages/RecetteCrepe';
import RecettePancake from '../../Pages/RecettePancake';
import NotFount from '../../Pages/NotFount';

// == Composant
function App() {
  return ( <
    div className = "app" >
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/recette-crepes" element={<RecetteCrepe />}/>
    <Route path="/recette-pancakes" element={<RecettePancake />}/>
    <Route path="*" element={<NotFount />}/>
  </Routes>
</BrowserRouter>
       </div>
  );
}

// == Export
export default App;
