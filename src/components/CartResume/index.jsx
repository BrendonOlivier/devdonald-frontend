import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { api } from '../../services/api'
import { toast } from 'react-toastify';

import { ContainerResume, Container } from './styles';
import { Button } from '../Button';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(5);
    const { cartProducts } = useCart();
    const navigate = useNavigate();

    // Caso eu mude as informações do meu carrinho irei adicionar as mudanças no Resumo do carrinho
    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])

    // Mandando as informações pro Pedido
    const submitOrder = async () => {
        // Verifica se o carrinho está vazio  
        if (cartProducts.length === 0) {
            toast.error('O carrinho está vazio! 🛑'); // Exibe mensagem de erro  
            return; // Interrompe a função  
        }

        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        try {
            await toast.promise(api.post('/orders', { products: order }), {
                pending: 'Realizando o seu pedido... 🛒',
                success: 'Pedido realizado com sucesso ✅',
                error: 'Falha ao tentar realizar o seu pedido, tente novamente ❌'
            }); // Mandando para a API  

            // Redireciona para a HOME após o pedido ser realizado com sucesso  
            navigate('/'); // Aqui você redireciona para a HOME  
        } catch (error) {
            // Você pode adicionar um tratamento de erro aqui, se necessário  
        }
    };

    return (
        <ContainerResume>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='itens'>Itens</p>
                    <p className='itens-price'>{formatCurrency(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>

                <div className='container-bot'>
                    <p>Total:</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button className='button' onClick={submitOrder}>Finalizar Pedido</Button>
        </ContainerResume>
    )
}