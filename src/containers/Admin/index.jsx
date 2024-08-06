import { useLocation } from 'react-router-dom';  
import Orders from './Orders'
import ListProducts from './ListProducts'
import paths from '../../constants/path'

import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';

export function Admin() {
    const location = useLocation();  
    const pathname = location.pathname // Pegando o pathname dentro de location e guardando na Variavel 'pathUrl'

    return (
        <Container>
            <SideMenuAdmin pathname={pathname} />

            <ContainerItems>
                {pathname === paths.Order && <Orders />}
                {pathname === paths.Products && <ListProducts />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.EditProduct && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}