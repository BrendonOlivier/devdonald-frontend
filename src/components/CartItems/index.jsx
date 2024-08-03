import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, Header, Body, ContainerImg, EmptyCart } from './styles';

export function CartItems() {
    const { cartProducts } = useCart();

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 40 }}>Quantidade</p>
                <p style={{ paddingLeft: 10 }}>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <ContainerImg>
                            <img src={product.url} alt="imagem do produto" />
                        </ContainerImg>
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className='quant-container'>
                            <button>-</button>
                            <p>{product.quantity}</p>
                            <button>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>

                    </Body>
                ))
                : (
                    <EmptyCart>Carrinho vazio...</EmptyCart>
                )
            }
        </Container>
    )
}