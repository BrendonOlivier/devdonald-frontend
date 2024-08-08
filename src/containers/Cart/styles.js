import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-image: url(${Background});
    background-repeat: repeat;
    min-height: calc(100vh - 72px);
`

export const CartImg = styled.img`
    width: 100vw;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 20px;
    }
`