import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import ImgCard from './components/ImgCard';
import Footer from './components/Footer';
import styled from 'styled-components';

const Content = styled.div`
 width:100%;
 background: black;
 color: white
 display:flex;
 flex-direction: column;
 
`;

const PageTitle = styled.h1`
  padding: 50px;
`;


function App() {

  const [spaceImg, setSpaceImg] = useState([])
  const [date, setDate] = useState('')
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=6emsdHAtuJryQFEblC7LfZ1gi7lo9Dfgb4x6pHN3&date=${date}`)
    .then(response => {
      console.log(response.data)
      setSpaceImg(response.data)
    })
    .catch(error => {
      console.log('The data was not returned', error)
    })
  },[])

  return (
    <>
      <Content className="App">
        <PageTitle>Astronomy Picture of the Day</PageTitle>
        <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <ImgCard spaceImg={spaceImg}/>
      <Footer spaceImg={spaceImg}/>
        
      </Content>
    </>
  );
}

export default App;
