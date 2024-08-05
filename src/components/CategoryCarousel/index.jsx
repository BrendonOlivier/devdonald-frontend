import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react'; // Config do carrossel

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories')

                setCategories(data) // Gravando as categorias pro nosso carrossel
            } catch (error) {
                console.error("Erro ao carregar categorias:", error);
            }
        }

        loadCategories()
    }, [])

    return (
        <Container>

            <Swiper
                grabCursor
                spaceBetween={20}
                slidesPerView={'auto'}
                className='swiper'
            >
                {categories && categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <img src={category.url} alt="foto da categoria" />
                        <Link to={{
                            pathname: '/produtos',
                            state: { categoryId: category.id } // Mudança aqui para categoryId  
                        }}>
                            <Button>{category.name}</Button>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}