import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

// Função para todos os produtos pro carrinho
export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    // Pegando os dados dos produtos adicionados
    const putProductsInCart = async product => {
        // Se já estiver o mesmo produto adicionado, estarei pegando a posição desse produto...
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []

        // Se for salvo um produto que já existe no carrinho vou adicionar +1 no msm produto
        // E se for um produto novo, coloco ele no carrinho
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        // Guardando os dados no localStorage e transformando o objeto em String para guardar
        await localStorage.setItem('devdonald:cartInfo', JSON.stringify(newCartProducts))
    }

    // Função de adicionar mais produtos ao clicar no +
    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 }
                : product
        })

        setCartProducts(newCart)

        // E atualizar os dados no LocalStorage
        await localStorage.setItem('devdonald:cartInfo', JSON.stringify(newCart))
    };

    // Função para deletar o produto caso o número seja 1 e eu cliquei em diminuir
    const deleteProduct = async productId => {
        const newCart = cartProducts.filter( product => product.id !== productId) // Pegando a posição do item

        setCartProducts(newCart)

        // E atualizar os dados no LocalStorage
        await localStorage.setItem('devdonald:cartInfo', JSON.stringify(newCart))
    };

    // Função de diminuir mais produtos ao clicar no -
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId) // Pegando a posição do item

        // Se a quantidade do produto for maior que 1 vou diminuir a quantidade
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId ? { ...product, quantity: product.quantity - 1 }
                    : product
            })

            setCartProducts(newCart)

            // E atualizar os dados no LocalStorage
            await localStorage.setItem('devdonald:cartInfo', JSON.stringify(newCart))
        }
    };

    // Caso eu inicie ou reinicie a aplicação pego os dados do localStorage
    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('devdonald:cartInfo') // Recuperando os dados

            // E se tiver algum dado, coloco ele dentro do meu Estado
            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])


    // Retornando os dados do usuário para o (children)
    return (
        <CartContext.Provider value={{ putProductsInCart, cartProducts, increaseProducts, decreaseProducts, deleteProduct }}>
            {children}
        </CartContext.Provider>
    )
};

// Função que disponibiliza os dados para nossa aplicação
export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("O useCart deve ser usado com usercontext")
    }

    return context
}