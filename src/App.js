import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section3 from './components/Section3/Section3';
import BottomNav from './components/Footer/BottomNav';

function App() {
  const [searchItems, setSearchItems] = useState([]);
  const [bhktype, setBHKType] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
      <Header searchItems={searchItems} setSearchItems={setSearchItems} setBHKType={setBHKType} setPrice={setPrice} />
      <Section3 searchItems={searchItems} bhktype={bhktype} price={price} />
      <BottomNav />
    </div>
  );
}

export default App;
