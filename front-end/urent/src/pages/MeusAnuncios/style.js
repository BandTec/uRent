import style from 'styled-components';

// HEADER
export const Header = style.header`
    background-color: #2466E2;
    height: 64px;
    width: 100%;
    border-bottom: 1px solid #56CCF2;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
`;
export const HeaderNav = style.nav`
    /* background-color: chocolate; */
    margin-left: 50%;
    justify-self: left;
`;
export const HeaderTitle = style.div`
    justify-self: center;
`;

// HEADER SECUNDARIO
export const Section = style.div`
    background-color: #2466E2; 
    height: 416px;
    width: 100%;
    display: flex;
    // align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const SectionCotent= style.div`
    float: left;
    background-color: #2466E2; 
    height: 40%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    // background: coral;
    margin-top: 60px;
    
`;

export const SectionTextTitle = style.h1`
    /* background-color: cornflowerblue; */
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    width: 361px;
`;
export const SectionTextSubtitle = style.h3`
    /* background-color: coral; */
    font-size: 16px;
    font-weight: 400;
    color: #8CD0F3;
    /* margin: 0; */
    width: 283px;
`;

export const BoxPaiInfo = style.div`
    float: left;
    width: 44%;
    // border: 1px solid #68BEEF;
    display: block;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    backgroud-color: pink;
    
`;


export const ButtonHeader = style.button`
    float: left;
    background-color: #2466E2;
    color: #68BEEF;
    font-size: 25px;
    float: left;
    width: 206px;
    height: 96px;
    border: 1px solid #68BEEF;
    border-radius: 15px;
    margin-right: 10%;
    display: block;
    justify-content: center;
    &:hover {
        background-color: #0752DE;
        border: 1px solid #0752DE;
        color: #ffffff;
        margin-bottom: 3px;
    }
`;

export const BoxInfo = style.div`
    float: left;
    width: 206px;
    height: 96px;
    border: 1px solid #68BEEF;
    border-radius: 15px;
    margin-right: 10%;
    display: block;
    // align-items: center;
    // flex-direction: row;
    justify-content: center;
    // margin-top: 30px;
`;
export const BoxInfoText = style.div`
    float: left;
    width: 206px;
    height: 96px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #68BEEF;
    
`;

export const BoxTitle = style.h1 `
font-size: 14px;
text-align: center;
font-weight:normal;
color: #68BEEF; 

`;

export const BoxTitleValue = style.h1 `
font-size: 48px;
text-align: center;
font-weight:normal;
color: white; 
margin-top: 0;
`;



// CORPO
export const Background = style.div`
    background-color: #E4EEFC;
`;

export const Container = style.div`
    width: 80%;
    margin: 0 auto;
    // background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10vh;
`;

export const CadastroContainer = style.div`
    width: 90%;
    height: 50vh;
    background-color: #fff;
    padding: 20px 20px 0 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5vh;

    // &:not(:last-child) {
    //     margin-bottom: 5vh;
    // }
`;

export const ContainerTitleAnuncio = style.h1 `
    font-size: 28px;
    font-weight:normal;
    color: #6A6180; 
    margin: 0;
`;

export const ContainerContent = style.h1 `
    width: 100%;
    height: 100%;
    // background: pink;
    display: flex;
    justify-content: space-evenly;
`;

export const ContentBox1 = style.div `
    width: 30%;
    height: 100%;
    // background-color: red;
    img{border-radius: 15px}
`;

export const ContentBox2 = style.div `
    // background-color: green;
    width: 28%;
    height: 100%;
    font-weight:normal;
    color: #2466E2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Box2NotaGaragem = style.div`
    font-size: 30px;
    font-weight: bold;
    // background-color: orange;
`;

export const Box2NmrAvaliacoes = style.span`
    font-size: 25px;
    color: #2466E2;
    text-align: center;
    // background-color: red;
`;

export const BoxInfoContentBox2EditEnvio = style.div`
    width: 100%;
    height: 30%;
    // background: purple;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxInfoContentBox2 = style.button`
    width: 170px;
    height: 50px;
    border: 1px solid #68BEEF;
    border-radius: 15px;
    justify-content: center;
    background-color: white;
    font-size: 18px;
    color: #0752DE;

    &:hover {
        color: #fff;
        background-color: #0752DE;
        border: #0752DE;
    }
`;

export const Preco = style.div`
    width: 85%;
    height: 30%;
    // background: purple;
`;

export const PrecoDiarioText = style.div`
    font-size: 24px;
    color: #9C98A6;
`;

export const PrecoDiarioValue = style.div`
    font-size: 48px;
    color: #2466E2;
    font-weight: 500;
`;

export const ExcluirAnuncio = style.div`
    width: 85%;
    height: 30%;
    // background: purple;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ExcluirAnuncioBox = style.button`
    width: 170px;
    height: 50px;
    border-radius: 15px;
    border: 1px solid #DE2E07;
    background-color: #DE2E07;
    font-size: 18px;
    color: white;

    &:hover {
        background-color: #9B2004;
        border: #9B2004;
    }

`;

export const FooterEdit = style.div`
    width: 100%;
    height: 130px;
    margin-top: 90px;
`;

export const AnunciarGarageBox = style.div`
    width: 300px;
    height: 300px;
    // background: blue

`;

export const AnunciarGarage = style.button`
    float: left;
    width: 206px;
    height: 60px;
    border: 1px solid #68BEEF;
    border-radius: 15px;
    margin-right: 10%;
    display: block;
    // align-items: center;
    // flex-direction: row;
    justify-content: center;
    // margin-top: 30px;
    background-color: #2466E2;
`;
    export const AnunciarGarageText = style.div`
    text-align: center;
    font-size: 18px;
    color: #68BEEF;
`;

export const BackGroundText = style.div`
    // float-left: 30%;
    width: 100%;
    height: 10vw;
    text-align: center;
    font-size: 16px;
    color: #9C98A6;
    background: ;
    margin-top: 10%;
    
`;

export const StarsAvaliacao = style.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentStars = style.div`
    margin-right: 10px;
`;

export const Stars = style.img`
    height: 25px;
    @media screen and (max-width: 700px){
        height: 20px;
    }
`;



