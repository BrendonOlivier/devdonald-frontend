import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background: #363636;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;

        h2 {
            font-weight: 500;
            color: #9758a6;
            text-transform: uppercase;
            border-bottom: 2px solid #fff;
            padding-bottom: 5px;
        }
    }

    @media screen and (max-width: 480px) {
        max-height: 100vh;
        
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
    min-width: 290px;
    border-radius: 8px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border: none;
    padding-left: 10px;
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

export const LabelUload = styled.label`
    cursor: pointer;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px dashed #fff;
    border-radius: 5px;
    padding: 10px;

    input {
        opacity: 0;
        width: 1px;
    }
`

export const Error = styled.p`
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    margin-top: 5px;
`