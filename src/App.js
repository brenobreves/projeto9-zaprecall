import React, { useState } from 'react';
import styled from 'styled-components';
import Logoimg from './assets/logo.png'
import Playimg from './assets/seta_play.png'
import Turnimg from './assets/seta_virar.png'
function App() {
  const [cards, setCards] = useState([
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ])
  const [cardsResp, setCardsResp] = useState([])
  const [cardSel, setCardSel] = useState(-1);
  function respCard(p){
    if(cardSel === -1){
    setCardSel(p); 
    return;    
    }
  }
  return (
      <>
      <SCLogo>
        <img src={Logoimg}/>
        ZapRecall
      </SCLogo>

      <SCContainerCards>
        {cards.map( (card,index) => <SCCard key={card.question} sel={index === cardSel ? true : false}>
          {index === cardSel ? card.question : `Pergunta ${index+1}`}
          <img src={index == cardSel ? Turnimg : Playimg} onClick={()=>respCard(index)}/>
          </SCCard>)}
      </SCContainerCards>

      <SCFooter>{cardsResp.length}/{cards.length} CONCLUÍDOS</SCFooter>
      </>
  );
}

export default App;

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
  color: #333333;
  display:flex;
  justify-content:space-between;
  align-items:${(props) => props.sel ? "top" :"center"};
  padding-left:15px;
  padding-right:15px;
  padding-top:${(props) => props.sel ? "18px" :"0px"};
  img{
    width: ${(props) => props.sel ? "30px" :"auto"};
    height:${(props) => props.sel ? "20px" :"auto"};
    padding-top:${(props) => props.sel ? "82px" :"0px"};
  }
`;

const SCContainerCards = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  overflow-y:scroll;
  gap:25px;
  align-items:center;
  margin-bottom:95px;
`;

const SCLogo = styled.div`
  width:  100%;
  height: 100%;
  background-color: #FB6B6B;
  display: flex;
  justify-content:center;
  margin-top:42px;
  img{
    width:52px;
    height:60px;
  }
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
  gap:20px;
  margin-bottom:50px;
`;

const SCFooter = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  bottom:0;
  background-color: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  display:flex;
  align-items:center;
  justify-content: center;
`;