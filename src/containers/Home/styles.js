import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-image: url(${Background});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CategoryImg = styled.img`
    margin: 30px 0;
`

export const CategoryImgOffer = styled.img`
    margin: 0;
`

export const HomeImg = styled.img`
    max-width: 100vw;
`