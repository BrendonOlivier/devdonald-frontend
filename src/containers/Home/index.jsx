import HomeLogo from '../../assets/Logo-Home.png';
import { CategoryCarousel, Header, OffersCarousel } from '../../components';
import { Container, HomeImg, CategoryImg, CategoryImgOffer } from './styles'

import Category from '../../assets/img-categorias.png';
import Offers from '../../assets/img-ofertas.png';

export function Home() {
    return (
            <Container>
                <Header />
                <HomeImg src={HomeLogo} alt="Banner-Home" />

                <CategoryImg src={Category} alt="logo-das-categorias" />
                <CategoryCarousel />

                <CategoryImgOffer src={Offers} alt="logo das ofertas" />
                <OffersCarousel />
            </Container>
    )
}