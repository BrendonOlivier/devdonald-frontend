import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import paths from '../../../constants/path';

// Importações da nossa Tabela do MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//////////////////////////////////

import { Container, Img, EditIcon, DeletIcon } from './styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // Icone check do MUI
import CancelIcon from '@mui/icons-material/Cancel'; // Icone cancel do MUI
import formatCurrency from '../../../utils/formatCurrency';
import { toast } from 'react-toastify';

function ListProducts() {
    const [products, setProducts] = useState([]); // Guardando todos nossos produtos
    const navigate = useNavigate();

    useEffect(() => {
        // Carregando as categorias
        async function loadProducts() {
            const { data } = await api.get('/products')

            setProducts(data)
        }

        loadProducts()
    }, [])

    // Função para deletar o produto  
    const deleteProduct = async (id) => {  
        try {  
            await api.delete(`/products/${id}`); // Faz a requisição DELETE  
            // Atualiza a lista de produtos após a exclusão  
            setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));  
        } catch (error) {  
            toast.error('Erro ao deletar o produto')
            // Aqui você pode exibir um aviso ao usuário  
        }  
    };  

    // Função para saber qual icone mostrar pra se o produto está em oferta ou não
    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: '#228B22' }} />
        }

        return <CancelIcon style={{ color: '#CC1717' }} />
    }

    // Função para mandar todos os dados do produto que queremos editar
    function editProduct(product) {
        navigate(paths.EditProduct, { state: { product } }) // Redirecionando os dados para a Edição de produtos e mandando o produto
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ background: '#333232' }}>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Nome</TableCell>
                            <TableCell style={{ color: '#fff' }}>Preço</TableCell>
                            <TableCell className="offer-icon">Produto em Oferta</TableCell>
                            <TableCell className="close">Produto</TableCell>
                            <TableCell style={{ color: '#fff' }}>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products &&
                            products.map(product => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{formatCurrency(product.price)}</TableCell>
                                    <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                                    <TableCell align='center' className="close"><Img src={product.url} alt='imagem-produto' /></TableCell>
                                    <TableCell align='center'>
                                        <div className='containerEdits'>
                                            <EditIcon onClick={() => editProduct(product)} />
                                            <DeletIcon onClick={() => deleteProduct(product.id)} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts