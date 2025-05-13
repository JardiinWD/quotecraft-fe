// ------------- LOCALES -------------
export type TLocales = 'it' | 'en'

// ------------- GROUPED TRANSLATIONS -------------
export type TGroupedTranslations = {
  it: string
  en: string
}

// ------------- GROUPED ITEMS -------------
export type TGroupedItems = {
  [id: string]: string | TGroupedTranslations
}

// ------------- TRANSLATIONS -------------
export type TTranslations = {
  [key: string]: string
}
