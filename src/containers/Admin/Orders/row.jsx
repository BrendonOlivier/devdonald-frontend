import React, { useState } from 'react';
import { api } from '../../../services/api';

// Importações da Biblioteca Material
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
/////////////////////////////////////

import status from './orderStatus'; // Config de Status

import { Container, ProductImg, ReactSelectStyle } from './styles';

function Row({ row }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Config para criar o Loading ao alterar o Status

    // Função para alterar o Status do pedido
    async function setNewStatus(id, status) {
        setIsLoading(true) // Passando o Status como true 
        try {
            await api.put(`/orders/${id}`, { status })
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false) // E tiramos o Loading caso dê tudo certo
        }

    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orderId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                    <ReactSelectStyle options={status}
                        menuPortalTarget={document.body}
                        placeholder='Status'
                        defaultValue={status.find(options => options.value === row.status) || null}
                        onChange={newStatus => {
                            setNewStatus(row.orderId, newStatus.value)
                        }}
                        isLoading={isLoading}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Pedido
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantidade</TableCell>
                                        <TableCell>Produto</TableCell>
                                        <TableCell>Categoria</TableCell>
                                        <TableCell>Imagem</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((productRow) => (
                                        <TableRow key={productRow.id}>
                                            <TableCell component="th" scope="row">
                                                {productRow.quantity}
                                            </TableCell>
                                            <TableCell>{productRow.name}</TableCell>
                                            <TableCell>{productRow.category}</TableCell>
                                            <TableCell>
                                                <ProductImg src={productRow.url} alt='imagem do produto' />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Row