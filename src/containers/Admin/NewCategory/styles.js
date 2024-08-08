import styled from "styled-components";
import Edit from '@mui/icons-material/Edit'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 5%;

    .MuiTableContainer-root {
        width: 80%;
        margin: 2% auto;
    }

    .MuiTable-root {
        table-layout: fixed;
        min-width: 0;
    }

    .MuiTableCell-root {
        width: 80%;
        min-width: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .cell-image {
        text-align: center;

        img {
            width: 70px;
            height: 65px;
            border-radius: 5px;
        }
    }

    .edit {
        width: 50%;
        padding: 0;
        text-align: center;
    }

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

    @media screen and (max-width: 970px) {
        form {
            width: 80%;
        }
    }

    @media screen and (max-width: 480px) {
        .MuiTableContainer-root {
            width: 94%;
        }

        form {
            padding: 30px 30px 20%;
            width: 94%;
        }
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

export const EditIcon = styled(Edit)`
    cursor: pointer;
    color: #323d5d;
`