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
        <CartContext.Provider value={{ putProductsInCart, cartProducts }}>
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