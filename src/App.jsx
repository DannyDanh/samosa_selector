import './App.css';
import { useState } from 'react';
import Boost from './components/Boost';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [boost, setBoost] = useState('No boost');

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(2);
      setBoost('Double Stuffed 👯‍♀️');
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(5);
      setBoost('Party Pack 🎉');
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(10);
      setBoost('Full Feast 👩🏽‍🍳');
    }
  }



  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <h2>Current boost: {boost}</h2>
        <img className="samosa" onClick={updateCount} src='https://static.vecteezy.com/system/resources/previews/050/018/866/non_2x/fresh-tasty-samosa-cutout-isolated-on-transparent-background-ideal-for-product-banners-social-media-posts-and-creative-cover-designs-free-png.png'/>
      </div>
      <div className='container'>
        <Boost title='Double Stuffed 👯‍♀️' description='	2x per click' cost='10' action={buyDoubleStuffed}/>
        <Boost title='Party Pack 🎉' description='5x per click' cost='100' action={buyPartyPack}/>
        <Boost title='Full Feast 👩🏽‍🍳' description='10x per click' cost='1000' action={buyFullFeast}/>
      </div>
    </div>
  )
}

export default App