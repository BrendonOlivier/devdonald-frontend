import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    padding: 0 100px;
    overflow-x: hidden;
    margin-bottom: 70px;

    .swiper-wrapper {
        display: flex;
    }

    img {
        border-radius: 30px;
        height: 100%;

        @media (max-width: 430px) {
            width: 200px;
            border-radius: 15px;
        }
    }

    @media (max-width: 430px) {
        padding: 0 5px;
        }
`

export const LinkStyle = styled(Link)`
    background: #9758a6;
    border-radius: 8px;
    border: none;
    width: 100%;
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

    @media (max-width: 430px) {
        height: 40px;
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