export default function (state,action) {
    switch (action.type) {
        case 'ADD_NAME':
            const {name} = action.payload
            const newList = [...state.nameList,name]
            return {...state, nameList: newList}
            // return {...state, nameList: [...state.nameList,action.payload.name]}
        case 'CLEAN':
            return {...state,nameList:[]}    
        
        case 'ADD_USER':
            return{...state,userName: action.payload.username}
        default:
            return {...state}
    }
}