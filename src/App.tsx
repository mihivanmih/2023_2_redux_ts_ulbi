import React from 'react';
import UserList from "./components/userList";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;
