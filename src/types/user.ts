export interface userState {
    users: any[] | undefined
    loading: boolean
    error: null | string | undefined
}

export enum UserActionTypes
{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload?: any[] | undefined
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type userAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction