// --> Quote Craft Atoms Types
import type { JSX } from "react"


// --> Helmet 
export interface IHelmetProps {
    title: string
    description: string
    keywords?: string[]
    route?: string
}

// --> ProtectedRoute
export interface IProtectedRouteProps {
    children: JSX.Element
}