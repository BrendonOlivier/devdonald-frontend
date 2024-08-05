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
        justify-content: center;

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
`

export const Button = styled.a`
    margin-top: 16px;
    background: #9758a6;
    border-radius: 8px;
    border: none;

    height: 50px;
    font-size: 18px;
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`