import { Container, ContainerImg, ContainerInfo, ProductName, ProductPrice } from './styles';
import { Button } from '../Button'

export function CardProduct({ product }) {

    return (
        <Container>
            <ContainerImg>
                <img src={product.url} alt="imagem do produto" />
            </ContainerImg>

            <ContainerInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatPrice}</ProductPrice>
                <Button>Adicionar</Button>
            </ContainerInfo>
        </Container>
    )
}