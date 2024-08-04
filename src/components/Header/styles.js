import styled from "styled-components";

export const Container = styled.div`
    height: 72px;
    width: 100vw;
    background-color: #1F1F1F;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    color: #fff;
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 30px;
    }
`

export const ContainerText = styled.div`
    
    p {
        color: #fff;
        margin-bottom: 5px;
    }

    span {
        color: #9758a6;
    }

    .logout {
        color: red;
    }
`

export const Line = styled.div`
    height: 40px;
    border-right: 0.5px solid #bababa;
`

export const PageLink = styled.a`
    font-size: 16px;
`