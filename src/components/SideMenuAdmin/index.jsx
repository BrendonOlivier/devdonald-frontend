import listLinks from './menuList';
import { useUser } from '../../hooks/UserContext';

import { Container, ContainerImg, ContainerLinks, ListLink } from './styles';
import Logo from '../../assets/Logo-Main.png';
import Pedidos from '../../assets/icon-pedidos.png';
import Carrinho from '../../assets/icon-carrinho.png';
import Produtos from '../../assets/icon-produtos.png';
import Sair from '../../assets/icon-sair.png';

export function SideMenuAdmin() {
    const { logout } = useUser(); // Função para deslogar

    return (
        <Container>
            <ContainerImg>
                <img src={Logo} alt="" />
            </ContainerImg>
            <hr></hr>

            {listLinks.map(item => (
                <ContainerLinks key={item.id} isActive={true}>
                    <img src={Pedidos} />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ContainerLinks>
            ))}
            <hr></hr>

            <ContainerLinks style={{position: 'absolute', bottom: '30px'}}>
                <img src={Sair} />
                <ListLink to='/login' onClick={logout}>Sair</ListLink>
            </ContainerLinks>
        </Container>
    )
}