import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';

import ProductLogo from '../../assets/Logo-Produtos.svg';
import { Container, ProductImg, CategoriesMenu, CategoryButton, ProductsContainer } from './styles'
import { CardProduct } from '../../components';


export function Products() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        // Carregando as categorias
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        // Carregando os produtos
        async function loadProducts() {
            const { data: allProducs } = await api.get('/products')

            const newProducts = allProducs.map(product => {
                return { ...product, formatPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()
    }, [])

    // Ao clicar nos botões de categoria, quero filtar os produtos de acordo com a escolha de categoria
    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {

            const newFilteredProducts = products.filter(product => product.category_id === activeCategory)

            setFilteredProducts(newFilteredProducts);
        }
    }, [activeCategory, products])

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

            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>

        </Container>
    )
}