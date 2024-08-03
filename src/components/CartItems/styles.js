import styled from "styled-components";
import Background from '../../assets/Background-Fundo.png';

export const Container = styled.div`
    background-color: #E6E6FA;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 10px;
    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 10px;
    border-bottom: 1px solid #000000;

    p {
        font-size: 16px;
        font-weight: bold;
        color: #9758a6;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px 15px;
    align-items: center;
    width: max-content;
    margin: 20px 0;

    p {
        font-size: 16px;
        font-weight: bold;
    }

    .quant-container {
        display: flex;
        gap: 20px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
        }

        p {
            margin-top: 5px;
        }
    }

    .lixo {
        cursor: pointer;
    }
    
`

export const ContainerImg = styled.div`
    border-radius: 40px;
    background: #9758a6;

    img {
        border-radius: 10px;
        width: 120px;
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`