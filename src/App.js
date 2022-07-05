import React  from "react";
import Nav from "./components/Navbar";
// import NewsCard from "./components/NewsCard";
import Home from './components/home.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './style.css'
import NewsData from './components/NewsData';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav title="News Ape"/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/News" element={<NewsData/>}/>
      {/* <Route path="/News" element={<NewsCard/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}
//api key b1eb4c4a15934003a65165ade75465c7
//GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=b1eb4c4a15934003a65165ade75465c7
export default App;
