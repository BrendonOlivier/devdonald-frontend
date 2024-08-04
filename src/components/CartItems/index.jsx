import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, Header, Body, ContainerImg, EmptyCart } from './styles';
import { FcEmptyTrash } from "react-icons/fc"; // Pegando o icone de lixeira da biblioteca

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts, deleteProduct } = useCart();

    const handleDeleteProduct = (productId) => {  
        const confirmDelete = window.confirm("Você realmente deseja excluir este produto?");  
        if (confirmDelete) {  
            deleteProduct(productId);  
        }  
    }; 

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 40 }}>Quantidade</p>
                <p style={{ paddingLeft: 10 }}>Total</p>
                <p></p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <ContainerImg>
                            <img src={product.url} alt="imagem do produto" />
                        </ContainerImg>
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className='quant-container'>
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                        <div className='lixo'>
                            <FcEmptyTrash size={30} onClick={() => handleDeleteProduct(product.id)} />
                        </div>
                    </Body>
                ))
                : (
                    <EmptyCart>Carrinho vazio...</EmptyCart>
                )
            }
        </Container>
    )
}