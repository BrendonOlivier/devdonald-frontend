import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    width: 100vw;
    overflow-x: hidden;
    height: 100%;
    background: #e5e5ed;
    min-height: calc(100vh - 72px);
`

export const ProductImg = styled.img`
    width: 100%;
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;

    @media (max-width: 430px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding: 0 10px;
    }
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

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 80px;
    justify-items: center;
    margin-top: 20px;

    @media (max-width: 430px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
