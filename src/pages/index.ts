// --> Authentication Page
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'

// --> Dashboard Page
import Analytics from './dashboard/Analytics'
import Invoices from './dashboard/Invoices'
import Parameters from './dashboard/Parameters'
import Settings from './dashboard/Settings'
import Customers from './dashboard/Customers'

// --> Invoices Page
import SingleInvoice from './invoice/SingleInvoice'

// --> Errors Page
import { BaseError } from './error/BaseError'

export {
  // --> Authentication Page
  Login,
  Register,
  ForgotPassword,

  // --> Dashboard Page
  Analytics,
  Invoices,
  Parameters,
  Settings,
  Customers,

  // --> Invoices Page
  SingleInvoice,

  // --> Errors Page
  BaseError
}
