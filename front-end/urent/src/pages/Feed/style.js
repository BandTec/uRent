import style from 'styled-components';

export const FeedContainer = style.div`
    // background-color: red;
    width: 60%;
    padding: 0 40px;
    margin: 60px auto;
    border: 1px solid #C4C4C4;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.65);
    &:hover {
        box-shadow: 6px 6px 9px 0px rgba(0,0,0,0.65);
        cursor: pointer;
    }
`;

export const FeedTitle = style.h1`
    // background-color: green;
    font-size: 26px;
    color: #94919D;
    font-weight: 900;
`;

export const FeedSection = style.div`
    // background-color: orange;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FeedContent = style.div`
    // background-color: green;
    width: 55%;
    display: flex;
    flex-direction: column;
`;
    
export const FeedContentTitle = style.h2`
    font-size: 20px;
    color: #6A6180;
    font-weight: 400;
`;
    
export const FeedContentSection = style.div`
    border: 1px solid #C4C4C4;
    padding: 0 20px;
    border-radius: 15px;
`;

export const SectionTitle = style.p`
    font-size: 18px;
    font-weight: 700
`;

export const SectionData = style.label`
    font-size: 18px;
    font-weight: 400
`;

export const SectionPreco = style.p`
    font-size: 18px;
    font-weight: 700;
    align-self: center;

`
