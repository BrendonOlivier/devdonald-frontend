import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 100%;
    padding: 0 20px;
    display: flex;
    margin-bottom: 70px;

    .swiper-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        overflow-x: hidden;

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
        margin-top: 15px;
    }
`