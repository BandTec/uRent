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
`;
export const SectionText = style.div`
    /* background-color: coral; */
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