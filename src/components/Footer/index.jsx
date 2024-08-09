import { Container, LinksSocial, Info } from './styles';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import LogoFooter from '../../assets/Logo-Footer.png';

export function Footer() {
    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth' // Para um scroll suave até o topo  
        });  
    }; 

    return (
        <Container>
            <LinksSocial>
                <FaWhatsapp className='icon' />
                <FaInstagram className='icon'  />
                <SiIfood className='icon'  />
            </LinksSocial>

            <Info>
                <img src={LogoFooter} alt="Logo do footer" onClick={scrollToTop} />

                <div className='info-contato'>
                    <p>Av. Dev. FullStack, 693 - Campinas - SP</p>
                    <p>contato@devdonald.com | (19) 9 9777-7777</p>
                </div>

                <p className='copyright'>Site criado por <span>Brendon Olivier</span></p>
            </Info>
        </Container>
    )
}