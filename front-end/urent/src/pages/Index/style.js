import style from 'styled-components';

export const Carroussel = style.div`
    margin: 0 auto;
    width: 87%;
`;

export const SlideContent = style.div`
    position: absolute;
    top: 35px;
    left: 49px;
    text-align: left;
`;
export const SlideContentTitle = style.div`
    font-size: 36px;
    color: #fff;
`;
export const SlideContentText = style.div`
    font-size: 22px;
    font-weight: 500;
    color: #fff;    
    width: 480px;
`;
export const Welcome = style.div`
    height: 168px;
    background-color: #F0F0F4;
    margin-top: 43px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const WelcomeContentText = style.div`
    //background-color: steelblue;
    margin: 0 80px;
`;
export const WelcomeTextFirst = style.div`
    font-size: 20px;
    color: #6A6180;
`;
export const WelcomeTextSecond = style.div`
    font-size: 20px;
    color: #6A6180;
    font-weight: 600;
`;
export const WelcomeContentButton = style.div`
    //background-color: darkblue;
    height: 50%;
    display: flex;
    align-items: center;
    margin: 0 80px;
`;
export const WelcomeButton = style.button`
    background-color: #fff;
    border: 1px solid #0752DE;
    border-radius: 15px;
    height: 60px;
    width: 200px;
    color: #0752DE;
    transition: margin-bottom .1s;

    &:first-child{
        margin-right: 43px;
    }
    &:hover {
        background-color: #0752DE;
        border: 1px solid #0752DE;
        color: #ffffff;
        margin-bottom: 3px;
    }
`;