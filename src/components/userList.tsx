import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList:FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, []);

    if(loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if(error) {
        return  <h1>{error}</h1>
    }
    
    return (
        <div>
            {
                users && users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UserList
