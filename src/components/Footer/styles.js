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

    @media (max-width: 430px) {
           padding: 20px 0;
           height: 150%;
           gap: 10px;
        }
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

    @media (max-width: 430px) {
        width: 100vw;
        gap: 20px;
        padding-bottom: 20px;
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
        margin-left: 100px;

        @media (max-width: 430px) {
            width: 130px;
            margin-left: 0;
        }
    }

    .info-contato {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        @media (max-width: 430px) {
            gap: 0px;

            p {
                font-size: 10px;
            }
        }
    }

    .copyright {
        margin-left: 100px;
        
        span {
            color: #9758a6;
            border-bottom: 2px solid #fff;
            padding-bottom: 5px;
        }

        @media (max-width: 430px) {
            font-size: 10px;
            margin-left: 0;
        }
    }

    @media (max-width: 430px) {
        width: 100vw;
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`