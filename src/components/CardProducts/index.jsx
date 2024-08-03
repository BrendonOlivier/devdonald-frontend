import { Container, ContainerImg, ContainerInfo, ProductName, ProductPrice } from './styles';
import { Button } from '../Button'

import { useCart } from '../../hooks/CartContext';

export function CardProduct({ product }) {
    const { putProductsInCart } = useCart()

    return (
        <Container>
            <ContainerImg>
                <img src={product.url} alt="imagem do produto" />
            </ContainerImg>

            <ContainerInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatPrice}</ProductPrice>
                <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
            </ContainerInfo>
        </Container>
    )
}