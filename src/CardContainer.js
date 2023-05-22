import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

function CardContainer({cards , totalResp , setTotalResp}){
    
    const [cardsResp, setCardsResp] = useState([]);
    const [cardSel, setCardSel] = useState(-1);
    
    return(
        <SCContainerCards>
            {cards.map( (card,index) => <Card key={card.question} card={card} index={index} totalResp={totalResp} setTotalResp={setTotalResp}
            cardsResp={cardsResp} setCardsResp={setCardsResp} cardSel={cardSel} setCardSel={setCardSel}></Card> )}
        </SCContainerCards>
    );
}

export default CardContainer;

const SCContainerCards = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  overflow-y:hidden;
  gap:25px;
  align-items:center;
  margin-bottom:95px;
`;