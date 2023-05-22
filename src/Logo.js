import styled from 'styled-components';
import Logoimg from './assets/logo.png';

function Logo(){
    return(
        <SCLogo>
            <img src={Logoimg}/>
            ZapRecall
        </SCLogo>
    );
}

export default Logo;

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