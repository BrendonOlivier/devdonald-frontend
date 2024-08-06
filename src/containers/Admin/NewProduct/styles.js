import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background: #363636;
        border-radius: 10px;
        padding: 30px;
    }
`

export const Label = styled.p`
    font-size: 15px;
    color: #ffffff;
    margin-bottom: 3px;

`

export const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 25px;
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    background: #9758a6;
    color: #ffffff;
    margin-top: 15px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`