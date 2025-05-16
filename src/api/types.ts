// ------------ COMMON ERROR API LAYER
export type TPromiseError = string | unknown | null | Error

// ------------ COMMON STATUS API LAYER
export type TPromiseStatus = 'success' | 'error'

// ------------
// ------------ AUTHENTICATION DATA
// ------------

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

// ------------
// ------------ APPWRITE DATA
// ------------

// ---------- GET NAVIGATOR LOCALE
export type TNavigatorLocalePromise = {
  locale: {
    [key: string]: string
  }
  error: TPromiseError
  status: TPromiseStatus
}

// ------------ APP WRITE PROMISES
export interface IAppWriteResponse {
  documents: IAppWriteDocument[]
  total: number
}

// ------------ APP WRITE LOOP AND RETRIEVE PROMISES
export type IAppWriteDocument = {
  $collectionId?: string
  $createdAt?: string
  $databaseId?: string
  $id?: string
  $permissions?: string[]
  $updatedAt?: string
  en: string
  label_id: string
  it: string
}

// ------------ APP WRITE LOOP AND RETRIEVE PROMISES
export type IAppWriteLoopedData = {
  en: string
  label_id: string
  it: string
}

// ---------- APP WRITE PROMISE
export interface IAppWritePromise {
  data?: unknown
  error?: TPromiseError
  status?: TPromiseStatus
}

// ------------ AUTHENTICATION API CALL CONTEXT
export type TAppWriteApiContext =
  | 'handleAppWriteErrors'
  | 'getNavigatorLocale'
  | 'getCollectionFromAppwriteDB'

// ------------ APPWRITE API LAYER
export interface IAppWriteApi {
  handleAppWriteErrors: (
    error: TPromiseError,
    context: TAppWriteApiContext
  ) => Promise<IAppWritePromise>
  getNavigatorLocale: () => Promise<TNavigatorLocalePromise>
  getCollectionFromAppwriteDB: (
    databaseId: string,
    collectionId: string
  ) => Promise<IAppWritePromise>
}

// ------------
// ------------ INVOICES DATA (MockAPI)
// ------------

// ------------  RESOURCES
export type TMockedResources = 'users' | 'posts'

// ------------ GET USERS RESPONSE
export interface IGetUsersResponse extends Record<string, unknown> {
  id: string
  name: string
  email: string
  avatar: string
  createdAt: string
  updatedAt: string
}

// ------------ GET POSTS RESPONSE
export interface IGetPostsResponse extends Record<string, unknown> {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  isPublished: boolean
  author: string
}

// ------------ DATA
export type TInvoicesData = IGetUsersResponse[] & IGetPostsResponse[]

// ------------ PROMISE
interface IMockPromise {
  data: TInvoicesData | []
  error: TPromiseError
  status: TPromiseStatus
}

export interface IMockApi {
  getResource: (slug: string, options?: object) => Promise<IMockPromise>
  getResourceById: (
    slug: string,
    id: string,
    options?: object
  ) => Promise<IMockPromise>
  handleResourceErrors: (
    error: Error | string | unknown,
    context: string
  ) => Promise<IMockPromise>
}
