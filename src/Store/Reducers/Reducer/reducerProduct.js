
const initState = [];

const reducerProduct = (state = initState, action) =>{
    let newState;
    let index;
    switch(action.type){
        case 'ADD_PRODUCT':
            newState = [...state,{
                payload: action.payload
            }];
            state = newState;
            return state;

        case 'DELETE_PRODUCT':
            index = action.payload.index;
            newState = [...state];
            newState.splice(index, 1);
            state = newState;
            return state;

        case 'CHANGE_PRODUCT':
            newState = [...state];
            index = action.payload.index;
            newState[index].payload.value = action.payload.value;
            state = newState;
            return state;
        default: 
            return state;
    }
}
export default reducerProduct;