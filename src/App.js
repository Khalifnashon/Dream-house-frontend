import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewMore from './Components/ViewMore';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


// import Search from './Components/Search';

function App() {
  
  const [houses, setHouses] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then(res => res.json())
      .then((data) => setHouses(data))
  }, [])

  // const displayedHouses = houses.filter((house) => {
  //   return house.name.toLowerCase().includes(searchTerm.toLowerCase())
  // });
   
  return (

    
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Hero />
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
        <Routes>
          <Route path="/" element={<Home houses={houses}/>} />
          <Route path="/form" element={<Form houses={houses} setHouses={setHouses} />}/>
          <Route path="/house/:id" element={<ViewMore />} />
        </Routes>
        
      </div>
    </BrowserRouter>


  );
}

export default App;