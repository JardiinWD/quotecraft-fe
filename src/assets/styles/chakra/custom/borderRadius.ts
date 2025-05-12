import type { TChakraCustomStyle } from '@/assets/styles/chakra/custom/types'

export const ChakraBorderRadius: TChakraCustomStyle['radii'] = {
  none: { value: 0 },
  sm: { value: '0.125rem' }, // 2px
  base: { value: '0.25rem' }, // 4px
  md: { value: '0.375rem' }, // 6px
  lg: { value: '0.5rem' }, // 8px
  xl: { value: '0.75rem' }, // 12px
  '2xl': { value: '1rem' }, // 16px
  '3xl': { value: '1.5rem' }, // 24px
  '4xl': { value: '2rem' }, // 32px
  full: { value: '9999px' }
}
