import {Dispatch} from "redux";
import axios from "axios";
import {todoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodo = (page=1, limit = 10) => {
    return async (dispatch: Dispatch<todoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            },500)
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка'})
        }
    }
}

export const setTodoPage = (page: number): todoAction => {
    return {type: TodoActionTypes.FETCH_TODOS_PAGE, payload: page}
}