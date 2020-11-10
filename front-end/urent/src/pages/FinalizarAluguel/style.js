import style from 'styled-components';

export const Header = style.header`
    background-color: #2466E2;
    height: 64px;
    width: 100%;
    border-bottom: 1px solid #56CCF2;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    margin-bottom: 20px;
`;

export const HeaderNav = style.nav`
    /* background-color: chocolate; */
    margin-left: 50%;
    justify-self: left;
`;

export const HeaderTitle = style.div`
    justify-self: center;
`;

export const Section = style.div`
    background-color: #2466E2;
    height: 416px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const AnuncioContainer = style.div`
    width: 80%;
    padding: 0 40px;
    margin: 60px auto;
    margin-top: 0;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
`;

export const AnuncioContainerFooter = style.div`
    background: #E6E6F0;
    width: 100%;
    padding: 0 40px;
    margin-top: 30px;
    margin-left: -40px;
    border: 1px solid #C4C4C4;
    border-radius:  0px 0px 15px 15px;
`;

export const TittleAnuncio = style.div`
    height: 40px;
    width: 100%;
    font-size: 26px;
    color: #6A6180;
    margin-top: 10px;
    @media screen and (max-width: 595px){
        height: 60px;
        }
`;

export const ContentInfoAnuncio = style.div` 
    height: auto;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    @media screen and (max-width: 800px){
        display: block;
        }
`;

export const DivisionInfo = style.div`
// background: red;
    height: 380px;
    width: 50%;
    display: block;
    @media screen and (max-width: 800px){
        width: 100%;
        height: auto;
        }
`;

export const SectionInfo = style.div`
    // background-color: blue;
    heigth: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SectionInfoOver = style.div`
    // background-color: blue;
    heigth: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentImageAnuncio = style.img`
    heigth: 400px;
    width: 400px;
    margin: 20px 20px;
    border-radius: 15px;
`;

export const TittleLineInfo = style.div`
    width: 80%;
    font-size: 20px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
`;

export const ContentLineInfo = style.div`
    heigth: 400px;
    width: 100%;
    // margin-left: 5%;
    margin-top: 3px;
    border-radius: 5px;
    border: 1px solid #C4C4C4;
    padding-bottom: 5px;
    padding-left: 15px;
`;

export const ParagrafoInfo = style.p`
    font-size: 18px;
`;

export const ParagrafoBInfo = style.div`
    font-size: 18px;
    font-weight: bolder;
`;

export const ContentInfoBuy = style.div`
    width: 80%;
    font-size: 20px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
    display: flex;
    justify-content: center;
`;

export const TittleBuy = style.div`
    width: 80%;
    font-size: 18px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
`;

export const ContentPreco = style.div`
    heigth: 400px;
    width: 100%;
    display: block;
    border-radius: 5px;
    padding-bottom: 10px;
`;

export const ContentItensFooter = style.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 750px){
        display: block;
    }
`;

export const ContentButton = style.div`
    heigth: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px){
        display: block;
    }
`;

export const Button = style.button`
    background-color: #0752DE;
    border: 1px solid #0752DE;
    border-radius: 15px;
    height: 60px;
    margin-top: 5px;
    width: 240px;
    margin-left: 5px;
    color: #fff;
    transition: margin-bottom .1s;
    &:hover {
      background-color: #fff;
      border: 1px solid #0752DE;
      color:  #0752DE;
      margin-bottom: 3px;
    }
`;

export const ContentFooter = style.div`
    // width: 20%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10%;
    justify-self: center;
    display:block;
`;

export const AvaliacaoAnuncio = style.div`
    font-size: 26px;
    text-align: left;
    color: #6A6180;
    @media screen and (max-width: 595px){
        font-size: 20px;
        }
`;