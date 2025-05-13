import { useNavigatorLanguage } from '@/hooks'

const LanguageSetter = () => {
  // Invoke the custom hook
  useNavigatorLanguage()
  // Don't render anything
  return null
}

export default LanguageSetter
