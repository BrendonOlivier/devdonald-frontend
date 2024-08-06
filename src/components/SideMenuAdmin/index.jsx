import listLinks from './menuList';
import { useUser } from '../../hooks/UserContext';

import { Container, ContainerImg, ContainerLinks, ListLink } from './styles';
import Logo from '../../assets/Logo-Main.png';
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
                    <item.icon className='icon'/>
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