


const deleteProduct = (payload) => {
    return{
        type: "DELETE_PRODUCT",
        payload: payload
    }
}

export default deleteProduct;