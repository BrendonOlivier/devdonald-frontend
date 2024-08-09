import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';

import { Container, LinkStyle, ContainerCarrossel } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react'; // Config do carrossel

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories')

                setCategories(data) // Gravando as categorias pro nosso carrossel
            } catch (error) {
                return 
            }
        }

        loadCategories()
    }, [])

    return (
        <Container>

            <Swiper
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                className='swiper'
            >
                {categories && categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <ContainerCarrossel>
                            <img src={category.url} alt="foto da categoria" />
                            <LinkStyle to={{
                                pathname: '/produtos',
                                state: { categoryId: category.id } // Mudança aqui para categoryId  
                            }}>
                                {category.name}
                            </LinkStyle>
                        </ContainerCarrossel>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}