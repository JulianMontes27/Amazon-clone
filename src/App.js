import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <Header/>
          <Home/>
        </div>}
      />

      <Route path='checkout' element={
        <>
          <Header/>
          <Checkout/>

        </>
        }
      />

    </Routes>
  );
}

export default App;


// OG way:

/*<div className="app">
  <Header/>
  <Home/>
</div>*/