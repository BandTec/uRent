import style from 'styled-components';

export const Fitlro = style.div`
    // background-color: red; 
    width: 80%;
    height: 75px;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
    margin: 0 auto 0 auto;
    padding: 0 40px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.65);
    display: flex;
    justify-content: space-between;
`;

export const FiltroSection = style.div`
    // background-color: yellow;
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

export const FiltroOpen = style.div`
    // background-color: green; 
    width: 80%;
    height: 250px;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
    margin: 0 auto 60px auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
`;

export const FiltroLabelOpen = style.label`
    display: block;
    margin: 15px 0 5px 0;
`;

export const FilterInputOpen = style.input`
    width: 80%;
    height: 30px;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    padding-left: 15px;
`;

export const FilterTipoVeiculo = style.label`
    // background-color: red;
    font-size: 18px;
    height: 30px;
    display: flex;
    align-items: center;
`;