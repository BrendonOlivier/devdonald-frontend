import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    background: #1F1F1F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
`

export const LinksSocial = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    color: white;

    .icon {
        font-size: 25px;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            color: #9758a6;
            transform: scale(1.1);
        }
    }
`

export const Info = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    color: white;
    margin-top: 50px;

    img {
        width: 200px;
        margin-left: 100px;
        cursor: pointer;
    }

    .info-contato {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .copyright {
        margin-left: 100px;
    }
`