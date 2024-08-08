import { useState } from 'react';
import listLinks from './menuList';
import { useUser } from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';

import { Container, ContainerImg, ContainerLinks, ListLink, ContainerMobile } from './styles';
import Logo from '../../assets/Logo-Main.png';
import Sair from '../../assets/icon-sair.png';
import { MenuMobile } from '../MenuMobile';
import { RiMenuFill } from "react-icons/ri";

export function SideMenuAdmin({ pathname }) {
    const { logout } = useUser(); // Função para deslogar
    const navigate = useNavigate();
    // Criando um estado pro menu pra saber se tá aberto ou fechado
    const [menuIsVisible, setMenuIsVisible] = useState(false);

       // Função para navegar e fechar o menu  
       const handleLinkClick = (link) => {  
        setMenuIsVisible(false); // Fecha o menu  
        navigate(link); // Navega para a nova rota  
    }; 

    return (
        <Container>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
                handleLinkClick={handleLinkClick}
            />
            <ContainerMobile>
                <RiMenuFill onClick={() => setMenuIsVisible(true)} className='icon-abrir' />
                <ListLink to='/login' onClick={logout} className='icon-sair'><img src={Sair} /></ListLink>
            </ContainerMobile>

            <ContainerImg>
                <img src={Logo} alt="" />
            </ContainerImg>
            <hr></hr>

            {listLinks.map(item => (
                <ContainerLinks key={item.id} isActive={pathname === item.link}>
                    <item.icon className='icon' />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ContainerLinks>
            ))}
            <hr></hr>

            <ContainerLinks>
                <img src={Sair} />
                <ListLink to='/login' onClick={logout}>Sair</ListLink>
            </ContainerLinks>
        </Container>
    )
}