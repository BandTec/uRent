import style from 'styled-components';

export const Footer = style.div`
    //background-color: red;
    height: 150px;
    width: 100%;
    margin-top: 54px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`;
export const FooterTitle = style.h1`
    //background-color: green;
    font-size: 20px;
    font-weight: 600;
    color: #6A6180;
`;
export const FooterText = style.p`
    //background-color: blue;
    font-size: 18px;
    line-height: 8px;
`;