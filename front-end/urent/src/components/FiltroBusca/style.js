import style from 'styled-components';

export const Fitlro = style.div`
    // background-color: red; 
    width: 80%;
    height: 75px;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
    margin: 0 auto 60px auto;
    padding: 0 40px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.65);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FiltroSection = style.div`
    // background-color: green;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FiltroSectionTitle = style.div`
    font-size: 16px;
    margin-bottom: 5px
`;

export const FiltroSectionText = style.div`
    font-size: 20px;
`;