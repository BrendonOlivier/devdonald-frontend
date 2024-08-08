import { useLocation } from 'react-router-dom';
import { Home } from '../Home';
import Orders from './Orders';
import ListProducts from './ListProducts';
import paths from '../../constants/path';
import NewProduct from './NewProduct';
import NewCategory from './NewCategory';
import EditProduct from './EditProduct';

import { Container, ContainerItems } from './styles';
import { SideMenuAdmin } from '../../components';

export function Admin() {
    const location = useLocation();
    const pathname = location.pathname // Pegando o pathname dentro de location e guardando na Variavel 'pathUrl'

    return (
        <Container>
            <SideMenuAdmin pathname={pathname} />

            <ContainerItems>
                {pathname === paths.Home && <Home />}
                {pathname === paths.Order && <Orders />}
                {pathname === paths.Products && <ListProducts />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.NewCategory && <NewCategory />}
                {pathname === paths.EditProduct && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}