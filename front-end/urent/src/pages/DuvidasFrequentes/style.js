import style from 'styled-components';

export const Header = style.header`
    background-color: #2466E2;
    height: 130px;
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


export const Welcome = style.div`
    height: 380px;
    background-color: #E4EEFC;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;


export const FormPerguntas = style.div`

    margin-bottom: 220px;
    height: 200px;
    width: 50em;
    justify-content: center;
    position: absolute;
    align-items: center;


`;

export const FormTitle = style.p`
    height: 35px;
    background-color: white;
    margin: 10px;
    padding: 5px;
    border: 1px solid #6A6363;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
`;