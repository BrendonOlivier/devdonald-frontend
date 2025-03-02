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

import { Container, Menu, LinkMenu } from './styles';
import Row from './row';
import formatDate from '../../../utils/formatDate';
import status from './orderStatus'; // Config de Status

function Orders() {
    const [orders, setOrders] = useState([]); // Todos os pedidos
    const [filteredOrders, setFilteredOrders] = useState([]); // Pedidos filtrados
    const [activeStatus, setActiveStatus] = useState(1); // Pedido com o status Ativo
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Carregando as categorias
        async function loadOrders() {
            const { data } = await api.get('/orders')

            setOrders(data)
            setFilteredOrders(data)
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
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)
    }, [filteredOrders])

    // Fazendo as atualizações localmente, e filtrando novos status alterados das Ordens
    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = status.findIndex(sts => sts.id === activeStatus); // Guardando a posição do Status
            const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)

            setFilteredOrders(newFilteredOrders)
        }
    }, [orders])

    // Função para filtar os pedidos
    function handleStatus(status) {
        // Se clicar em Todos (id 1) irei mostrar TODOS os pedidos
        // E se eu clicar em qualquer outro, irei filtrar os Pedidos
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(order => order.status === status.value);
            setFilteredOrders(newOrders)
        }

        setActiveStatus(status.id) // Grava o ID no Status ativo
    };

    return (
        <Container>
            <Menu>
                {status && status.map(status => (
                    <LinkMenu key={status.id} onClick={() => handleStatus(status)}
                        isActiveStatus={activeStatus === status.id}>
                        {status.label}
                    </LinkMenu>))}
            </Menu>

            <TableContainer component={Paper} className='container'>
                <Table aria-label="collapsible table">
                    <TableHead >
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
                            <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders