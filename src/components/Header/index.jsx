import { useNavigate, useLocation } from 'react-router-dom';

import Person from '../../assets/Person.png';
import Order from '../../assets/Pedido.png'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line } from './styles'

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigate('/home')}
                    style={{ color: location.pathname === '/home' ? '#9758a6' : '#fff' }}>Home</PageLink>
                <Line></Line>
                <PageLink onClick={() => navigate('/produtos')}
                    style={{ color: location.pathname === '/produtos' ? '#9758a6' : '#fff' }}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Order} alt="carrinho" onClick={() => navigate('/carrinho')} />
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