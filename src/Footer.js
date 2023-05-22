import styled from 'styled-components';

function Footer({totalResp , qtdCards}){
    return(
        <SCFooter data-test="footer">{totalResp}/{qtdCards} CONCLUÍDOS</SCFooter>
    );
}

export default Footer;

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