import Orders from './Orders'
import ListProducts from './ListProducts'

import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />

            <ContainerItems>
                { /*<Orders />*/}
                <ListProducts />
            </ContainerItems>
        </Container>
    )
}