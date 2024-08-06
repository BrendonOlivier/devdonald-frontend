import { useEffect } from 'react';
import { api } from '../../../services/api';

import { Container } from './styles';
function NewProduct() {

    useEffect(() => {
        // Carregando as categorias
        async function loadProducts() {
            const { data } = await api.get('/products')

            setProducts(data)
        }

        loadProducts()
    }, [])

    return (
        <Container>
            <div>
                OLÁA
            </div>
        </Container>
    )
}

export default NewProduct