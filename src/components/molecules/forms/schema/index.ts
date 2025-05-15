import { z } from 'zod'

// -------------
// ------------- LOGIN FORM
// -------------

// --> Login Schema Definition
export const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8)
})

// --> Login Form Values Type
export type TLoginFormValues = z.infer<typeof loginSchema>
