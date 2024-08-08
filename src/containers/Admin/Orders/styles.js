import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
    background: #EFEFEF;
    min-height: 100vh;
    margin-bottom: 50px;

    .MuiTableContainer-root {
        border-radius: 10px;
        border: none;
    }

    .css-1ygcj2i-MuiTableCell-root {
        background-color: #333232;
        color: white;
    }

    .css-18k87ye-MuiTypography-root {
        text-transform: uppercase;
    }

    @media screen and (max-width: 480px) {
        .MuiTableContainer-root {
            width: 100%;
        }

        .container {
            max-width: 100vw;
        }

        .css-1ygcj2i-MuiTableCell-root {
            text-align: center;
        }

        .css-1ygcj2i-MuiTableCell-root:nth-child(2) {
            display: none;
        }

        .css-1ex1afd-MuiTableCell-root:nth-child(2) {
            display: none;
        }
 
        .css-1ex1afd-MuiTableCell-root {
            padding: 0;
            letter-spacing: 0;
        }
        
    }
`

export const ProductImg = styled.img`
    width: 60px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`

    .css-13cymwt-control {
        cursor: pointer;
        border: 2px solid #333232;;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;

        @media screen and (max-width: 480px) {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            max-width: 100vw;
            margin: 10px 0
        }
`

export const LinkMenu = styled.a`
    color: #323D5D;
    cursor: pointer;
    font-size: 20px;
    font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
    border-bottom: ${props => props.isActiveStatus ? '2px solid #9758a6' : 'none'};
    padding-bottom: 5px;
`