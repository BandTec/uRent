import style from 'styled-components';

// DIV PRINCIPAL
export const ContentPrincipal = style.div `
    // background: black;
    float: left;
    height: 70vh;
    width: 100%;
    margin-bottom: 50px;
`;
export const ContentMessage = style.div`
    background-color: rgba(255, 254, 254, 0.8);
    float: left;
    height: 60%;
    width: 400px;
    min-width: 400px;
    margin-left: 15%;
    position: absolute;
    margin-top:20px;
    z-index: 1; 
    @media screen and (max-width: 600px){{
        margin-left: 10%;
        height: 70vh;
    }
`;
export const MessagePrinc = style.div`
    font-size: 48px;
    text-align: left;
    color: #6A6180;
    margin-top: 50px;
`;
export const MessageSubMess = style.div`
    font-size: 30px;
    text-align: left;
    color: #6A6180;
    margin-top: 10px;
`;
export const MessageSub = style.div`
    font-size: 20px;
    text-align: left;
    color: #6A6180;
    margin-top: 10px;
`;
export const ContentMessageImage = style.div`
    // background: yellow;
    float: right;
    height: 100%;
    width: 500px;
    align-items: center;
    margin-right: 20%;
    @media screen and (max-width: 850px){{
        margin-right: 0%; 
    }
`;
export const MessageImage = style.img`
    background-image: url("../../assets/guy-computer.svg");
    float: right;
    height: 100%;
    width: 500px;
    align-items: center;
    margin-right: 10%;
    @media screen and (max-width: 850px){{
        height: 400px;
        margin-top: 50px;
        margin-left: 20px;
    }
        }
`;
// DIV MISSAO, VISAO, VALORES
export const ContentValores = style.div `
    background: #F0F0F4;
    float: left;
    // height: 100vh;
    width: 100%;
    display: block;
    // margin-bottom: 50px;
    padding-top: 40px;
`;

export const TitleValores = style.div`
    font-size: 48px;
    text-align: center;
    // width: 100%;
    margin-top:20px;
    color: #6A6180;
`;
export const ContentAll = style.div`
width: 100%;
// height: auto;
// background: grey;
float: left;
display:flex;
justify-content: center;
align-itens: center;
flex-direction:row;
flex-wrap:wrap;
`;
export const BoxValores = style.div`
float:left;
width: 380px;
height: 545px;
margin: 20px;
display:block;
border: 1px solid #94919D;
border-radius: 15px
`;
export const TextBoxValores = style.div`
    font-size: 28px;
    text-align: left;
    // width: 100%;
    margin: 20px;
    color: #6A6180;
   
`;

export const MessageBoxPrinc = style.div`
    font-size: 48px;
    text-align: left;
    color: #6A6180;
    margin-top: 50px;
    width: 500px;
    @media screen and (max-width: 500px){{
        font-size: 40px;
        width: 400px;
    }
`;

export const ContentBoxMessage = style.div`
    background-color: rgba(255, 254, 254, 0.8);
    float: left;
    height: 60%;
    width: 500px;
    min-width: 400px;
    margin-left: 15%;
    position: absolute;
    margin-top:20px;
    z-index: 1; 
    @media screen and (max-width: 600px){{
        margin-left: 10%;
        height: 70vh;
        width: 300px;
    }
`;

export const MessageBoxSubMess = style.div`
    font-size: 28px;
    text-align: left;
    color: #6A6180;
    margin-top: 10px;
    width: 500px;
    @media screen and (max-width: 500px){{
        font-size: 25px;
        width: 400px;
    }
    
`;

export const MessageBoxButton = style.div`
    float: left;
    width: 100%;
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-itens: center;  
    flex-direction:row;
    flex-wrap:wrap;
`;

export const ButtonBuy = style.button`
    background-color: #fff;
    border: 1px solid #0752DE;
    border-radius: 15px;
    height: 60px;
    width: 210px;
    color: #0752DE;
    transition: margin-bottom .1s;
    &:hover {
      background-color: #0752DE;
      border: 1px solid #0752DE;
      color: #ffffff;
      margin-bottom: 3px;
    }
`;

export const BoxTeams = style.div`
float:left;
width: 450px;
margin: 20px;
display:block;
// border: 1px solid #94919D;
@media screen and (max-width: 1000px){{
    
    &:first-child{
        margin-bottom: -20px;
    }
}
`;

export const TeamCard = style.div`
   float:left;
   width: 98%;
   height: 100px;
   background: white;
   margin:1%;
   margin-bottom: 20px;
   align-items: center;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;

export const TeamCardPicture = style.img`
   float:left;
   background: white;
   width: 70px;
   height: 70px;
   border-radius: 999px;
   margin-left:20px;
   margin-right:20px;
`;

export const ContentTeamInfo = style.div`
float:right;
// background: blue;
width: 310px;
height: 70px;
align-items: center;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;

export const ContentBoxTeam = style.div`
width: 80%;
height: 100%;
// background: pink;
`;
export const ContentBoxImg = style.div`
width: 20%;
height: 100%;
// background: orange;
display: flex;
flex-direction: row-reverse;
`;

export const ContentTeamName = style.div`
font-size: 23px;
text-align: left;
color: #6A6180;
width: 100%;
font-weight: bolder;
height: 50%;
// background: red;
`;

export const ContentTeamFunc = style.div`
font-size: 20px;
text-align: left;
color: #6A6180;
width: 100%;
height: 50%;
`;

export const TeamLinkedinImg = style.img`
width: 25px;
height: 25px;
right:0;
top:0;
`;