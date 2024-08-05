import { useEffect, useState } from 'react';

// Importações da Biblioteca Material
import { api } from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
/////////////////////////////////////

import { Container } from './styles';
import Row from './row';
import formatDate from '../../../utils/formatDate';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Carregando as categorias
        async function loadOrders() {
            const { data } = await api.get('/orders')

            setOrders(data)
        }

        loadOrders()
    }, [])

    // Criando a Ordem da tabela, 1º Nome, 2º OrderId, etc...
    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products
        };
    };

    // Toda vez que eu iniciar a aplicação ou alterar o 'orders', vou alterar os meus 'Rows'
    useEffect(() => {
        const newRows = orders.map(ord => createData(ord))
        setRows(newRows)
    }, [orders])

    return (


        <Container>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders