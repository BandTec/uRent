import style from 'styled-components';

export const Welcome = style.div`
    width: 100%;
    height:100vh;
    position:absolute;
    background: #E4EEFC;
`;

export const FormLogin = style.div`
    margin-bottom:-50px;
    width: 80%;
    height: 540px;
    margin: 50px auto;
    background-color:#2466E2;
    border-radius: 8px;
    display:flex;
    justify-content:space-around;
    align-items: center;
`;

export const LogoImage = style.div`
    height:50%;
    margin-left:50px;
`;

export const Form= style.div` 
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;

export const FormTitleEntrar = style.h1`
    color: #FFFFFF;
`;


export const FormTitleLabel = style.label`
    width: 100%;
    color:#FFFFFF;
    margin-bottom:5px;
    align-text: center;
`;

export const border = style.div`
    border-radius: 15px;
    width: 50%;
    height: 400px;
    border: 1px solid #82A9EF;
`;

export const FormTitleLabel2 = style.label`
    width: 88%;
    color:#FFFFFF;
    margin-bottom:5px;
    align-text: center;
`;

export const FormData = style.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px
`;

export const FormInput = style.input`
    width: 445px;
    height: 50px;
    padding-left:55px;
    background-color:#82A9EF;
    border-radius: 8px;
    border: 1px solid #82A9EF;
    &::placeholder{
        color: white;
    }
`;

export const FormRecursos= style.div`
    margin-bottom:30px;
    display:flex;
    justify-content:space-between;
    width:100%;
`;

export const FormRecusosCheck = style.div`
    display: flex;
    align-items: center;
`

export const LabelCheck= style.label`
    color:white;
    cursor: pointer;
`;
export const ButtonEntrar = style.button`
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    width: 90%;
    height: 63px;
    margin-bottom:20px;
    border-radius: 8px;
    background-color: rgba(11, 21, 34, 0.49);
    border: 1px solid rgba(11, 21, 34, 0.49);
    &:hover{
        background: rgba(20, 31, 44, 0.69);
        border: 1px solid rgba(20, 31, 44, 0.69);
    }
`;
