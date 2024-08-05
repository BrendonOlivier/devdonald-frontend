import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import Person from '../../assets/Person.png';
import Order from '../../assets/Pedido.png'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line } from './styles'

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout, userData } = useUser(); // Pegando nossa config para deslogar o usuário

    // Criando a função para deslogar o usuário
    const logoutUser = () => {
        logout()
        navigate('/login')
    }
    console.log(userData)
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
                    <p>Olá, <span>{userData.name}</span></p>
                    <PageLink className='logout' onClick={logoutUser}>Sair</PageLink>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}