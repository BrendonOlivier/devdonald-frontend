import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';

import { Button } from '../Button'
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react'; // Config do carrossel
import formatCurrency from '../../utils/formatCurrency';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('/products')

            // Filtrando os produtos que estão em oferta
            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatPrice: formatCurrency(product.price) }
            })

            setOffers(onlyOffers) // Gravando as categorias pro nosso carrossel
        }

        loadOffers()
    }, [])

    return (
        <Container>
            <Swiper
                grabCursor
                spaceBetween={20}
                slidesPerView={'auto'}
                className='swiper'
            >
                {offers && offers.map((product, index) => (
                    <SwiperSlide key={index}>
                        <img src={product.url} alt="foto do produto" />
                        <h3>{product.name}</h3>
                        <p>{product.formatPrice}</p>
                        <Button>Peça Agora</Button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}