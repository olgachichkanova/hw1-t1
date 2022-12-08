import ShopItemFunc from "./components/ShopItemFunc"
import './App.css';
const data = require('./data/data')

function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={data.item} />
    </div>
  </div>
  );
}

export default App;
