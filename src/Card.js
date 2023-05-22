import React, { useState } from 'react';
import styled from 'styled-components';
import Playimg from './assets/seta_play.png';
import Turnimg from './assets/seta_virar.png';
import Erroimg from './assets/icone_erro.png';
import Quaseimg from './assets/icone_quase.png';
import Acertoimg from './assets/icone_certo.png';
import BContainer from './BContainer';

function Card({card , index , totalResp , setTotalResp , cardsResp , setCardsResp , cardSel , setCardSel}){
    
    const [showAns, setShowAns] = useState(false);
    
    function respCard(p){
      if(cardSel === -1 && !cardsResp[p] && cardsResp[p]!== 0){
        setCardSel(p); 
      return;     
      }
      if(cardSel === p){
        setShowAns(true);
      }   
    }
    
    return(
        <SCCard 
          data-test="flashcard"
          hideImg={showAns && index === cardSel} 
          sel={index === cardSel ? true : false}
          respondido={!cardsResp[index] ? false : true} 
          colorResp={cardsResp[index]}>

          <span data-test="flashcard-text">{index !== cardSel ? `Pergunta ${index+1}` : showAns ? card.answer : card.question}</span>

          {showAns && cardSel === index ? 
          <BContainer cardsResp={cardsResp} totalResp={totalResp} cardSel={cardSel} setCardsResp={setCardsResp} setCardSel={setCardSel}
          setTotalResp={setTotalResp} setShowAns={setShowAns}></BContainer>:""}
          
          <img data-test="play-btn turn-btn no-icon partial-icon zap-icon" src={index == cardSel ? Turnimg : !cardsResp[index] ? Playimg : cardsResp[index] === "#FF3030" ? Erroimg : cardsResp[index] === "#FF922E" ? Quaseimg : Acertoimg}
          onClick={()=>respCard(index)}/>        
        </SCCard>
    );
}

export default Card;

const SCCard = styled.div`
  width: 300px;
  height: ${(props) => props.sel ? "112px" : "65px"};
  background: ${(props) => props.sel ? "#FFFFD4" : "#FFFFFF"};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color:${(props) => !props.respondido ? "#333333" : props.colorResp} ;
  display:flex;
  flex-direction:${(props) => props.hideImg ? "column" : "row"};
  justify-content:space-between;
  align-items:${(props) => props.sel ? "top" :"center"};
  padding-left:15px;
  padding-right:15px;
  padding-top:${(props) => props.sel ? "18px" :"0px"};
  img{
    width: ${(props) => !props.sel ? "auto" : (props) => props.hideImg ? "0px" : "30px"};
    height:${(props) => !props.sel ? "auto" : (props) => props.hideImg ? "0px" : "20px"};
    margin-top:${(props) => !props.sel ? "0px": (props) => props.hideImg ? "0px" :"82px"};
  }
  text-decoration:${(props) => props.respondido ? "line-through" : "none"};
`;