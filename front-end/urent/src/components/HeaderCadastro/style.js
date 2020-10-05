import style from 'styled-components';

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
export const Section = style.div`
    background-color: #2466E2;
    height: 416px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
export const SectionText = style.div`
   // background-color: coral;
    width: fit-content;
    position: relative;
    top: 55px;
    margin-left: 25%;
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

export const SectionIcon = style.div`
    // background-color: coral;
    width: fit-content;
    position: relative;
    top: 55px;
    margin-left: 17%;
`;

export const ContentInfoAnuncio = style.div`
width: 100%;
height: 96px;
background: red;
margin-top:10px;
display: inline;
`;

export const BoxInfo = style.div`
position: absolute;
width: 206px;
height: 96px;
left: 266px;
top: 128px;

border: 1px solid #68BEEF;
box-sizing: border-box;
border-radius: 15px;
`;