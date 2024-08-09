import styled from "styled-components";
import EditNoteIcon from '@mui/icons-material/EditNote'; // Icone Edit do MUI
import DeleteIcon from '@mui/icons-material/Delete'; // Icone Remover do MUI 

export const Container = styled.div`
    
    .MuiPaper-root {
        border-radius: 20px;
        width: 96%;
        margin: 4% auto;
    }

    .offer-icon {
        text-align: center;
        color: white;
    }

    .close {
        text-align: center;
        color: white;
    }

    .containerEdits {
        display: flex;
        gap: 10px;
    }

    @media screen and (max-width: 480px) {
    .MuiTableContainer-root {
      width: 94%;
    }
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

export const DeletIcon = styled(DeleteIcon)`
    cursor: pointer;
    color: #323D5D;
`