import HomeLogo from '../../assets/Logo-Banner.png';
import { CategoryCarousel, OffersCarousel } from '../../components';
import { Container, HomeImg, ContMain, CategoryImg, ContaSecond, CategoryImgOffer, ContainerInfo } from './styles'

import Category from '../../assets/img-categorias.png';
import Offers from '../../assets/img-ofertas.png';

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="Banner-Home" />

            <ContMain>
                <ContainerInfo>
                    <CategoryImg src={Category} alt="logo-das-categorias" />
                </ContainerInfo>

                <CategoryCarousel />
            </ContMain>

            <ContaSecond>
                <ContainerInfo>
                    <CategoryImgOffer src={Offers} alt="logo das ofertas" />
                </ContainerInfo>

                <OffersCarousel />
            </ContaSecond>
        </Container>
    )
}