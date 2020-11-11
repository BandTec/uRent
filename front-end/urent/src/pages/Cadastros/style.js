import style from 'styled-components';

export const Cadastro = style.div`
    background-color: #E4EEFC;
    width: 100%;
`;


export const CadastroContainer = style.div`
    background-color: #fff;
    padding: 63px 8%;
    border-radius: 15px;
    width: 50%;
    margin: 0 auto;
    margin-top: -120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CadastroTitle = style.h1`
    /* background-color: cyan; */
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    color: #32264D;
    padding-bottom: 25px;
    border-bottom: 1px solid #E6E6F0;
`;

export const CadastroContentBox = style.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const CadastroContent = style.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    &:first-child {
        margin-right: 4%;
`;

export const CadastroLabel2 = style.button`
    color: #9C98A6;
    line-height: 2;
    font-size: 16px;

`;

export const CadastroLabel = style.label`
    color: #9C98A6;
    line-height: 2;
    font-size: 16px;

`;


export const CadastroInput = style.input`
    height: 35px;
    width: 96%;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    background-color: #FAFAFC;
    padding-left: 15px;
    color: #9C98A6;
    font-size: 18px;
    margin-bottom: 24px;
`;

export const CadastroInputAddGaragem = style.input`
    height: 35px;
    width: 96%;
    border: 1px solid #E6E6F0;
    border-radius: 25px;
    background-color: #FAFAFC;
    padding-left: 15px;
    color: #9C98A6;
    font-size: 18px;
    margin-bottom: 24px;
`;


export const CadastroSelect = style.select`
    height: 40px;
    width: 96%;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
    background-color: #FAFAFC;
    padding-left: 15px;
    color: #9C98A6;
    font-size: 15px;
    margin-bottom: 24px;
    display: none";
`;

