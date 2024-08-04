import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 72px);
    background-image: url(${Background});
`

export const CartImg = styled.img`
    width: 100vw;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;
`