import BgCart from '../../assets/Bg-Carrinho.png';
import { CartItems, CartResume } from '../../components';
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImg src={BgCart} alt="Banner-Home" />

            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}