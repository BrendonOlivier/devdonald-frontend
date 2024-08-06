// Informações dos nossos links do Menu
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import paths from "../../constants/path";

const listLinks = [
    { id: 1, label: 'Pedidos', link: paths.Order, icon: BorderColorIcon },
    { id: 2, label: 'Listar Produtos', link: paths.Products, icon: ProductionQuantityLimitsIcon }
];

export default listLinks;