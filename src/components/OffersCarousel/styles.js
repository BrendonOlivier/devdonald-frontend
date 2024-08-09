import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding: 0 20px;
    overflow-x: hidden;
    margin-bottom: 70px;

    .swiper-wrapper {
        display: flex;
    }

    img {
        width: 230px;
        height: 210px;
        border-radius: 15px;

        @media (max-width: 430px) {
            width: 200px;
            border-radius: 15px;
        }
    }

    h3 {
        color: black;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin: 5px 0;
        border-bottom: 2px solid #9758a6;
        padding-bottom: 5px;
    }

    p {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }
`

export const ContainerCarrossel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    gap: 15px;
    border: 2px solid #9758a6;
`