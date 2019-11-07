import React from 'react';



const ImgCard = (props) => {
    console.log( props)
    console.log(props.spaceImg.date)
   return (
  <>
   <h4>Date: {props.spaceImg.date}</h4>
   <img src={props.spaceImg.url} alt={props.spaceImg.title}/>
   <h3>{props.spaceImg.title}</h3>
   <p>{props.spaceImg.explanation}</p>
   <h5>Copyright: {props.spaceImg.copyright}</h5>
   </>
       
   );
   
};

export default ImgCard;