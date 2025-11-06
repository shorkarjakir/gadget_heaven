
const checkLs = () => {
    const cartdata = localStorage.getItem('cart');
    if (cartdata) {
        return JSON.parse(cartdata)
    }
    return [];
}


const setCartInLS = (cart) => {
    const cartdata = JSON.stringify(cart);
    localStorage.setItem('cart', cartdata);
}

const addToLs = (id) => {
    let cartData = checkLs();
    if (!Array.isArray(cartData)) {
        cartData = [];
    }
    const isDuplicate = cartData.some(item => item === id);
    if (!isDuplicate) {
        cartData.push(id)
        setCartInLS(cartData);
    }
}

const handleRemove = (id) => {
    const cartItem = checkLs();
    const remainingItem = cartItem.filter(idx => idx !== id)
    setCartInLS(remainingItem);
}

export { checkLs, addToLs, handleRemove };