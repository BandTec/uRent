import style from 'styled-components';

export const Header = style.header`
    height: 60px;
    width: 100%;
    margin-bottom: 29px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderLogo = style.div `
  //  background: yellow;
    height: 100%;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderNavMenu = style.nav `
   // background: green;
    float:left;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 25px 0 50px;
    font-size: 18px;
`;

export const ButtonMenu = style.button `
  
    float: right;
    width: 88px;
    height: 90%;
    background-color: white;
    color: gray;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid #0752DE;
    transition: all .1s;
    &:hover {
        margin-bottom: 3px;
    }
`;

export const HeaderNav = style.nav `
  //  background: red;
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 0 25px 0 50px;
    font-size: 18px;
`;

export const ButtonBlue = style.button `
    float: right;
    width: 100px;
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