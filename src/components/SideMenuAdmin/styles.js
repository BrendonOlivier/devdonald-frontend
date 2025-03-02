import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #363636;
    width: 19%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;

    .icon-abrir {
       display: none;
    }

    hr {
        margin: 50px 15px;

        @media screen and (max-width: 480px) {
            display: none;
        }
    }

    @media screen and (max-width: 480px) {
        width: 100vw;

        .icon-abrir {
            display: block;
            color: white;
            font-size: 25px;
        }
    }
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media screen and (max-width: 480px) {
            display: none;
        }

    img {
        width: 150px;

        @media screen and (max-width: 480px) {
            display: none;
        }
    }
`

export const ContainerLinks = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    background: ${props => props.isActive ? '#9758a6' : 'transparent'};
    border-radius: 2px;
    margin: 8px;

    .icon {
        color: white;
    }
    
    @media screen and (max-width: 480px) {
            display: none;
        }
`

export const ListLink = styled(Link)`
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
`

export const ContainerMobile = styled.div`
   display: none;

    @media screen and (max-width: 480px) {
        display: block;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        padding: 20px 50px;
        border-bottom: 3px solid #9758a6;
    }
`