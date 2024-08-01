import HomeLogo from '../../assets/Logo-Home.png';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import {Container, HomeImg} from './styles'

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="Banner-Home" />
            <CategoryCarousel />
        </Container>
    )
}