import { createBrowserRouter } from 'react-router-dom'
// --> Routes
import { Auth, Dashboard, Default, Invoice } from '@/routes'

const router = createBrowserRouter([Default, Auth, Dashboard, Invoice])

export default router
