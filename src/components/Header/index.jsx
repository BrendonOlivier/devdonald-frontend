import Person from '../../assets/Person.png';
import Order from '../../assets/Pedido.png'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line } from './styles'

export function Header() {
    return (
        <Container>
            <ContainerLeft>
                <PageLink>Home</PageLink>
                <Line></Line>
                <PageLink>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Order} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>

                <ContainerText>
                    <p>Olá, <span>Brendon</span></p>
                    <PageLink className='logout'>Sair</PageLink>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}