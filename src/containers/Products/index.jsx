import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { useLocation } from 'react-router-dom';  

import ProductLogo from '../../assets/Logo-Produtos.svg';
import { Container, ProductImg, CategoriesMenu, CategoryButton, ProductsContainer } from './styles'
import { CardProduct } from '../../components';


export function Products() {
    const location = useLocation(); // useLocation para obter o objeto de localização  
    const categoryId = location.state?.categoryId || 0; // Utilize valor padrão caso state não exista

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(categoryId);

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

      // Filtrando produtos sempre que activeCategory ou products mudam  
      useEffect(() => {  
        const newFilteredProducts = activeCategory === 0   
            ? products   
            : products.filter(product => product.category_id === activeCategory);  

        setFilteredProducts(newFilteredProducts);  
    }, [activeCategory, products]);  

    // Ao iniciar o componente, definindo a activeCategory com o categoryId recebido  
    useEffect(() => {  
        setActiveCategory(categoryId);  
    }, [categoryId]); 
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