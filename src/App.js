import './App.css';

import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import Calculator from './components/Calculator/Calculator';

const App = () => {
  return (
    <div className="app">
      <DropDownMenu />
      <Calculator />
    </div>
  );
};

export default App;
