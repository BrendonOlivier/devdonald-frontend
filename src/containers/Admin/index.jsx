import Orders from './Orders'
import ListProducts from './ListProducts'

import { Container } from './styles'
import { SideMenuAdmin } from '../../components'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
           {/* <Orders />*/}
           <ListProducts />
        </Container>
    )
}