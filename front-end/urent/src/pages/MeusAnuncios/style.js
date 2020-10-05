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
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
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
    // height: 90vh;
    width: 100vw;
`;

export const CadastroContainer = style.div`
    background-color: #ffff;
    padding: 20px;
    border-radius: 15px;
    width: 80%;
    // height: auto;
    margin: 0 auto;
    margin-top: -90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 0;
    margin-bottom: 50px;
`;

export const ContainerTitleAnuncio = style.h1 `
font-size: 28px;
font-weight:normal;
color: #6A6180; 
margin-top: 0;
`;

export const ContainerContent = style.h1 `
width: 100%;
height: auto;
background: pink;
margin-top: 0px;
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
justify-content: center;
@media(max-width: 1800px){
    backgroud: red;
}
`;

export const ContentBox1 = style.h1 `
float: left;
width: 300px;
height: 400px;
// background-image: url(../../assets/garage01.png);
display: flex;
align-items: center;
// flex-direction: row;
justify-content: center;
margin-top: 21px;
// margin-left: 2.5%;
img{border-radius: 15px}
background:grey;
margin-left:15px;
margin-right:15px;
`;

export const ContentBox2 = style.h1 `
float: left;
width: 300px;
height: 400px;
// background: url(../../assets/garage01.png);
// margin-top: 13px;
// margin-left: 2.5%;
background:grey;
margin-left:15px;
margin-right:15px;
font-size: 28px;
font-weight:normal;
color: #2466E2; 
margin-top: 0;
`;

export const BoxInfoContentBox2 = style.div`
    float: left;
    width: 170px;
    height: 70px;
    border: 1px solid #68BEEF;
    border-radius: 15px;
    margin-right: 10%;
    display: block;
    // align-items: center;
    // flex-direction: row;
    justify-content: center;
    margin-top: 109px;
    font-size: 18px;
    text-align: center;
`;

