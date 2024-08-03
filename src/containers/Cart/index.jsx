import BgCart from '../../assets/Bg-Carrinho.png';
import { CartItems } from '../../components/CartItems';
import { Container, CartImg } from './styles'

export function Cart() {
    return (
            <Container>
                <CartImg src={BgCart} alt="Banner-Home" />
                <CartItems />
            </Container>
    )
}