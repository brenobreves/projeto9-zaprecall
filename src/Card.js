import React, { useState } from 'react';
import styled from 'styled-components';
import Playimg from './assets/seta_play.png';
import Turnimg from './assets/seta_virar.png';
import Erroimg from './assets/icone_erro.png';
import Quaseimg from './assets/icone_quase.png';
import Acertoimg from './assets/icone_certo.png';
function Card({card , index , totalResp , setTotalResp}){
    const [cardsResp, setCardsResp] = useState([]);
    const [cardSel, setCardSel] = useState(-1);
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
    function finalizaCard(p){
        const newCardsResp = [...cardsResp];
        const newTotalResp = totalResp + 1;
        newCardsResp[cardSel] = p;
        setCardsResp(newCardsResp);
        setCardSel(-1);
        setTotalResp(newTotalResp);
        setShowAns(false);   
    }
    
    return(
        <SCCard 
            hideImg={showAns && index === cardSel} 
            sel={index === cardSel ? true : false}
            respondido={!cardsResp[index] ? false : true} 
            colorResp={cardsResp[index]}>

            {index !== cardSel ? `Pergunta ${index+1}` : showAns ? card.answer : card.question}

            {showAns && cardSel === index ? 
            <SCButContainer>
              <SCRedbut onClick={()=>finalizaCard("#FF3030")}>Não<br></br>lembrei</SCRedbut>
              <SCOrgbut onClick={()=>finalizaCard("#FF922E")}>Quase não lembrei</SCOrgbut>
              <SCGrebut onClick={()=>finalizaCard("#2FBE34")}>Zap!</SCGrebut>
            </SCButContainer> :""}
          
            <img src={index == cardSel ? Turnimg : !cardsResp[index] ? Playimg : cardsResp[index] === "#FF3030" ? Erroimg : cardsResp[index] === "#FF922E" ? Quaseimg : Acertoimg} onClick={()=>respCard(index)}/>
        </SCCard>
    );
}

export default Card;

const SCButContainer = styled.div`
  display:flex;
  flex-direction: row;
  gap:8px;
  justify-content:center;
  align-items:center;
`;

const SCRedbut = styled.button`
  width: 85.17px;
  height: 37.17px;
  background-color: #FF3030;
  border-radius: 5px;
  border:none;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`;
const SCOrgbut = styled.button`
  width: 85.17px;
  height: 37.17px;
  background-color: #FF922E;
  border-radius: 5px;
  border:none;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`;
const SCGrebut = styled.button`
  width: 85.17px;
  height: 37.17px;
  background-color: #2FBE34;
  border-radius: 5px;
  border:none;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`;

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
    &&:hover{
        cursor: pointer;
    }
  }
  text-decoration:${(props) => props.respondido ? "line-through" : "none"};
`;