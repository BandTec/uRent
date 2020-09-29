import style from 'styled-components';

export const Footer = style.div`
    height: 136px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const FooterAlert = style.div`
    /* background-color: pink; */
    width: 30%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const FooterText = style.p`
    /* background-color: slategrey; */
    width: 150px;
    color: #A0A0B2;
`;
export const FooterButton = style.button`
    width: 197px;
    height: 56px;
    background-color: #04D361;
    border: 1px solid #04D361;
    border-radius: 8px;
    color: #fff;
    transition: .3s;
    &:hover {
        margin-bottom: 5px;
    }
`;