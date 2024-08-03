// Onde iremos formatar nossa moeda --R$--
const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
};

export default formatCurrency;