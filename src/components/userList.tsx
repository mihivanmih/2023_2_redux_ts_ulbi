import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserList:FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    );
};

export default UserList
