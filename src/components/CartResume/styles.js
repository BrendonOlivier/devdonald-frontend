import styled from "styled-components";

export const ContainerResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .button {
        width: 100%;
        margin-top: 30px;

        @media (max-width: 430px) {
            width: 95vw;
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E6E6FA;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 15px;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas: 
        'title title'
        'itens itens-price'
        'delivery-tax delivery-tax-price'
        ;

    .title {
        grid-area: title;
        margin-bottom: 20px;
    }

    .itens {
        grid-area: itens;
    }

    .itens-price {
        grid-area: itens-price;
    }

    .delivery-tax {
        grid-area: delivery-tax;
    }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
        }
    }

    .container-bot {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;

        @media (max-width: 430px) {
            width: 100%;
            justify-content: center;
            gap: 15px;
        }
    }

    @media (max-width: 430px) {
        width: 95vw;
        align-items: center;
        justify-content: center;
    }
`