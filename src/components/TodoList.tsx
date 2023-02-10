import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Todo:FC = () => {

    const {todos, page, error, loading, limit} = useTypedSelector(state => state.todo)
    const pages = [1,2,3,4,5]

    const {fetchTodo, setTodoPage} = useActions()

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page]);

    if(loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if(error) {
        return  <h1>{error}</h1>
    }

    return (
        <div>
            {
                todos && todos.map(todo => <div key={todo.id}>{todo.title}</div>)
            }
            {
                pages && pages.map(page => <button onClick={ () => setTodoPage(page) } key={page}>{page}</button>)
            }
        </div>
    );
};

export default Todo;
