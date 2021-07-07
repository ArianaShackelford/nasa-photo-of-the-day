import React from 'react';
import {
     CardImg, CardText, CardBody,
    
  } from 'reactstrap';
  import styled from 'styled-components';

const Card = styled.div`
width: 75%;
color:black;
background:grey;
margin: 100px;
margin-left: 175px;
border-radius:5px;
display:flex;
flex-direction: column;

`;
const CardSubtitle = styled.div`
  font-weight: bold;
  margin: 20px;
  
`;

const CardTitle = styled.h3`
 
`;
const ImgCard = (props) => {
    console.log( props)
    console.log(props.spaceImg.date)
   return (
  <>
  <div>
    <Card>
        <CardSubtitle>{props.spaceImg.date}</CardSubtitle>
        <CardImg top width="100%" src={props.spaceImg.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.spaceImg.title}</CardTitle>
          <CardText>{props.spaceImg.explanation}</CardText>
          <CardSubtitle>{props.spaceImg.copyright}</CardSubtitle>
        </CardBody>
      </Card>
  </div>
   {/* <h4>Date: {props.spaceImg.date}</h4>
   <img src={props.spaceImg.url} alt={props.spaceImg.title}/>
   <h3>{props.spaceImg.title}</h3>
   <p>{props.spaceImg.explanation}</p>
   <h5>Copyright: {props.spaceImg.copyright}</h5> */}
   </>
       
   );
   
};

export default ImgCard;