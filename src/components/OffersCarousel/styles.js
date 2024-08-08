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
        margin: 10px 0;
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
    gap: 15px;
`