// Informações dos nossos links do Menu
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import LoupeIcon from '@mui/icons-material/Loupe';

import paths from "../../constants/path";

const listLinks = [
    { id: 1, label: 'Home', link: paths.Home, icon: HomeIcon },
    { id: 2, label: 'Pedidos', link: paths.Order, icon: BorderColorIcon },
    { id: 3, label: 'Listar Produtos', link: paths.Products, icon: FormatListBulletedIcon },
    { id: 4, label: 'Novo Produto', link: paths.NewProduct, icon: ProductionQuantityLimitsIcon },
    { id: 5, label: 'Nova Categoria', link: paths.NewCategory, icon: LoupeIcon }
];

export default listLinks;