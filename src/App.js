import './App.css';

import DropDown from './components/DropDown/DropDown';
import Calculator from './components/Calculator/Calculator';

const App = () => {
  return (
    <>
      <DropDown />
      <div className="calculator-container">
        <Calculator />
      </div>
    </>
  );
};

export default App;
