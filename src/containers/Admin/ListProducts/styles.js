import styled from "styled-components";
import EditNoteIcon from '@mui/icons-material/EditNote'; // Icone Edit do MUI

export const Container = styled.div`
    
    .MuiPaper-root {
        border-radius: 20px;
    }
`

export const Img = styled.img`
    width: 70px;
    border-radius: 5px;
`

export const EditIcon = styled(EditNoteIcon)`
    cursor: pointer;
    color: #323D5D;
`