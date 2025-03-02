import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import BackgroundLogin from '../../assets/Background-Login.svg';
import BackgroundFundo from '../../assets/Background-Fundo.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    @media (max-width: 430px) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;

        @media (max-width: 430px) {
            width: 60%;
    }
    }

    @media (max-width: 430px) {
        max-width: 100%;
    }
`;

export const RightContainer = styled.div`
    background: url('${BackgroundFundo}');
    background-color: #1E1E1E;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }

    @media (max-width: 430px) {
        max-width: 100%;
        background: url('${BackgroundLogin}');
        background-size: cover;
        background-position: center;
        border-top: 2px solid #9758a6;
    }
`;

export const Tittle = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    font-weight: 400;
    color: #fff;
    text-align: center;

    span {
        color: #9758a6;
        font-family: "Road Rage", sans-serif;
    }

    @media (max-width: 430px) {
        font-size: 30px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;

        @media (max-width: 430px) {
            height: 40px;
        }
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;