import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
`

export const ProductImg = styled.img`
    width: 100vw;
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    background: none;
    border: none;
    border-bottom: ${ props => props.isActiveCategory ? '2px solid #9758a6' : 'none'};
    color: ${ props => props.isActiveCategory ? '#9758a6' : '#9a9a9d'};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`