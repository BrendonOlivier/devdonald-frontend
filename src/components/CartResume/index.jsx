import { Container, ContainerItems } from './styles'
import { Button } from '../Button'

export function CartResume() {
    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='itens'>Itens</p>
                    <p className='itens-price'>R$ 10,00</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>R$ 10,00</p>
                </div>

                <div className='container-bot'>
                    <p>Total</p>
                    <p>R$ 50,00</p>
                </div>
            </Container>
            <Button style={{width: '100%', marginTop: 30}}>Finalizar Pedido</Button>
        </div>
    )
}