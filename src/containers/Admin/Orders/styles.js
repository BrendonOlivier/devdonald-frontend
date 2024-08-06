import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
    background: #EFEFEF;
    min-height: 100vh;
    padding: 20px;
`

export const ProductImg = styled.img`
    width: 60px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;

    .css-13cymwt-control {
        cursor: pointer;
        border: 2px solid #9758a6;
    }
`