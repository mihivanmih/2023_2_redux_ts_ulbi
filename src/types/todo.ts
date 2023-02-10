export interface todoState {
    todos: any[] | undefined
    loading: boolean
    error: null | string | undefined
    page: number
    limit: number
}

export enum TodoActionTypes
{
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    FETCH_TODOS_PAGE = 'FETCH_TODOS_PAGE'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload?: any[] | undefined
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}

interface setTodoPage {
    type: TodoActionTypes.FETCH_TODOS_PAGE
    payload: number
}

export type todoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | setTodoPage