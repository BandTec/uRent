import styled from 'styled-components';

export const Back = styled.div`
    /* background-color: red; */
    width: 95%;
    margin: 0 auto 2vh auto;
`;

export const Section = styled.div`
    /* background-color: red; */
    width: 95%;
    height: 65vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 15% 0.5% 84%;
    grid-template-rows: 20% 0.5% 80%;
`;

export const Header = styled.div`
    background-color: #94919D;
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius: 10px;
    color: #fff;
`;

export const Nav = styled.nav`
    background-color: #94919D;
    grid-column: 1/2;
    grid-row: 1/4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
`;

export const FotoPerfil = styled.img`
    border-radius: 100%;
`;

export const Content = styled.div`
    background-color: #F1F1F1;
    grid-column: 3/4;
    grid-row: 3/4;
    border-radius: 10px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const InputMessege = styled.input`
    border-radius: 10px;
    border: 1px solid #9B9393;
    padding-left: 2%;
    height: 35px;
`;