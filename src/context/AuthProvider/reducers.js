import AsyncStorage from '@react-native-async-storage/async-storage'

export default function (state,action) {
    switch (action.type) {
        case 'SET_USER':
            const {user} = action.payload;
            AsyncStorage.setItem('@USER', JSON.stringify(user))
            return {...state, user: user};

        case 'USER_LOGOUT':
        AsyncStorage.removeItem('@USER')
        return {...state,user:null}    
        default:
            return state
    }
}