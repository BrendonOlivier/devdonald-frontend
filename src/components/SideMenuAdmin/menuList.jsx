// Informações dos nossos links do Menu
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import paths from "../../constants/path";

const listLinks = [
    { id: 1, label: 'Pedidos', link: paths.Order, icon: BorderColorIcon },
    { id: 2, label: 'Listar Produtos', link: paths.Products, icon: FormatListBulletedIcon },
    { id: 3, label: 'Novo Produto', link: paths.NewProduct, icon: ProductionQuantityLimitsIcon }
];

export default listLinks;