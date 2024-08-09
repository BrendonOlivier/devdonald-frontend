import styled from "styled-components";

export const Container = styled.div`
    border-radius: 15px;
    background: #fff;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    display: flex;
    gap: 12px;
    padding: 16px;
    text-align: center;
    width: 400px;

    @media (max-width: 430px) {
        width: 100%;
    }
`

export const ContainerImg = styled.div`
    img {
        width: 200px;
        height: 170px;
        border-radius: 15px;
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
`

export const ProductName = styled.p`
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    color: #000000;
    border-bottom: 2px solid #9758a6;
    padding-bottom: 5px;
`

export const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #000000;
`