export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';

const initialValue = {
    users: [{name: 'Антон'}]
}

export const customerReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload]};
    }
    return state
};
export const setUsers = (payload) => ({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});
