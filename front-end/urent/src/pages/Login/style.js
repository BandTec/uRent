import style from 'styled-components';

export const Welcome = style.div`
position: relative;
width: 1366px;
height: 768px;

background: #E4EEFC;
`;

export const FormLogin = style.div`
position: absolute;
width: 1175px;
height: 540px;
left: 96px;
top: 114px;
background-color:blue;
border-radius: 8px;
`;

export const FormTitleEntrar = style.p`
position: absolute;
width: 132px;
height: 53px;
left: 831px;
top: 151px;

font-family: Maven Pro;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 53px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

`;

export const FormImage = style.div`
    height: 100%;
    width: -132px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonEntrar = style.button`
position: absolute;
width: 445px;
height: 63px;
left: 675px;
top: 504px;
position: absolute;
width: 98px;
height: 29px;
left: 848px;
top: 518px;

background: rgba(11, 21, 34, 0.49);
border-radius: 10px;

`;
