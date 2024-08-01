import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    .swiper-wrapper {
        display: flex;
    }

    img {
        width: 250px;
        border-radius: 30px;
        height: 100%;

        @media (max-width: 430px) {
            width: 220px;
            border-radius: 15px;
        }
    }

    h3 {
        color: black;
        text-align: center;
    }
`

export const CategoryImg = styled.img`
    margin: 30px 0;
`