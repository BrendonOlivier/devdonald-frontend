import React, {useEffect} from 'react'
import { api } from '../../services/api';

import Category from '../../assets/img-categorias.png';
import {Container, CategoryImg} from './styles'

export function CategoryCarousel() {

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories')

            console.log(response)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt="logo-das-categorias" />
        </Container>
    )
}