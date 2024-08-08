import listLinks from '../SideMenuAdmin/menuList';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { IoClose } from "react-icons/io5";
import { Container, ContainerLinks, ListLink } from './styles'

export function MenuMobile({ menuIsVisible, setMenuIsVisible, handleLinkClick }) {
    const location = useLocation(); // Função para deslogar 
    const pathname = location.pathname;

    useEffect(() => {
        document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible])

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose className="icon-fechar" onClick={() => setMenuIsVisible(false)} />
            <p>Olá, Administrador</p>
            {listLinks.map(item => (
                <ContainerLinks key={item.id} isActive={pathname === item.link}>
                    <item.icon className='icon' />
                    <ListLink onClick={() => handleLinkClick(item.link)}>{item.label}</ListLink>
                </ContainerLinks>
            ))}
        </Container>
    )
}