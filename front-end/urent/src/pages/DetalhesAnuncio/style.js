import style from 'styled-components';

export const ContentAvaliacoesAnuncio = style.div`
// background: red;
    height: 40px;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 595px){
        margin-top: 100px;
    }
`;

export const MediaAnuncio = style.div`
    font-size: 26px;
    text-align: left;
    color: #6A6180;
    font-weight: bolder;
    margin-right: 15px;
    @media screen and (max-width: 595px){
        font-size: 20px;
        margin-right: 5px;
        }
`;

export const StarsAvaliacao = style.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentStars = style.div`
    margin-right: 10px;
`;

export const Stars = style.img`
    height: 25px;
    @media screen and (max-width: 700px){
        height: 20px;
    }
`;

export const AvaliacaoAnuncio = style.div`
    background: white;
    font-size: 26px;
    text-align: left;
    color: #6A6180;
    @media screen and (max-width: 595px){
        font-size: 20px;
        }
`;

export const AnuncioContainer = style.div`
    width: 80%;
    padding: 0 40px;
    margin: 60px auto;
    margin-top: 0;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.65);
`;

export const TittleAnuncio = style.div`
    height: 40px;
    width: 100%;
    font-size: 26px;
    color: #6A6180;
    margin-top: 10px;
    @media screen and (max-width: 595px){
        height: 60px;
        }
`;

export const ContentInfoAnuncio = style.div` 
    height: auto;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    @media screen and (max-width: 800px){
        display: block;
        }
`;

export const DivisionInfo = style.div`
    height: 600px;
    width: 50%;
    display: block;
    @media screen and (max-width: 800px){
        width: 100%;
        height: auto;
        }
`;

export const SectionInfo = style.div`
    heigth: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentImageAnuncio = style.img`
    heigth: 400px;
    width: 400px;
    margin: 20px 20px;
    border-radius: 15px;
`;

export const TittleLineInfo = style.div`
    width: 80%;
    font-size: 20px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
`;

export const ContentLineInfo = style.div`
    heigth: 400px;
    width: 80%;
    margin-left: 10%;
    margin-top: 3px;
    border-radius: 5px;
    border: 1px solid #C4C4C4;
    padding-bottom: 10px;
    padding-left: 15px;
`;

export const ParagrafoInfo = style.p`
    font-size: 18px;
`;

export const ParagrafoBInfo = style.div`
    font-size: 18px;
    font-weight: bolder;
`;

export const ContentInfoBuy = style.div`
    width: 80%;
    font-size: 20px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
    display: flex;
    justify-content: center;
`;

export const TittleBuy = style.div`
    width: 80%;
    font-size: 18px;
    color: #6A6180;
    margin-left: 10%;
    margin-top: 20px;
    padding-left: 5px;
`;

export const ContentPreco = style.div`
    heigth: 400px;
    width: 100%;
    display: block;
    border-radius: 5px;
    padding-bottom: 10px;
`;

export const ContentButton = style.div`
    heigth: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px){
        display: block;
    }
`;

export const Button = style.button`
    background-color: #fff;
    border: 1px solid #0752DE;
    border-radius: 15px;
    height: 60px;
    margin-top: 5px;
    width: 210px;
    margin-left: 5px;
    color: #0752DE;
    transition: margin-bottom .1s;
    &:hover {
      background-color: #0752DE;
      border: 1px solid #0752DE;
      color: #ffffff;
      margin-bottom: 3px;
    }
`;

export const Section = style.div`
    width: 86%;
    height: 90vh;
    margin: 60px auto 90px auto;
    @media screen and (max-width: 595px){
        height: 60vh;
        }
`;

export const SectionTitle = style.h1`
    color: #9C98A6;
    font-size: 20px;
`;

export const ContentComment = style.div`
    width: 86%;
    margin-left: 7%;
    margin-top: 40px;
    border-radius: 5px;
    border: 1px solid #C4C4C4;
    padding: 10px;
`;

export const InputComment = style.input`
    color: #9C98A6;
    font-size: 20px;
    border: 0;
    width: 80%;
    margin-left: 10%;
    margin-top: 25px;
    margin-bottom: 20px;
`;

export const ContainerCommentUser = style.div`
    width: 90%;
    margin-left: 5%;
    padding: 10px;
    display: flex;
`;
export const ContainerUser = style.div`
    width: 50%;
    align-items: center;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

export const TeamCard = style.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TeamCardPicture = style.img`
    float:left;
    background: white;
    width: 70px;
    height: 70px;
    border-radius: 999px;
    margin-right:20px;
    @media screen and (max-width: 750px){
        width: 40px;
        height: 40px;
        margin-right:10px;
    }
`;

export const ContentTeamInfo = style.div`
    float:right;
    height: 70px;
    font-size: 23px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 750px){
        font-size: 20px;
    }
`;

export const ContentBoxImg = style.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
`;
