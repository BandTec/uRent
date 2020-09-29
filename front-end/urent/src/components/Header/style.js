
import style from 'styled-components';

export const Header = style.header`
    height: 75px;
    width: 100%;
    margin-bottom: 29px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


`;


export const HeaderLogo = style.div `

    height: 100%;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const HeaderNav = style.nav `

    height: 100%;
    width: 228px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px 0 50px;
    font-size: 18px;


`;


export const ButtonLight = style.button `

    width: 127px;
    height: 32px;
    color: #0752DE;
    background-color: #ffffff;
    border: 1px solid #0752DE;
    border-radius: 15px;
    transition: all .1s;
    &:hover {
        margin-bottom: 3px;
    }

`;



export const ButtonBlue = style.button `

    width: 88px;
    height: 32px;
    background-color: #0752DE;
    color: #ffffff;
    border: 1px solid #0752DE;
    border-radius: 15px;
    transition: all .1s;
    &:hover {
        margin-bottom: 3px;
    }



`;

