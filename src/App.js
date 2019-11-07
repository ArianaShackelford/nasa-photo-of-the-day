import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import ImgCard from './components/ImgCard';
import Footer from './components/Footer';

function App() {

  const [spaceImg, setSpaceImg] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6emsdHAtuJryQFEblC7LfZ1gi7lo9Dfgb4x6pHN3')
    .then(response => {
      console.log(response.data)
      setSpaceImg(response.data)
    })
    .catch(error => {
      console.log('The data was not returned', error)
    })
  },[])

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
    <ImgCard spaceImg={spaceImg}/>
    <Footer spaceImg={spaceImg}/>
      
    </div>

  );
}

export default App;
