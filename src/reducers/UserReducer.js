
const initialState={
    UsersData:[],
    user:{}
}

export default function (state=initialState,action){

    switch (action.type) {
        case 'FETCH_USERS': 
        return{
            ...state,
            UsersData: action.payload
        }
            break;
    case 'ADD_USER':
    return{
        ...state,
        user:action.payload
    }
        default:
            break;
    }
    return state;
}