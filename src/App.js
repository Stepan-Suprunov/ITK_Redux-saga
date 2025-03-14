import './App.css';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/customerReduser';

function App() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    return (
        <div className="app">
            <button
                className="getUsersBtn"
                onClick={() => dispatch(fetchUsers())}
            >
                Получить пользователей
            </button>
            {users && users.map((el, i) => {
                return <h1 key={i}>{el.name}</h1>;
            })}
        </div>
    );
}

export default App;
