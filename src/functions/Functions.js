export const formatNumber = (num) => {
    const numero = parseFloat(num)
    return Number.isInteger(numero) ? `${Intl.NumberFormat('en-US').format(numero)}.00` : `${Intl.NumberFormat('en-US').format(numero.toFixed(2))}`}
