import styled from "styled-components";

export const Container = styled.div`
    background-color: #E6E6FA;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 10px;
    width: 65%;


    @media screen and (max-width: 970px) {
        width: 90%;
        padding: 5px;
    } 
   
    @media screen and (max-width: 480px) {
    padding: 5px;
    margin-left: 5px;
    width: 97vw;
    min-height: 180px;
    border-radius: 10px;

    p:first-child {
      display: none;
    }

    p:last-child {
        display: none;
    }
  }
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px 25px 10px 0;
    border-bottom: 1px solid #000000;

    p {
        font-size: 16px;
        font-weight: bold;
        color: #9758a6;
    }

    @media (max-width: 430px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 10px 10px;
        gap: 30px;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    padding: 10px 0;

    p {
        font-size: 16px;
        font-weight: bold;
        font-size: 16px;
        text-align: center;

        @media (max-width: 430px) {
            font-size: 12px;
        }
    }

        .quant-container {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin-left: 80px;

            @media (max-width: 430px) {
                margin: 0;
                gap: 5px;
            }

            button {
                height: 30px;
                background: transparent;
                border: none;
                font-size: 24px;
            }

            p {
                margin-top: 5px;

                @media (max-width: 430px) {
                    margin-top: 0;
                }
            }
        }

    .price {
        margin-left: 90px;

        @media (max-width: 430px) {
                margin: 0;
            }
    }

    .lixo {
        cursor: pointer;
        margin-left: 50px;

        @media (max-width: 430px) {
            display: none;
        }
    }
    
    @media (max-width: 430px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;

    img {
        border-radius: 10px;
        width: 120px;
    }

    @media (max-width: 430px) {
        display: none;
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`