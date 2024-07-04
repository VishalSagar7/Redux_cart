

export function addToCart(item){
    return {type : 'addToCart', payload : item}
}
export function removeFromCart(){
    return {type : 'removeFromCart'}
}