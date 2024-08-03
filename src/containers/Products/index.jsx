import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import ProductLogo from '../../assets/Logo-Produtos.svg';
import { Container, ProductImg, CategoriesMenu, CategoryButton } from './styles'


export function Products() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories) // Gravando as categorias pro nosso carrossel
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <ProductImg src={ProductLogo} alt="Banner-Home" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => { setActiveCategory(category.id) }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>

        </Container>
    )
}