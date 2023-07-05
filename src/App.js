
import { useContext } from 'react';
import './App.css';
import Leftside from './Leftside';
import Rightside from './components/Rightside';
import { AppContext } from './utils/AppProvider';
function App() {
  const {state} = useContext(AppContext)
  console.log("Default Theme is " , state);
  return (
    <div className='App'>
     <Leftside />
     <Rightside />
     </div>
  );
}

export default App;
