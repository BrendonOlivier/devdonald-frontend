import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

// Função para gerar os dados do usuário
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    // Gravando os dados do usuário
    const putUserData = async (userInfo) => {
        setUserData(userInfo)

        // Guardando os dados no localStorage e transformando o objeto em String para guardar
        await localStorage.setItem('devdonald:userData', JSON.stringify(userInfo))
    }

    // Caso eu inicie ou reinicie a aplicação pego os dados do localStorage
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('devdonald:userData')

            // E se tiver algum dado, coloco ele dentro do meu Estado
            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])


    // Retornando os dados do usuário para o (children)
    return (
        <UserContext.Provider value={{ userData, putUserData }}>
            {children}
        </UserContext.Provider>
    )
};

// Função que disponibiliza os dados para nossa aplicação
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("O useUser deve ser usado com usercontext")
    }

    return context
}