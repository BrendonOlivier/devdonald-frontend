import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #363636;
    width: 300px;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    hr {
        margin: 50px 15px;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    img {
        width: 150px;
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
`

export const ListLink = styled(Link)`
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
`