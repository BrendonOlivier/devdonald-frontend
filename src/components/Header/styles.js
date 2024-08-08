import styled from "styled-components";

export const Container = styled.div`
    height: 72px;
    width: 100vw;
    max-width: 100vw;
    background-color: #1F1F1F;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 430px) {
        height: 50px;
    }
`

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    color: #fff;

    @media (max-width: 430px) {
        gap: 10px;
    }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 30px;

        @media (max-width: 430px) {
        width: 18px;
    }
    }
`

export const ContainerText = styled.div`
    
    p {
        color: #fff;
        margin-bottom: 5px;

        @media (max-width: 430px) {
        font-size: 12px;
    }
    }

    span {
        color: #9758a6;
    }

    .logout {
        color: red;

        @media (max-width: 430px) {
        font-size: 14px;
    }
    }
`

export const Line = styled.div`
    height: 40px;
    border-right: 0.5px solid #bababa;

    @media (max-width: 430px) {
        display: none;
    }
`

export const PageLink = styled.a`
    font-size: 16px;

    @media (max-width: 430px) {
        font-size: 14px;
    }
`