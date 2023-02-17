// == Import
import Header from '../Header/Header';
import Main from '../Main/Main';
import MainEtape from '../MainEtape/MainEtape'
import './styles.scss';

// == Composant
function App() {
  return ( <
    div className = "app" >
    <Header / >
    <Main / >
    <MainEtape / >
    </div>
  );
}

// == Export
export default App;
