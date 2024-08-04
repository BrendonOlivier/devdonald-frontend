import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';

import { Container } from './styles';
import { Button } from '../Button';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(5);
    const { cartProducts } = useCart();

    // Caso eu mude as informações do meu carrinho irei adicionar as mudanças no Resumo do carrinho
    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='itens'>Itens</p>
                    <p className='itens-price'>{formatCurrency(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>

                <div className='container-bot'>
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: 30 }}>Finalizar Pedido</Button>
        </div>
    )
}