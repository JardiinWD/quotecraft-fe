// ------------ COMMON ERROR API LAYER
export type TPromiseError = string | unknown | null | Error

// ------------ COMMON STATUS API LAYER
export type TPromiseStatus = 'success' | 'error'

// ------------ AUTHENTICATION DATA
export interface IAuthData {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}

// ------------ AUTHENTICATION PROMISE
export interface IAuthPromise {
    data?: IAuthData
    error?: TPromiseError
    status?: TPromiseStatus
}

// ------------ AUTHENTICATION API CALL CONTEXT
export type TAuthApiContext =
    | 'handleLogin'
    | 'getCurrentUser'
    | 'getRefreshToken'

// ------------ AUTHENTICATION API LAYER
export interface IAuthApi {
    handleAuthenticationErrors: (
        error: TPromiseError,
        context: TAuthApiContext
    ) => Promise<IAuthPromise>
    handleLogin: (username: string, password: string) => Promise<IAuthPromise>
    getCurrentUser?: () => Promise<IAuthPromise>
    getRefreshToken?: (refreshToken: string) => Promise<IAuthPromise>
}