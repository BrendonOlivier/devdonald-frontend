import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';

import Category from '../../assets/img-categorias.png';
import { Container, CategoryImg } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react'; // Config do carrossel

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data) // Gravando as categorias pro nosso carrossel
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt="logo-das-categorias" />

            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className='swiper'
            >
                {categories && categories.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.url} alt="" />
                        <h3>{item.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}