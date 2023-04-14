
import React from 'react'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route  exact path="/" element={<Home/>}/>
          <Route   path="/general" element={<Categories cat="general"/>}/>
          <Route   path="/business" element={<Categories cat="general"/>}/>
          <Route   path="/entertainment" element={<Categories cat="entertainment"/>}/>
          <Route   path="/health" element={<Categories cat="health"/>}/>
          <Route   path="/science" element={<Categories cat="science"/>}/>
          <Route   path="/sports" element={<Categories cat="sports"/>}/>
          <Route   path="/technology" element={<Categories cat="technology"/>}/>
         
        </Routes>
      </Router>
     
    </>
  );
};

export default App