
const initState = [];

const reducerProduct = (state = initState, action) =>{
    let newState;
    switch(action.type){
        case 'ADD_PRODUCT':
            newState = [...state,{
                payload: action.payload
            }];
            state = newState;
            return state;
        case 'DELETE_PRODUCT':
            return state;

        default: 
            return state;
    }
}
export default reducerProduct;