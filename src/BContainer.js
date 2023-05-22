import React from 'react';
import styled from 'styled-components';

function BContainer({cardsResp , totalResp , cardSel , setCardsResp , setCardSel , setTotalResp , setShowAns}){

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
        <SCButContainer>
          <SCRedbut data-test="no-btn" onClick={()=>finalizaCard("#FF3030")}>Não<br></br>lembrei</SCRedbut>
          <SCOrgbut data-test="partial-btn" onClick={()=>finalizaCard("#FF922E")}>Quase não lembrei</SCOrgbut>
          <SCGrebut data-test="zap-btn" onClick={()=>finalizaCard("#2FBE34")}>Zap!</SCGrebut>
        </SCButContainer>
    );
}

export default BContainer;

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