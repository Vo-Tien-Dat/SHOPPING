

const addProduct = (payload) =>{
    return{
        type: "ADD_PRODUCT",
        payload: payload
    }
}

export default addProduct;